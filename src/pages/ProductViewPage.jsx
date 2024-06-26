import React, { useContext } from 'react';
import "../output.css";
import Header from '../components/Header';
import { Grid } from '@mui/material';
import { ContextProvider } from '../components/Context';
import { useNavigate } from 'react-router-dom';

function ProductPage({imgSrc, username, title, quantity, price, email, phone, crop, uploadDate, category, description}) {

  const handlePurchase = e => {
    e.preventDefault();
    const data = {
      crop: crop,
      title: title,
      quantity: quantity,
      price: price
    }
    localStorage.setItem(`currentCart-${title}`, JSON.stringify(data));
    alert(`A terméket a kosárba helyeztük!`);
  }

  imgSrc == "" ? imgSrc = require("../images/placeholder.png") : imgSrc = require("../images/carecroplogo.png");


  const navigate = useNavigate()
  const path = () => {
    navigate("/userprofile")
  }

  return (
    <ContextProvider>
    <main className="flex flex-col min-h-screen bg-body" >
      <Header/>
      <div className="flex sm:flex-col sm:gap-0 mt-11" >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <img loading="lazy" src={imgSrc} className='aspect-square adimg ml-4 mg-5' />  
            <div className="flex ml-4 flex-col grow items-center px-5 text-3xl font-bold leading-8 text-white sm:mt-10">
            <div className="self-stretch mt-14 leading-8 sm:mt-10 text-white" >
              Felhasználó: {username} <br />
              {name} <br />
              Email: {email} <br />
              Telefonszám: {phone}
              <button className="text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]" onClick={path}>Profil megtekintése</button>
              <button className="text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]" onClick={handlePurchase}>Kosárba helyezés</button> 
            </div>
          </div>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={8} xl={9}>
              
            <article className="flex article-container flex-col bg-stone-400 w-800 bg-brown">
              <h1 className="self-center text-5xl mg-5 word-wrap font-bold text-center text-black max-md:text-4xl mb-4">{title} - {crop}</h1>
              
              <hr className='border-black line'/>
              <h2 className="text-4xl word-wrap ml-1 mg-5 text-left underline text-black max-md:text-2xl">Mennyiség:</h2>
              <p className="text-3xl word-wrap ml-1 mg-5 text-left text-black max-md:text-2xl">{quantity} kg</p>
              
              <div className="up">
                <h2 className="text-4xl word-wrap ml-1 mg-5 text-right underline text-black max-md:text-2xl">Feladás dátuma: </h2>
                <p className="text-3xl word-wrap ml-1 mg-5 text-right text-black max-md:text-2xl">{uploadDate}</p>
              </div>
              
              <hr className='border-black line'/>
              <hr className='border-black line w-376 self-center' style={{rotate: "90deg"}}/>

              <h2 className="text-4xl ml-1 word-wrap mg-5 text-left underline text-black max-md:text-2xl">Ár:</h2>
              <p className="text-3xl ml-1 word-wrap mg-5 text-left text-black max-md:text-2xl">{price} Ft</p>
              
              <div className="up">
                <h2 className="text-4xl ml-1 word-wrap mg-5 text-right underline text-black max-md:text-2xl">Minőség: </h2>
                <p className="text-3xl ml-1 word-wrap mg-5 text-right text-black max-md:text-2xl">{category}</p>
              </div>
              
              <hr className='border-black line' />
              <h2 className="text-4xl ml-1 word-wrap mg-5 text-left underline text-black max-md:text-2xl mt-4">Leírás: </h2>
              <p className="text-3xl ml-1 word-wrap mg-5 text-left text-black max-md:text-2xl">{description}</p>
            
            
            </article>
          </Grid>
        </Grid>
      </div>
    
    </main>
    </ContextProvider>
  );
};

export default ProductPage;
