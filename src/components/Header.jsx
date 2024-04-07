import "../output.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
      // Function to check if the user is logged in and fetch user data
      const checkLoggedIn = async () => {
          try {
              // Make a request to your backend to check if the user is logged in
              const response = await axios.get('/api/user');
              if (response.data.loggedIn) {
                  // If the user is logged in, set the loggedIn state to true
                  setLoggedIn(true);
                  // Also, set the username state with the user's username
                  setUsername(response.data.username);
              }
          } catch (error) {
              console.error('Nincs bejelentkezve:', error);
          }
      };

      // Call the function to check login status when the component mounts
      checkLoggedIn();
  }, []);

  const handleLogout = async () => {
      try {
          // Make a request to your backend to logout the user
          await axios.post('/api/logout');
          // Reset the loggedIn and username states
          setLoggedIn(false);
          setUsername('');
      } catch (error) {
          console.error('Error logging out:', error);
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
          )
          }
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
              <div className="flex gap-2.5 justify-between px-3 py-2 bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
              <input className="shadow appearance-none border rounded w-10px  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Keresés"/>
                <img loading="lazy" src={require('../images/searchLogo.png')} className="w-3 glass aspect-square" />
              </div>
            </div>
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