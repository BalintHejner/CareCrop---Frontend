import * as React from 'react';
import '../output.css'
import Header from '../components/Header';
import { Grid } from '@mui/material'
import Input from "../components/Input";
import  Button from "../components/Button";
import { useNavigate } from "react-router-dom";



const RegisterForm = () => {
    return (
        <>
            <div className="mt-36 text-5xl font-bold max-md:mt-10 max-md:text-4xl">Regisztráció</div>
            <UploadSection />
        </>
    )
}

const UploadSection = () => {

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmedPassword, setConfirmedPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleInputChange = (e, type) => {
    switch (type) {
      case "name":
        setError("");
        setName(e.target.value);
        if (e.target.value === "") {
          setError("Adja meg teljes nevét!");
        }
        break;
      case "username":
          setError("");
          setUsername(e.target.value);
          if (e.target.value === "") {
            setError("Adjon meg felhasználónevet!");
          }
          break;
      case "password":
          setError("");
          setPassword(e.target.value);
          if (e.target.value === "") {
            setError("Adjon meg érvényes jelszót!");
          }
          break;
      case "email":
          setError("");
          setEmail(e.target.value);
          if (e.target.value === "") {
            setError("Adjon meg e-mail címet!");
          }
          break;      
      case "phone":
          setError("");
          setPhone(e.target.value);
          if (e.target.value === "") {
           setError("Adja meg telefonszámát!");
          }
          break;       
      case "confirmedPassword":
          setError("");
          setConfirmedPassword(e.target.value);
          if (e.target.value === "") {
            setError("Erősítse meg megadott jelszavát!");
          } else if (e.target.value !== password) {
            setError("A két jelszó nem egyezik!")
          } else {
            setMsg("Minden mező kitöltve")
          }
          break;
      default:
    }
  }

  React.useEffect(() => {
    setTimeout(function() {
      setMsg("");
    }, 15000)
  }, [msg]);

  function checkPassword() {
    if (password.length < 8) {
      setError("A jelszó legalább 8 karakter hosszú kell, hogy legyen!");
    }
  }

  function handleRegister() {
    if (username !== "" && name !== "" && password !== "" && confirmedPassword !== "" && phone !== "" && email !== "") {
      var url = "http://87.229.85.121/register.php";
      var headers = {
        "Accept": "application/json",
        "Content-type": "application/json",
      }
      var data = {
        username: username,
        name: name,
        password: confirmedPassword,
        email: email,
        phone: phone
      }
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then((res) => {
        setMsg(res[0].result);
      }).catch((err) => {
        setError(err);
        console.log(err);
      });
      setName("")
      setUsername("")
      setPassword("")
      setConfirmedPassword("")
      setEmail("")
      setPhone("")

    } else {
      setError("Kérem, töltsön ki minden mezőt!");
    }
  }

  function checkEmail() {
      var url = "http://87.229.85.121/register.php";
      var headers = {
        "Accept": "application/json",
        "Content-type": "application/json",
      }
      var data = {
        email: email
      }
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then((res) => {
        setError(res[0].result);
      }).catch((err) => {
        setError(err);
        console.log(err);
      });
  }

  
  function checkUser() {
    var url = "http://87.229.85.121/register.php";
    var headers = {
      "Accept": "application/json",
      "Content-type": "application/json",
    }
    var data = {
      username: username
    }
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data)
    }).then((res) => res.json())
    .then((res) => {
      setError(res[0].result);
    }).catch((err) => {
      setError(err);
      console.log(err);
    });
}




  return(
    <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">
            <Grid container spacing={30} style={{marginLeft : "auto" , marginRight : "auto"}}>
              <Grid item xs={6} sm={3}>
                  <Input type="text" placeholder="Teljes név" data={(e) => handleInputChange(e, "name")} value={name} />
                  <div>
                    <Input type="text" placeholder="Felhasználónév" blur={checkUser} data={(e) => handleInputChange(e, "username")} value={username} />
                  </div>
              </Grid> 
              <Grid item xs={6} sm={3}>
                  <Input type={"email"} placeholder="E-mail cím" blur={checkEmail} data={(e) => handleInputChange(e, "email")} value={email}  /> 
                  <div>
                    <Input type={"tel"} placeholder="Telefonszám"  data={(e) => handleInputChange(e, "phone")} value={phone} />
                  </div>
              </Grid> 
              <Grid item xs={6} sm={3}>
                <Input type={"password"} placeholder="Jelszó" blur={checkPassword} value={password} data={(e) => handleInputChange(e, "password")} />
                <div>
                    <Input type={"password"} placeholder="Jelszó megerősítése" data={(e) => handleInputChange(e, "confirmedPassword")} value={confirmedPassword}/>
                </div>
  
              </Grid>
            </Grid>
          </div>
          <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <Button text="Regisztráció" click={handleRegister} />
          <p>
            {
              msg !== "" ?
              <span className='text-blue'>{msg}</span> :
              <span className='text-red'>{error}</span>
            }
          </p>
          </div>
        </div>
      </div>
    </section>
  )
};

function RegisterPage()  {
    return (
        <div className="flex flex-col min-h-screen items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
        <Header />
        <RegisterForm />
        </div>

    )
}

export default RegisterPage