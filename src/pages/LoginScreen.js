import * as React from "react";
import "../output.css";

 function Header() {
  return (
    <div className="flex gap-5 justify-between self-stretch px-6 py-2 w-full text-2xl bg-lime-800 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <img loading="lazy" src="" className="-w-full aspect-square w-[100px]" />
      <div className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center my-auto max-md:max-w-full">
          <div className="flex gap-2.5 justify-between px-3 py-2 bg-white rounded border-2 border-blue-400 border-solid max-md:flex-wrap max-md:max-w-full">
            <div className="grow self-start mt-1.5">valamivalamivalami</div>
            <img loading="lazy" src="" className="w-8 aspect-square" />
          </div>
        </div>
        <img loading="lazy" src="" className="aspect-square w-[82px]" />
      </div>
    </div>
  );
};


function LoginForm() {
  return (
    <>
  <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Bejelentkezés</div>
 <div className="mt-11 text-3xl font-semibold max-md:mt-10">Felhasználónév:</div>
      <div className="flex gap-px py-3.5 pr-20 max-w-full text-2xl bg-white rounded border-2 border-blue-400 border-solid w-[361px] max-md:pr-5">
        <div className="grow self-start">Sanyi45</div>
        <div className="w-px h-7 bg-black" />
      </div>
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      <div className="justify-center items-center px-16 py-4 mt-20 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10">
        Bejelentkezés
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col flex-1 px-5 text-center">
        <div className="text-4xl">Nincs még fiókja?</div>
        <div className="self-center mt-1.5 text-3xl italic font-extralight underline">Regisztráljon</div>
      </div>
      <div className="flex flex-col flex-1 px-5 my-auto">
        <div className="text-4xl text-center">Elfelejtette jelszavát?</div>
        <div className="self-center mt-3 text-3xl italic font-extralight underline">Jelszóemlékeztető</div>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col items-center pb-12 text-black whitespace-nowrap bg-neutral-500 leading-[100%]">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default MyComponent;