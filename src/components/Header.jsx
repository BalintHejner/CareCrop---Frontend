import "../output.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
      const checkLoggedIn = async () => {
          try {
              const response = await axios.get('/users.php');
              if (response.data.loggedIn) {
                  setLoggedIn(true);
                  setUsername(response.data.username);
              }
          } catch (error) {
              console.error('Nincs bejelentkezve:', error);
          }
      };

      checkLoggedIn();
  }, []);

  const handleLogout = async () => {
      try {
          await axios.post('/users.php', { action: 'logout' });
          setLoggedIn(false);
          setUsername('');
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
            {loggedIn ? (
                    <div className="flex items-center">
                        <span>{username}</span>
                        <button onClick={handleLogout}>Logout</button>
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