import React, { useState } from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `login.php?username=${username}&password=${password}`,
        { username: username, password: password },
        { withCredentials: true }
      );
      if (response && response.data) {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/shop"); 
      } else {
        console.error("Nem sikerült bejelentkezni: Rossz válaszformátum");
        alert("Váratlan hiba történt a bejelentkezés során! Kérjük próbálja meg újra!");
      }
    } catch (error) {
      console.error("Hibás bejelentkezés:", error.response?.data?.error || "Ismeretlen hiba!");

      alert(error.response?.data?.error || "Váratlan hiba történt!");
    }
  };
  
  

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  return (
    <>
      <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">
        Bejelentkezés
      </div>
      <div className="mt-11 text-3xl font-semibold max-md:mt-10">
        Felhasználónév:
      </div>
      <Input
        placeholder={"Felhasználónév"}
        change={handleUsernameChange}
        type={"text"}
      />
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      <Input
        placeholder={"Jelszó"}
        change={handlePasswordChange}
        type={"password"}
      />
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
          <Link
            to={"/register"}
            className="self-center mt-1 text-3xl italic font-extralight underline"
          >
            Regisztráljon
          </Link>
        </div>
          <div className="flex flex-col flex-1 px-5 my-ato">
          <div className="text-4xl text-center">Megváltoztatná jelszavát?</div>
          <Link to={"/passwordchange"} className="self-center mt-1 text-3xl italic font-extralight underline">Jelszóváltoztató</Link>
        </div>
      </div>
    </>
  );
};

function LoginPage() {
  return (
    <div className="flex flex-col items-center pb-12 h-max text-black min-h-mp whitespace-nowrap bg-body leading-[100%]">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;
