import * as React from 'react';
import '../output.css'
import Header from '../components/Header';
import { Grid } from '@mui/material'
import Input from "../components/Input";
import  Button from "../components/Button";
import Auth from "../hooks/Auth";
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

  const { register } = Auth();

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    register(name, username, password, email, mobile);

    const navigate = useNavigate()
    navigate("/login")
  }


  return(
    <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">
            <Grid container spacing={30} style={{marginLeft : "auto" , marginRight : "auto"}}>
              <Grid item xs={6} sm={3}>
                  <Input type="text" placeholder="Teljes név" data={(e) => setName(e.target.value)} value={name} />
                  <div>
                    <Input type="text" placeholder="Felhasználó név" data={(e) => setUsername(e.target.value)} value={username} />
                  </div>
              </Grid> 
              <Grid item xs={6} sm={3}>
                  <Input type={"email"} placeholder="E-mail cím" data={(e) => setEmail(e.target.value)} value={email}  /> 
                  <div>
                    <Input type={"tel"} placeholder="Telefonszám"  data={(e) => setMobile(e.target.value)} value={mobile} />
                  </div>
              </Grid> 
              <Grid item xs={6} sm={3}>
                <Input type={"password"} placeholder="Jelszó"/>
                <div>
                    <Input type={"password"} placeholder="Jelszó megerősítése" data={(e) => setPassword(e.target.value)} value={password}/>
                </div>
  
              </Grid>
            </Grid>
          </div>
          <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <Button text="Regisztráció" click={registerHandler} />
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