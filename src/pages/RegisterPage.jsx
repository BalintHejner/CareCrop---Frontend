import * as React from 'react';
import '../output.css'
import Header from '../components/Header';
import { Grid } from '@mui/material'
import Input from "../components/Input";
import  Button from "../components/Button";
import axios from 'axios';


const UploadSection = () => {

let name;
let username;
let email;
let phone;
const [password, setPassword] = React.useState("");
const [confirmedPassword, setConfirmedPassword] = React.useState("");
const [errorMessage, setErrorMessage] = React.useState("");
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();


const handleRegister = e => {
    e.preventDefault();
    const data = {
      name: name,
      username: username,
      password: password,
      password_confirm: confirmedPassword,
      email: email,
      phone: phone,
      registered_at: `${year}-${month}-${date}`
    }
    axios.post('register.php', data).then(res => {
      console.log(res);
    }).catch(
      err => console.log(err)
    )
  };

const handleChange = (e) => {
      const newPassword = e.target.value;
      setPassword(newPassword);
      validatePassword(newPassword);
      const { name, value } = e.target;
      if (name === "password") {
        setPassword(value);
      } else if (name === "confirmedPassword") {
        setConfirmedPassword(value);
      }
    onChange(name, value);
    };
    
const validatePassword = (password) => {
      const minLength = 8;
      const hasNumber = /\d/.test(password);
      const hasUpperCase = /[A-Z]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      
      if (password.length < minLength) {
        setErrorMessage(`A jelszónak minimum ${minLength} karakter hosszúnak kell lennie.`);
      } else if (!hasNumber || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
        setErrorMessage("A jelszónak tartalmaznia kell kis- és nagybetűt, számot és speciális karaktert.");
      } else {
        setErrorMessage("");
      }
      
const validatePasswordsMatch = () => {
  if (password !== confirmedPassword) {
    setErrorMessage("A megadott jelszavak nem egyeznek.");
  } else {
    setErrorMessage("");
  }
  };

  React.useEffect(() => {
    validatePasswordsMatch();
  }, [password, confirmedPassword]);

};

return(
  <section className="mt-11 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full mx-auto">
          {errorMessage && <p className='text-xl' style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{errorMessage}</p>}  
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <Grid container spacing={5} style={{ marginRight : "auto"}}>
              <Grid item xs={12} sm={4} lg={4} xl={4}>
                  <Input type="text" placeholder="Teljes név" change={e => name = e.target.value} />
                  <div>
                    <Input type="text" placeholder="Felhasználónév" change={e => username = e.target.value} />
                  </div>
              </Grid> 
              <Grid item xs={12} sm={4} lg={4} xl={4}>
                  <Input type={"email"} change={e => email = e.target.value} placeholder="E-mail cím" /> 
                  <div>
                    <Input type={"tel"} change={e => phone = e.target.value} pattern={"[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}"} placeholder="Telefonszám (Formátum: 06-30-123-4567)"   />
                  </div>
              </Grid> 
              <Grid item xs={12} sm={4} lg={4} xl={4}>
                <Input type={"password"} name={"password"} change={handleChange} placeholder="Jelszó"  />
                <div>
                    <Input type={"password"} name={"confirmedPassword"} change={handleChange} placeholder="Jelszó megerősítése"/>
                </div>
              </Grid>
            </Grid>
          </div>
          <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <Button text="Regisztráció" click={handleRegister} />
          </div>
        </div>
      </div>
    </section>
  )
};

const RegisterForm = () => {
  return (
      <>
          <div className="mt-36 max-md:mt-10 text-4xl word-wrap sm:text-5xl lg:text-6xl text-center font-bold">Regisztráljon, hogy ön is Nálunk tudja hirdetni terményeit!</div>
          <UploadSection />
      </>
  )
}

function RegisterPage()  {
    return (
        <div className="flex flex-col min-w-screen min-h-mp items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
        <Header />
        <RegisterForm />
        </div>

    )
}

export default RegisterPage