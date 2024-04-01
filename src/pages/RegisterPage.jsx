import * as React from 'react';
import '../output.css'
import Header from '../components/Header';
import { Grid } from '@mui/material'
import Input from "../components/Input";
import  Button from "../components/Button";
import axios from 'axios';



const RegisterForm = () => {
    return (
        <>
            <div className="mt-36 text-5xl text-center font-bold max-md:mt-10 max-md:text-4xl">Regisztráljon, hogy ön is Nálunk tudja hirdetni terményeit!</div>
            <UploadSection />
        </>
    )
}

const UploadSection = () => {

//Cannot read properties of undefined (reading 'name')
const handleRegister = e => {
    e.preventDefault();
    const data = {
      name: this.name,
      username: this.username,
      password: this.password,
      password_confirm: this.confirmedPassword,
      email: this.email,
      phone: this.phone
    }
    axios.post('register.php', data).then(res => {
      console.log(res);
    }).catch(
      err => console.log(err)
    )
  };

  return(
    <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center max-md:mt-10 max-md:max-w-full">
          <Grid container spacing={20} style={{marginLeft : "auto"}}>
              <Grid item xs={6} sm={3}>
                  <Input type="text" placeholder="Teljes név" onChange={e => name = e.target.value} />
                  <div>
                    <Input type="text" placeholder="Felhasználónév" onChange={e => username = e.target.value} />
                  </div>
              </Grid> 
              <Grid item xs={6} sm={3}>
                  <Input type={"email"} onChange={e => email = e.target.value} placeholder="E-mail cím" /> 
                  <div>
                    <Input type={"tel"} onChange={e => phone = e.target.value} pattern={"[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}"} placeholder="Telefonszám (Formátum: 06-30-123-4567)"   />
                  </div>
              </Grid> 
              <Grid item xs={6} sm={3}>
                <Input type={"password"} onChange={e => password = e.target.value} placeholder="Jelszó"  />
                <div>
                    <Input type={"password"} onChange={e => confirmedPassword = e.target.value} placeholder="Jelszó megerősítése"/>
                </div>
  
              </Grid>
            </Grid>
          </div>
          <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <Button text="Regisztráció" click={handleRegister} />
          {/* <p>
            {
              msg !== "" ?
              <span className='text-blue'>{msg}</span> :
              <span className='text-red'>{error}</span>
            }
          </p> */}
          </div>
        </div>
      </div>
    </section>
  )
};

function RegisterPage()  {
    return (
        <div className="flex flex-col min-w-screen min-h-screen min-w-screen items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
        <Header />
        <RegisterForm />
        </div>

    )
}

export default RegisterPage