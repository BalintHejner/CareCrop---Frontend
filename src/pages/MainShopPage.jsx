import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import { Checkbox, Grid } from "@mui/material";
import Slider from '@mui/material/Slider';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Context from "../components/Context";

function MainShopPage() {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    quantityRange: [0, 1000],
    sellerName: "",
    categories: [], 
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  useEffect(() => {
    filterProducts();
  }, [filters]);

  const filterProducts = async () => {
    try {
      const response = await axios.get("products.php", {
        params: {
          categories: filters.categories.map(category => category.name).join(','),
          priceMin: filters.priceRange[0],
          priceMax: filters.priceRange[1],
          quantityMin: filters.quantityRange[0],
          quantityMax: filters.quantityRange[1],
          sellerName: filters.sellerName
        }
      });
      setFilteredProducts(response.data);
    } catch (error) {
      console.error("A szűrés során hiba lépett fel: ", error);
    }
  };

  return (
    <div className="flex flex-col pb-14 bg-body">
      <Header/>  
      <main className="self-center mt-5 w-full max-w-[1782px] max-md:mt-10 max-md:max-w-full">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={2} md={3} lg={3} xl={3}>
            <Filter filters={filters} handleFilterChange={handleFilterChange} />
          </Grid>
          <Grid item xs={12} sm={10} md={9} lg={9} xl={9}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
            <br/>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}


const Filter = ({ filters, handleFilterChange }) => {

  
  const [categories, setCategories] = useState([
    { name: "Árpa", isChecked: false  }, 
    { name: "Borsó", isChecked: false },
    { name: "Búza", isChecked: false },
    { name: "Durum", isChecked: false },
    { name: "Kukorica", isChecked: false },
    { name: "Napraforgó", isChecked: false },
    { name: "Repce", isChecked: false },
    { name: "Rozs", isChecked: false },
    { name: "Szója", isChecked: false },
    { name: "Tritikálé", isChecked: false },
    { name: "Zab", isChecked: false },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].isChecked = !updatedCategories[index].isChecked;
    setCategories(updatedCategories);
    handleFilterChange('categories', updatedCategories);
  };


  return (
    <div className="flex flex-col grow items-start max-w-input min-h-screen mg-filter w-full bg-brown max-md:mt-10">
      <h1 className="self-stretch text-3xl mg-5 text-black">Szűrés:</h1>
      <hr className="border-black"/>

      <h3 className="self-stretch mt-8 text-2xl mg-5 text-black underline">
        Termények:
      </h3>
      {categories.map((category, index) => {
        return (
          <div key={index} className="flex ml-1 items-center">
            <Checkbox 
              inputId={index.toString()} 
              name="category" 
              isChecked={category.isChecked} 
              onChange={() => handleCheckboxChange(index)}
            />
            <label htmlFor={index.toString()}>{category.name}</label>
          </div>
        );
      })}

      <h3 className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Ár (HUF):</h3>
      <div className="flex flex-col items-center mg-filter">
        <Slider  
          valueLabelDisplay="auto"
          onChange={(event, value) => handleFilterChange('priceRange', value)}
        />
      </div>

      <h3 className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Mennyiség (kg):</h3>
      <div className="flex flex-col items-center mg-filter">
        <Slider  
          valueLabelDisplay="auto"
          onChange={(event, value) => handleFilterChange('quantityRange', value)}
        />
      </div>

      <p className="self-stretch mt-2.5 text-2xl text-black underline mg-5">Eladó:</p>
      <div className="flex flex-col items-center max-w-input mg-filter">
        <input 
          className="shadow appearance-none border mt-3 rounded w-20 h-input py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          placeholder="Eladó neve" 
          onChange={(event) => handleFilterChange('sellerName', event.target.value)}
        />
      </div>
    </div>
  );
};

const ProductCard = ({ imgSrc }) => {

  const { product } = React.useContext(Context);
  const { title, quantity, price, seller } = product || {};
  
  imgSrc == "" ? imgSrc = require("../images/placeholder.png") : imgSrc = require("../images/carecroplogo.png");

  return (
    <div className="px-6 bg-brown max-md:px-5 mg-card max-h-15 max-md:max-w-full">
      <Link to="/product">
        <Grid container spacing={2} >
          <Grid item xs={3}>
            <img src={imgSrc} alt={title} className="items-center rounded-xl" style={{height: "210px"}}/>
          </Grid>
          <Grid item xs={3}>
            <p className="text-3xl font-bold">{title}</p>
            <br/>
            <p className="text-xl">Ár: {price} Ft</p>
            <br/>
            <p className="text-xl">Mennyiség: {quantity} kg</p>
            <br/>
            <p className="text-xl">Eladó: {seller}</p>
          </Grid>
        </Grid>
      </Link>
    </div>
  );
}

export default MainShopPage;
