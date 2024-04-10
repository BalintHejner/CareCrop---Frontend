import * as React from 'react';
import '../output.css'
import Header from '../components/Header';
import { Grid } from '@mui/material'
import Input from "../components/Input";
import  Button from "../components/Button";
import axios from 'axios';


const UploadSection = () => {

const [name, setName] = React.useState("");
const [username, setUsername] = React.useState("");
const [email, setEmail] = React.useState("");
const [phone, setPhone] = React.useState("");
const [password, setPassword] = React.useState("");
const [confirmedPassword, setConfirmedPassword] = React.useState("");
const [errorMessage, setErrorMessage] = React.useState("");
const [errorMessage2, setErrorMessage2] = React.useState("");
const [emailError, setEmailError] = React.useState("");
const [phoneError, setPhoneError] = React.useState("");
let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();



const handleRegister = e => {
    e.preventDefault();
    const dataToBackend = {
      username: username,
      password: password,
      email: email
    }
    const otherData = {
      name: name,
      password_confirm: confirmedPassword,
      phone: phone,
      registered_at: `${year}-${month}-${date}`
    }
    axios.post(`register.php?username=${username}}&email=${email}}&password=${password}`, dataToBackend).then(res => {
      console.log(res);
      localStorage.setItem('other', JSON.stringify(otherData));
    }).catch(
      err => console.log(err)
    )
  };

const handleNameChange = e => {
  const newName = e.target.value;
  setName(newName);
 }

 const handleEmailChange = e => {
  const newEmail = e.target.value;
  setEmail(newEmail);

  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  if (!emailPattern.test(newEmail)) {
    setEmailError('Az email-cím nem megfelelő formátumú!');
  } else {
    setEmailError('');
  }
};


const handlePhoneChange = e => {
  const newPhone = e.target.value;
  setPhone(newPhone);
  const phonePattern = /^06-\d{2}-\d{3}-\d{4}$/;
  if (!phonePattern.test(newPhone)) {
    setPhoneError('A telefonszám formátumánnak az alábbival kell megegyeznie: 06-XX-XXX-XXXX');
  } else {
    setPhoneError('');
  }
};


 const handleUsernameChange = e => {
  const newUsername = e.target.value;
  setUsername(newUsername);
 }

const handlePasswordChange = e => {
  const newPassword = e.target.value;
  setPassword(newPassword);
  validatePassword(newPassword);
  const name = e.target.name;
  const value = e.target.value;
  if (name === "password") {
    setPassword(value);
  } else if (name === "confirmedPassword") {
    setConfirmedPassword(value);
  }
}

const validatePassword = (passwordtest) => {
      const minLength = 10;
      const hasNumber = /\d/.test(passwordtest);
      const hasUpperCase = /[A-Z]/.test(passwordtest);
      const hasLowerCase = /[a-z]/.test(passwordtest);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordtest);

      if (passwordtest.length < minLength) {
        setErrorMessage(`A jelszónak minimum ${minLength} karakter hosszúnak kell lennie.`);
      } else if (!hasNumber || !hasUpperCase || !hasLowerCase || !hasSpecialChar) {
        setErrorMessage("A jelszónak tartalmaznia kell kis- és nagybetűt, számot és speciális karaktert.");
      } else {
        setErrorMessage("");
      }
      // if (confirmedPassword == password) {
      //   setErrorMessage2("A megadott jelszavak nem egyeznek.");
      // } else { 
      //   setErrorMessage2("");
      // }
    };


return(
  <section className="mt-11 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full mx-auto">
          {phoneError && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{phoneError}</p>}
          {emailError && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{emailError}</p>}
          {errorMessage && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{errorMessage}</p>}
          {errorMessage2 && <p style={{ fontStyle: 'italic', textWrap: 'wrap' }}>{errorMessage2}</p>}
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">          
          <Grid container spacing={7} style={{marginLeft: "auto"  ,marginRight : "auto"}}>
              <Grid item xs={10} sm={8} md={6} lg={3.6} xl={4}>
                  <Input type="text" placeholder="Teljes név" change={handleNameChange} />
                  <div>
                    <Input type="text" placeholder="Felhasználónév" change={handleUsernameChange} />
                  </div>
              </Grid>
              <Grid item xs={10} sm={8} md={6} lg={3.6} xl={4}>
                  <Input type={"email"} change={handleEmailChange} placeholder="E-mail cím" />
                  <div>
                    <Input type={"tel"} change={handlePhoneChange} pattern={"[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}"} placeholder="Telefonszám"   />
                  </div>
              </Grid>
              <Grid item xs={10} sm={8} md={6} lg={3.6} xl={4}>
                <Input type={"password"} name={"password"} change={handlePasswordChange} placeholder="Jelszó"  />
                <div>
                    <Input type={"password"} name={"confirmedPassword"} change={handlePasswordChange} placeholder="Jelszó megerősítése"/>
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