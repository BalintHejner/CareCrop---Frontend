import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Input from "../components/Input";
import {Grid} from "@mui/material";


function CartForm()  {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [method, setMethod] = React.useState("");
  const [crop, setCrop] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [payment, setPayment] = React.useState("");


  const handleNameChange = e => {
    const newName = e.target.value;
    setName(newName);
   }

   const handleEmailChange = e => {
    const newEmail = e.target.value;
    setEmail(newEmail);
   } 

   const handlePhoneChange = e => {
    const newPhone = e.target.value;
    setPhone(newPhone);
   } 

   const handleMethodChange = e => {
    const newMethod = e.target.value;
    setMethod(newMethod);
   }

   const handlePurchase = e => {
    e.preventDefault();
    const data = {
      crop: crop,
      amount: amount,
      price: price,
      payment: payment,
      name: name,
      email: email,
      phone: phone,
      method: method.valueOf()
    }
    localStorage.setItem('cart', JSON.stringify(data));
   }


  return (
    <main className="flex min-h-mp mx-auto min-w-screen flex-col pb-12 bg-body">
    <Header />
    <section className="self-center mt-25 w-full  max-w-[1728px] md:mt-10 md:max-w-full">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <Grid container spacing={25}>
          <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
            <aside className="flex flex-col w-[33%] ml-4 md:ml-0 md:w-full">
                <div className="flex flex-col mt-2 text-base text-black md:mt-10 md:max-w-full">
                  <h2 className="  text-upper tracking-[3.2px] md:max-w-full">Teljes név:</h2>
                  <Input placeholder={"Teljes Név"} type={"text"} change={handleNameChange}/>
                  <h2 className="mt-7  text-upper tracking-[3.2px] md:max-w-full">E-mail cím:</h2>
                  <Input placeholder={"E-mail cím"} type={"text"} change={handleEmailChange}/>
                  <h2 className="mt-7  text-upper tracking-[3.2px] md:max-w-full">Telefonszám:</h2>
                  <Input placeholder={"Telefonszám"} type={"text"} change={handlePhoneChange}/>
                  <h2 className="mt-7  text-upper tracking-[3.2px] md:max-w-full">Kategóriák:</h2>
                  <select onChange={handleMethodChange} className="shadow appearance-none border rounded w-360 mt-3 py-2 px-3 text-gray-700 leading-tight">
                    <option disabled selected></option>
                    <option value='1'>PayPal</option>
                    <option value='2'>Visa</option>
                    <option value='3'>Mastercard</option>
                    <option value='4'>Maestro</option>
                    <option value='5'>Utánvét</option>
                  </select>
                  <button onClick={handlePurchase} className="text-2xl justify-center items-center w-btn2 px-16 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]">Fizetés</button>
                </div>
            </aside>
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
            <aside className="flex flex-col aside-container md:ml-0 mx-auto md:w-full">
                <div className="flex flex-col mt-2 text-base aspect-square mx-auto text-black bg-brown md:mt-10 md:max-w-full">
                  <h1 className="ml-1 mg-5 tracking-[3.2px] font-bold md:max-w-full text-3xl">A kosár tartalma:</h1>
                  <hr className="w-500 bg-zinc-300 mg-5" />
                  <div className="flex flex-col w-full max-w-full">
                    <ul className="flex flex-col w-full max-w-full">
                      <li className="flex flex-col w-full max-w-full mg-5">{crop}
                      <ul>
                      <li>Mennyiség: {amount} kg</li>
                      <li>Ár: {price} Ft</li>
                      </ul>
                      </li>

                    </ul>
                </div>

                <hr className="w-500 bg-zinc-300 mg-5" />
                <h1 className="ml-1 mg-5 tracking-[3.2px] font-bold md:max-w-full text-3xl">Fizetendő:</h1>
                <hr className="w-500 bg-zinc-300 mg-5" />
                <h1 className="ml-1 mr-50 tracking-[3.2px] font-bold md:max-w-full text-3xl text-right">{payment} Ft</h1>

                </div>
            </aside>
          </Grid>
        </Grid>
       </div>
      </section>
    </main>
  );
};


export default CartForm;