import React, { useState } from 'react';
import "../output.css";
import Button2 from '../components/Button2';
import Header2 from '../components/HeaderOption2';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';


const Buttons = ({ label, onClicked }) => (
  <Button2 click={onClicked} className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={label} />
);

const ProductCard = ({ imgSrc, title, quantity, price, seller }) => {

  imgSrc == "" ? imgSrc = require("../images/placeholder.png") : imgSrc = require("https://fastly.picsum.photos/id/43/200/200.jpg?hmac=gMoEYpdjrHoRnKoyIdtTknuqyCQDTC8exwLaKHpMv6E");

  return (
    <div className="px-6 bg-brown max-md:px-5 mg-card max-h-15 max-md:max-w-full">
     <Grid container spacing={1.8} >
      {/* Map over products */}
       <Grid item xs={3}>
        {/* Display product card */}
        <img src={imgSrc} alt={title} className="items-center rounded-xl "/>
       </Grid>
       <Grid item xs={8}>
       <p className="text-3xl font-bold">{title = "SÁNDOR"}</p>
        <br/>
        <p className="text-xl">Ár: {price} Ft</p>
        <br/>
        <p className="text-xl">Mennyiség: {quantity} kg</p>
        <br/>
        <p className="text-xl">Eladó: {seller}</p>
       </Grid>
       <Grid item xs={1}>
       <div className="mt-11 flex flex-col icon my-auto items-center">
        <Link to={"/productedit"}>
          <img src={require("../images/pencil.png")} alt="Módosítás"/>
        </Link> 
          <img src={require("../images/trash.png")} alt="Törlés"/>
       </div>
       </Grid>
     </Grid>
    </div>
  );
}

const UserSection = () => (
  <section className=" w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
    <div className="flex gap-5 md:flex-col md:gap-0">
      <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">
          <Grid container style={{marginLeft : "auto", marginRight : "auto"}}>
            <Grid item xs={3} sm={3}>
              <p className='text-2xl'>Teljes név:</p>
              <p className='text-2xl'>Kiss Pista Sanyi</p>
              <p className='mt-25 text-3xl underline'>Elérhetőségek:</p>
              <p className='text-2xl'>Email-cím: </p>
              <p className='text-2xl'>sanyiakiraly@gmail.com</p>
              <p className='text-2xl mt-1'>Telefonszám:</p>
              <p className='text-2xl'>06-30-642-3343</p>
            </Grid>
            <Grid item xs={9} sm={9}>
            <p className='text-3xl underline mb-1'>Feladott hírdetések:</p>
            <div className="items-center w-full max-md:mt-10 max-md:max-w-full">
              <ProductCard imgSrc={""} title={"Sándor"} quantity={"100"} price={"10000"} seller={"Sándor"}/>
              <ProductCard imgSrc={""} title={"Sándor"} quantity={"100"} price={"10000"} seller={"Sándor"}/>
              <ProductCard imgSrc={""} title={"Sándor"} quantity={"100"} price={"10000"} seller={"Sándor"}/>
              <ProductCard imgSrc={""} title={"Sándor"} quantity={"100"} price={"10000"} seller={"Sándor"}/>
            </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  </section>
);


function OwnProfilePage() {
  return (
    <main className="flex flex-col min-h-mp items-center pb-2 bg-body">
      <Header2 />
      <div className="text-3xl font-bold mt-11">username fiókja</div>
      <div className="mb-4 flex flex-row flex-wrap gap-5 justify-around">
        <Buttons label="Új hírdetés" onClicked={"/productupload"}/>
        <Buttons label="Profil módosítása" onClicked={"/useredit"}/>
        <Buttons label="Visszajelzés" onClicked={"/support"}/>
        <Buttons label="Vissza az áruházba" onClicked={"/shop"}/>
      </div>
      <UserSection />
     
    </main>
  );
}

export default OwnProfilePage;