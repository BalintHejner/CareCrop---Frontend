import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["token"]); // Using cookies hook

  let username;
  let password;

  const handleLogin = async e => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };

    try {
      const response =  
      axios.post("login.php", data, {withCredentials: true})
      .then(res => {
        // Storing the token in a cookie
        setCookie("token", res.data.token, { path: "/" });
      })
      .catch(err => console.log(err));

      const token = response.data.token;

      setCookie("token", token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
      })
    } catch (error) {
      console.error('Hibás bejelentkezés:', error);
    }
  };

  return (
    <>
      <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Bejelentkezés</div>
      <div className="mt-11 text-3xl font-semibold max-md:mt-10">Felhasználónév:</div>
      <Input placeholder={"Felhasználónév"} change={e => (username = e.target.value)} type={"text"} />
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      <Input placeholder={"Jelszó"} change={e => (password = e.target.value)} type={"password"} />
      <Button text={"Bejelentkezés"} click={handleLogin} />
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div className="flex gap-5 justify-between mt-5 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 px-5 text-center">
          <div className="text-4xl">Nincs még fiókja?</div>
          <Link to={"/register"} className="self-center mt-1 text-3xl italic font-extralight underline">Regisztráljon</Link>
        </div>
        <div className="flex flex-col flex-1 px-5 my-auto">
          <div className="text-4xl text-center">Elfelejtette jelszavát?</div>
          <Link to={"/passwordreminder"} className="self-center mt-1 text-3xl italic font-extralight underline">Jelszóemlékeztető</Link>
        </div>
      </div>
    </>
  );
};

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
