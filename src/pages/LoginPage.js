import * as React from "react";
import "../output.css";

 function Header() {
  return (
    <div className="flex gap-5 justify-between self-stretch px-6 py-2 w-full text-2xl bg-header max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <img loading="lazy" src={require('../images/carecroplogo.png')} className=" carecroplogo  " />
      <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
          <div className="flex gap-2.5 justify-between px-3 py-2 bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
          <input className="shadow appearance-none border rounded w-10px  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search" type="text" placeholder="Keresés"/>
            <img loading="lazy" src={require('../images/searchLogo.png')} className="w-8 aspect-square" />
          </div>
        </div>
        <img loading="lazy" src={require('../images/loginMan.png')} className="aspect-square w-[82px]" />
      </div>
    </div>
  );
};


function LoginForm() {
  return (
    <>
      <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Bejelentkezés</div>
      <div className="mt-11 text-3xl font-semibold max-md:mt-10">Felhasználónév:</div>
      <input className="shadow appearance-none border mt-3 rounded w-360 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Felhasználónév"/>
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      <input className="shadow appearance-none border mt-3 border-red-500 h-input rounded w-360 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Jelszó"/>
        <button className="justify-center items-center px-16 py-4 mt-20 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10">
        Bejelentkezés
      </button>
      <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col flex-1 px-5 text-center">
        <div className="text-4xl">Nincs még fiókja?</div>
        <div className="self-center mt-4 text-3xl italic font-extralight underline" >Regisztráljon</div>
      </div>
      <div className="flex flex-col flex-1 px-5 my-auto">
        <div className="text-4xl text-center">Elfelejtette jelszavát?</div>
        <div className="self-center mt-4 text-3xl italic font-extralight underline" >Jelszóemlékeztető</div>
      </div>
    </div>
    </>
  );
}


function LoginComponent() {
  return (
    <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
      <Header />
      <LoginForm />
    </div>
  );
}

export default LoginComponent;