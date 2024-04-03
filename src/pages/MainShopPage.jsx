import * as React from "react";
import "../output.css";
import Header2 from "../components/HeaderOption2";
import { Checkbox, Grid } from "@mui/material";
import Slider from '@mui/material/Slider';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const [value, setValue] = useState([0, 1000]);

  const navigate = useNavigate();
  const path = (click) => {
    navigate(click);
  }

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
    <div className="flex flex-col grow items-start max-w-input min-h-mp mg-filter w-full bg-brown max-md:mt-10">
      <h1 className="self-stretch text-3xl mg-5 text-black">Szűrés:</h1>
      <hr className="border-black"/>

      <h3 className="self-stretch mt-8 text-2xl mg-5 text-black underline">
        Termények:
      </h3>
      {categories.map(category => {
        return (
          <div key={category.key} className="flex ml-1 items-center">
            <Checkbox inputId={category.key} name="category" value={category}/>
            <label htmlFor={category.key}>{category.name}</label>
        </div>
        )
      })}

      <h3 className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Ár (HUF):</h3>
      <div className="flex flex-col items-center mg-filter">
        <Slider value={value} onChange={(e) => setValue(e.value)} valueLabelDisplay="auto"/>
      </div>

      <h3 className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Mennyiség (kg):</h3>
      <div className="flex flex-col items-center mg-filter">
        <Slider value={value} onChange={(e) => setValue(e.value)} valueLabelDisplay="auto" className="mg-5"/>
      </div>

      <p className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Eladó:</p>
      <div className="flex flex-col items-center max-w-input mg-filter">
        <input className="shadow appearance-none border mt-3 rounded w-20 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Eladó neve" />
      </div>

    </div>
  );
}

const ProductCard = ({ imgSrc, title, quantity, price, seller }) => {

  imgSrc = 'https://fastly.picsum.photos/id/43/200/200.jpg?hmac=gMoEYpdjrHoRnKoyIdtTknuqyCQDTC8exwLaKHpMv6E';

  return (
    <div className="px-6 bg-brown max-md:px-5 mg-card max-h-15 max-md:max-w-full">
     <Grid container spacing={3} >
      {/* Map over products */}
       <Grid item xs={3}>
        {/* Display product card */}
        <img src={imgSrc} alt={title} className="items-center rounded-xl "/>
       </Grid>
       <Grid item xs={3}>
       <p className="text-3xl font-bold">{title = "SÁNDOR"}</p>
        <br/>
        <p className="text-xl">Ár: {price}</p>
        <br/>
        <p className="text-xl">Mennyiség: {quantity}</p>
        <br/>
        <p className="text-xl">Eladó: {seller}</p>

       </Grid>
     </Grid>
    </div>
  );
}

function MainShopPage() {

  return (
    <div className="flex flex-col pb-14 bg-body">
      <Header2/>  
      <main className="self-center mt-5 w-full min-h-auto max-w-[1782px] max-md:mt-10 max-md:max-w-full">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Filter/>
        </Grid>
        <Grid item xs={9}>
        {/* Map over filtered products and display ProductCards */}
          <ProductCard/>
          <br/>
        </Grid>
      </Grid>
      </main>
    </div>
  );
}

export default MainShopPage;