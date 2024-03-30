import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [msg, setMsg] = React.useState("");
  
  React.useEffect(() => {
    let login = localStorage.getItem("shop");
    if (login) {
      //TODO: NAvigate to Shop
      navigate("/shop");
    }
    let loginStatus = localStorage.getItem("loginStatus");
    if (loginStatus) {
      setError(loginStatus);
      setTimeout(function() {
        localStorage.clear();
        window.location.reload();
      }, 3000)
    } 
    setTimeout(function() {
      setMsg("")
    }, 5000)
  }, [msg])

  const handleInputChange = (e, type) => {
    switch (type) {
      case "username":
          setError("");
          setUsername(e.target.value);
          if (e.target.value === "") {
            setError("A felhasználónév mező nem lehet üres!");
          }
          break;
      case "password":
          setError("");
          setPassword(e.target.value);
          if (e.target.value === "") {
            setError("A jelszó mező nem lehet üres!");
          }
          break;    
      default:

    }
  };

  function handleLogin() {
    if (username !== "" && password !== "") {
      var url = "http://87.229.85.121/login.php";
      var headers = {
        "Accept": "application/json",
        "Content-type": "application/json",
      }
      var data = {
        username: username,
        password: password
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then((res) => {
        //TODO Más Check
        if (res[0].result === "Érvénytelen felhasználónév!" || res[0].result === "Érvénytelen jelszó!") {
          setError(res[0].result);
        } else {
          setMsg(res[0].result);
          setTimeout(function() {
            localStorage.setItem("login", true);
            navigate("/shop");
          }, 5000)
        }
      }).catch((err) => {
        setError(err);
        console.log(err)
      });
    } else {
      setError("Kérjük, adja meg a felhasználónevet és a jelszót!");
    }
  }


  return (
    <>
      <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Bejelentkezés</div>
      <div className="mt-11 text-3xl font-semibold max-md:mt-10">Felhasználónév:</div>
      <Input placeholder={"Felhasználónév"} value={username} data={(e) => handleInputChange(e, "username")} type={"text"} />
      <div className="mt-7 text-3xl font-semibold">Jelszó:</div>
      {/* Password toggle */}
      <Input placeholder={"Jelszó"} value={password} data={(e) => handleInputChange(e, "password")} type={"password"} />
      <Button text={"Bejelentkezés"} click={handleLogin}/>
      <p>
      {
        error !== "" ?
        <span className="text-red">{error}</span> :
        <span className="text-blue">{msg}</span>
      }
     </p>
    </>
  );
}

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
          <Link to={"/passwordreminder"} className="self-center mt-1 text-3xl italic font-extralight underline" >Jelszóemlékeztető</Link>
        </div>
      </div>
    </>
  )
}


function LoginPage() {
  return (
    <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body min-h-screen leading-[100%]">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;