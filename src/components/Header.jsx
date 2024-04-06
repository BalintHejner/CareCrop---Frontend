import "../output.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex gap-5 justify-between self-stretch px-6 py-2 w-full text-2xl bg-header max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <Link to={"/"} className="carecroplogo">
            <img loading="lazy" src={require('../images/carecroplogo.png')} />
          </Link>
          <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
              <div className="flex gap-2.5 justify-between px-3 py-2 bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
              <input className="shadow appearance-none border rounded w-10px  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Keresés"/>
                <img loading="lazy" src={require('../images/searchLogo.png')} className="w-3 glass aspect-square" />
              </div>
            </div>
            <Link to={"/login"}>
              <img loading="lazy" src={require('../images/loginMan.png')} className="aspect-square w-82" />
            </Link> 
          </div>
        </div>
      );
}