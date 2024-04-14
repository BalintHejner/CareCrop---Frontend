import "../output.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [username, setUsername] = useState('');

  useEffect(() => {
      const checkLoggedIn = async () => {
          try {
              const response = await axios.get('/users.php');
              if (localStorage.getItem('token')) {
                  setLoggedIn(true);
                  setUsername(response.data.username);
              }
          } catch (error) {
              console.error('Nincs bejelentkezve:', error);
          }
      };

      const checkCartEmpty = async () => {
          try {
              const response = await axios.get('/cart.php');
              if (response.data.length > 0) {
                  setCartEmpty(false);
              } else {
                  setCartEmpty(true);
              }
          } catch (error) {
              console.error('Hiba a kosár ellenőrzése közben:', error);
          }
      };

      checkLoggedIn();
      checkCartEmpty();
  }, []);

  const handleLogout = async () => {
      try {
          await axios.get('/logout.php');
          setLoggedIn(false);
          localStorage.clear();
          setUsername('');
          navigate('/');
      } catch (error) {
          console.error('Hiba a kijelentkezésnél:', error);
      }
  };

  const navigate = useNavigate()
  const [selectedPage, setSelectedPage] = useState('');

  const handlePageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedPage(selectedValue);
    navigate(selectedValue);
  };
  

    return (
        <div className="flex gap-5 justify-between self-stretch px-6 py-2 w-full text-2xl bg-header max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <Link to={"/"} className="carecroplogo">
            <img loading="lazy" src={require('../images/carecroplogo.png')} />
          </Link>
          {loggedIn ? (  
            <div className="flex mt-1 mr-25r px-3 py-2 h-select bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
              <select value={selectedPage} onChange={handlePageChange} className="shadow appearance-none border rounded h-3 w-360  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option className="mg-5 glass" value="" disabled selected>Válasszon árucsoportot</option>
                <hr className="mx-auto"/>
                <option className="mg-5"  value="/shop">Termény</option>
                <hr className="mx-auto"/>
                <option className="mg-5"  value="/comingsoon">Terményvédő szerek</option>
              </select>
            </div>
          ) : (
            ""
          )}
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
          {cartEmpty ? (
            <Link to={"/cart"}>
              <img loading="lazy" src={require('../images/shopping-cart.png')} className="aspect-square w-[82px]"/>
            </Link>
                ) : (
                  <img loading="lazy" src={require('../images/shopping-cart.png')} className="aspect-square w-[82px]"/>
                )}
         
            {loggedIn ? (
                    <div className="flex items-center">
                        <button onClick={handleLogout}>
                          <img loading="lazy" src={require('../images/logout.png')} className="aspect-square w-82" alt="Profile" />
                        </button>
                        <Link to={"/profile"} className="flex text-gold items-center">
                          {username}
                        </Link>
                    </div>
                    
                ) : (
                    <Link to={"/login"}>
                        <img loading="lazy" src={require('../images/loginMan.png')} className="aspect-square w-82" alt="Login" />
                    </Link> 
                )}
          </div>
        </div>
      );
}