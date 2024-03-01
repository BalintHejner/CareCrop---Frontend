import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";

// function Navigate() {
//   const navigate = useNavigate();
// }

// function ToRegister() {
//   Navigate();
//   navigate("/src/pages/RegisterPage.js")
// }

function LoginForm() {
  return (
    <>
      <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Bejelentkezés</div>
      <div className="mt-11 text-3xl font-semibold max-md:mt-10">Felhasználónév:</div>
      <input className="shadow appearance-none border mt-3 rounded w-360 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Felhasználónév"/>
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      <input className="shadow appearance-none border mt-3 border-red-500 h-input rounded w-360 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Jelszó"/>
      <Button/>

    </>
  );
}

function Footer() {
  return (
    <>
      <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 px-5 text-center">
          <div className="text-4xl">Nincs még fiókja?</div>
          <div className="self-center mt-4 text-3xl italic font-extralight underline" onClick={console.log("REGISZTRÁLJ")}>Regisztráljon</div>
        </div>
      <div className="flex flex-col flex-1 px-5 my-auto">
          <div className="text-4xl text-center">Elfelejtette jelszavát?</div>
          <div className="self-center mt-4 text-3xl italic font-extralight underline" onClick={console.log("JELSZÓ")}>Jelszóemlékeztető</div>
        </div>
      </div>
    </>
  )
}


function LoginPage() {
  return (
    <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;