import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import { Checkbox, Grid } from "@mui/material";
import Slider from '@mui/material/Slider';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button2 from "../components/Button2";

const Filter = () => {

  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    quantityRange: [0, 1000],
    sellerName: ""
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const filterProducts = () => {
    const filteredProducts = products.filter(product => {
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Filter by price range
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Filter by quantity range
      if (product.quantity < filters.quantityRange[0] || product.quantity > filters.quantityRange[1]) {
        return false;
      }

      // Filter by seller name (partial match)
      if (filters.sellerName && !product.seller.toLowerCase().includes(filters.sellerName.toLowerCase())) {
        return false;
      }

      return true;
    });

    return filteredProducts;
  };

  let categories = [
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
        <Slider  valueLabelDisplay="auto"/>
      </div>

      <h3 className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Mennyiség (kg):</h3>
      <div className="flex flex-col items-center mg-filter">
        <Slider  valueLabelDisplay="auto" className="mg-5"/>
      </div>

      <p className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Eladó:</p>
      <div className="flex flex-col items-center max-w-input mg-filter">
        <input className="shadow appearance-none border mt-3 rounded w-20 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Eladó neve" />
      </div>

      <Button2 text={"Szűrés"} className={"justify-center items-center w-225 px-16 py-4 mt-1 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10"}/>
    </div>
  );
}

const ProductCard = ({ imgSrc, title, quantity, price, seller }) => {

  const navigate = useNavigate();
  const path = (click) => {
    navigate(click);
  }

  imgSrc = 'https://fastly.picsum.photos/id/43/200/200.jpg?hmac=gMoEYpdjrHoRnKoyIdtTknuqyCQDTC8exwLaKHpMv6E';

  return (
    <div className="px-6 bg-brown max-md:px-5 mg-card max-h-15 max-md:max-w-full">
     <Grid container spacing={2} >
      {/* Map over products */}
       <Grid item xs={3}>
        {/* Display product card */}
        <img src={imgSrc} alt={title} className="items-center rounded-xl "/>
       </Grid>
       <Grid item xs={3}>
       <p className="text-3xl font-bold">{title = "SÁNDOR"}</p>
        <br/>
        <p className="text-xl">Ár: {price} Ft</p>
        <br/>
        <p className="text-xl">Mennyiség: {quantity} kg</p>
        <br/>
        <p className="text-xl">Eladó: {seller}</p>

       </Grid>
     </Grid>
    </div>
  );
}

function MainShopPage() {

  // Apply filtering
  //const filteredProducts = filterProducts();


  return (
    <div className="flex flex-col pb-14 bg-body">
      <Header/>  
      <main className="self-center mt-5 w-full min-h-auto max-w-[1782px] max-md:mt-10 max-md:max-w-full">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={2} md={3} lg={3} xl={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={10} md={9} lg={9} xl={9}>
        {/* Map over filtered products and display ProductCards */}
          <ProductCard/>
          <ProductCard/>
          <br/>
        </Grid>
      </Grid>
      </main>
    </div>
  );
}

export default MainShopPage;