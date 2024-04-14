import React, { useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';
import "../output.css"
import { Grid } from '@mui/material';

function PasswordChangerPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('change_password.php', {
        email: email,
        password: password,
        new_password: newPassword 
      });
      if (response.data.success) {
        setMessage("Jelszó megváltoztatva!");
      } else {
        setMessage("A változtatás nem sikerült, kérjük próbálja újra.");
      }
    } catch (error) {
      setMessage(error.response.data.error || "Hiba lépett fel, kérjük próbálja újra.");
    }
  };

  return (
    <section className="flex flex-col bg-body items-center pb-12 text-black min-h-mp leading-[100%]">
      <Header />
      <h1 className="text-5xl mt-11 font-bold max-md:max-w-full max-md:text-4xl">
        Jelszóváltoztatás
      </h1>
      <div className="mt-11" style={{marginLeft: "auto", marginRight: "auto"}}>
      <Grid container spacing={5}>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Input
            type={"email"}
            value={email}
            change={(e) => setEmail(e.target.value)}
            placeholder={"Email-cím"}
          />
          <Input
            type={"password"}
            value={password}
            change={(e) => setPassword(e.target.value)}
            placeholder={"Régi jelszó"}
          />
          <Input
            type={"password"}
            value={newPassword}
            change={(e) => setNewPassword(e.target.value)}
            placeholder={"Új jelszó"}
          />
        </Grid>
      </Grid>      
        <Button text={"Jelszó megváltoztatása"} click={changePasswordHandler} />
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </section>
  );
};

export default PasswordChangerPage;
