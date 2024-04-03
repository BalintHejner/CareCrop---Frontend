import { Link } from "react-router-dom";
import React from "react";
import "../output.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
export default function Header2() {

  // const [value, setValue] = React.useState();
  const navigate = useNavigate()
  
  // React.useEffect(() => {
  //   navigate('/shop');
  // }, [value]);

  //Cannot read properties of undefined (reading 'state')
  // let state;
  // let username;

  // const componentDidMount = () => {
  //   axios.get('username', config).then (response => {
  //     this.setState({
  //       username: response.data
  //     })
  //   }).catch(err => {
  //     console.log(err);
  //   })
  // }
  

  return (
      <>
      <div className="flex justify-between px-6 py-2 w-full text-2xl bg-header max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <Link to={"/"} className="carecroplogo">
        <img loading="lazy" src={require('../images/carecroplogo.png')}/>
      </Link>
      <div className="flex mt-1 mr-25r px-3 py-2 h-select bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
          <select className="shadow appearance-none border rounded h-3 w-360  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option className="mg-5 glass" value="" disabled selected>Válasszon árucsoportot</option>
            <hr className="mx-auto"/>
            <option className="mg-5"  value="Termény">Termény</option>
            <hr className="mx-auto"/>
            <option className="mg-5"  value="Terményvédő szerek"  >Terményvédő szerek</option>
          </select>
        </div>
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
              <div className="flex gap-2.5 w-380 justify-between px-3 py-2 bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
                <input className="shadow appearance-none border rounded w-10px  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Keresés"/>
                <img loading="lazy" src={require('../images/searchLogo.png')} className="w-3 glass aspect-square" />
              </div>
            </div>
            
            <Link to={"/cart"}>
              <img loading="lazy" src={require('../images/shopping-cart.png')} className="aspect-square w-[82px]"/>
            </Link>

            {/* <span>
              {
                state.username ? (
                  <Link to ={"/profile"}>
                    <p className="aspect-square w-[82px]">{state.username.username}</p>
                  </Link>
                ) : (
                  <Link to ={"/login"}>
                    <img loading="lazy" src={require('../images/loginMan.png')} className="aspect-square w-[82px]" />
                  </Link>
                )
              }
            </span> */}

            <Link to ={"/login"}>
              <img loading="lazy" src={require('../images/loginMan.png')} className="aspect-square w-[82px]" />
            </Link>


          </div>
        </div>
      </>
      );
}