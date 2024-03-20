import * as React from "react";
import "../output.css";
import Header2 from "../components/HeaderOption2";
import { Checkbox, Grid } from "@mui/material";
import { Slider } from 'primereact/slider';
import { InputText } from 'primereact/inputtext';
import { useState } from "react";
import Input from "../components/Input";

function Filter() {
  const [value, setValue] = useState(50);


  const categories = [
    { name: "Árpa", checked: false },
    { name: "Borsó", checked: false },
    { name: "Búza", checked: false },
    { name: "Durum", checked: false },
    { name: "Kukorica", checked: false },
    { name: "Napraforgó", checked: false },
    { name: "Repce", checked: false },
    { name: "Rozs", checked: false },
    { name: "Szója", checked: false },
    { name: "Tritikálé", checked: false },
    { name: "Zab", checked: false },
  ];

  return (
    <div className="flex flex-col grow items-start pt-2 pr-3 pb-10 pl-1 max-w-input mg-10 w-full bg-brown max-md:mt-10">
      <h1 className="self-stretch text-3xl mg-5 text-black">Szűrés:</h1>
      <hr className="border-black"/>

      <h3 className="self-stretch mt-8 text-xl text-black underline">
        Termények:
      </h3>
      {categories.map(category => {
        return (
          <div key={category.key} className="flex items-center">
            <Checkbox inputId={category.key} name="category" value={category}/>
            <label htmlFor={category.key}>{category.name}</label>
        </div>
        )
      })};

      <h3 className="self-stretch mt-2.5 text-xl text-black underline mg-5">Ár:</h3>
      <Slider value={value} onChange={(e) => setValue(e.value)} className="bg-white" range/>

      <h3 className="self-stretch mt-2.5 text-xl text-black underline mg-5">Mennyiség</h3>
      <Slider value={value} onChange={(e) => setValue(e.value)} className="bg-white" range/>

      <p className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Eladó</p>
      <Input placeholder="Eladó neve" className="bg-white"/>

    </div>
  );
}

function ProductCard({ imgSrc, title, quantity, price, seller }) {

  imgSrc = 'https://fastly.picsum.photos/id/43/200/200.jpg?hmac=gMoEYpdjrHoRnKoyIdtTknuqyCQDTC8exwLaKHpMv6E';

  return (
    <div className="px-6 py-1.5 bg-brown max-md:px-5 mg-10 max-h-135 max-md:max-w-full">
     <Grid container spacing={2}>
      {/* Map over products */}
       <Grid item xs={3}>
        {/* Display product card */}
        <img src={imgSrc} alt={title} className="items-center m-auto"/>
       </Grid>
       <Grid item xs={6}>
        <p>Valami</p>
        <p>Valami</p>
        <p>Valami</p>

       </Grid>
     </Grid>
    </div>
  );
}

function MainShopPage() {

  return (
    <div className="flex flex-col pb-14 bg-body min-h-screen">
      <Header2/>  
      <main className="self-center mt-20 w-full max-w-[1782px] max-md:mt-10 max-md:max-w-full">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Filter/>
        </Grid>
        <Grid item xs={9}>
        {/* Map over filtered products and display ProductCards */}
          <ProductCard/>
        </Grid>
      </Grid>
      </main>
    </div>
  );
}

export default MainShopPage;