import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordReminderPage from "../pages/PasswordReminderPage";
import RegisterPage from "./RegisterPage";

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
      <Input placeholder={"Felhasználónév"} type={"text"} />
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      {/* Password toggle */}
      <Input placeholder={"Jelszó"} type={"password"} />
      <Button text={"Bejelentkezés"} />
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="flex gap-5 justify-between mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 px-5 text-center">
          <div className="text-4xl">Nincs még fiókja?</div>
          <button className="self-center mt-4 text-3xl italic font-extralight underline" onClick={RegisterPage}>Regisztráljon</button>
        </div>
      <div className="flex flex-col flex-1 px-5 my-auto">
          <div className="text-4xl text-center">Elfelejtette jelszavát?</div>
          <button className="self-center mt-4 text-3xl italic font-extralight underline" onClick={PasswordReminderPage}>Jelszóemlékeztető</button>
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