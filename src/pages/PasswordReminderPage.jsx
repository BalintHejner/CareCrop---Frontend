import React, { useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import axios from 'axios';


const EmailInput = () => {
  return (
    <Input
      type={"email"}
      change={e => emailAdd = e.target.value}
      placeholder={"Írja be az e-mail címét"}
    />
  );

};

function PasswordReminderPage() {

  let emailAdd;

   const reminderHandler = e => {
    e.preventDefault();
    const data = {
      email: emailAdd
    }
    axios.post('register.php', data).then(res => {
      console.log(res);
    }).catch(
      err => console.log(err)
    )
  };

  return (
    <section className="flex flex-col bg-body items-center pb-12 text-black min-h-mp leading-[100%]">
      <Header />
      <h1 className="mt-36 text-5xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Jelszóemlékeztető
      </h1>
      <p className="mt-1 text-2xl italic w-400 mb-1 font-light leading-6 text-center">
        Adja meg e-mail címét és elküldjük rá jelszavát, hogy újból be tudjon jelentkezni!
      </p>
      <div className="flex flex-col items-center mt-10">
      <p className="mt-10 self-start text-2xl font-bold">E-mail cím:</p>
      <EmailInput />
      </div>
      <Button text={"Emlékezető küldése"} click={reminderHandler}/>
    </section>
  );
};

export default PasswordReminderPage;