import React, { useState } from 'react';
import "../output.css";
import Header2 from '../components/HeaderOption2';
import Button2 from '../components/Button2';
import { Grid } from '@mui/material';


function ProductPage({title, email, phoneNumber, deals, name, username, imageurl, description, category, uploadDate}) {
  const [quantity, setQuantity] = useState(20);
  const [price, setPrice] = useState(2000);
  
  return (
    <main className="flex flex-col min-h-screen bg-body" >
      <Header2/>
      <div className="flex sm:flex-col sm:gap-0 mt-11" style={{marginLeft : "auto" , marginRight : "auto"}}>

      <Grid container spacing={5} style={{marginLeft : "auto" , marginRight : "auto"}}>
        <Grid item xs={6} sm={5}>
          <img loading="lazy" src={imageurl} className='aspect-square adimg mg-5' />  
      
          <div className="flex flex-col grow items-center px-5 text-3xl font-bold leading-8 text-white sm:mt-10">
          <div className="self-stretch mt-14 leading-8 sm:mt-10 text-white" >
            {username = 'SSS'} <br />
            {name = 'Szuper Sanyi Sándor'} <br />
            Email: {email} <br />
            Telefonszám: {phoneNumber} <br/>
            Lebonyolított üzletek: {deals}
          </div>
          <Button2 className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={"Profil megtekintése"} />
          <Button2 className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={"Kosárba helyezés"} />
        </div>
        </Grid>
        <Grid item xs={6} sm={7}>
             
          <article className="flex flex-col bg-stone-400 w-800 bg-brown " style={{height: "700px"}} >
            <h1 className="self-center text-5xl mg-5 font-bold text-center text-black max-md:text-4xl mb-4">{title = "Valami nevű termék"}</h1>
            
            <hr className='border-black'/>
            <h2 className="text-4xl ml-1 mg-5 text-left underline text-black max-md:text-2xl">Mennyiség:</h2>
            <p className="text-3xl ml-1 mg-5 text-left text-black max-md:text-2xl">{quantity} kg</p>
            
            <div className="up">
              <h2 className="text-4xl ml-1 mg-5 text-right underline text-black max-md:text-2xl">Feladás dátuma: </h2>
              <p className="text-3xl ml-1 mg-5 text-right text-black max-md:text-2xl">{uploadDate = "2021.01.30"}</p>
            </div>
            
            <hr className='border-black'/>
            <hr className='border-black w-376 self-center' style={{rotate: "90deg"}}/>

            <h2 className="text-4xl ml-1 mg-5 text-left underline text-black max-md:text-2xl">Ár:</h2>
            <p className="text-3xl ml-1 mg-5 text-left text-black max-md:text-2xl">{price} Ft</p>
            
            <div className="up">
              <h2 className="text-4xl ml-1 mg-5 text-right underline text-black max-md:text-2xl">Minőség: </h2>
              <p className="text-3xl ml-1 mg-5 text-right text-black max-md:text-2xl">{category = "Takarmány"}</p>
            </div>
            
            <hr className='border-black'/>
            <h2 className="text-4xl ml-1 mg-5 text-left underline text-black max-md:text-2xl mt-4">Leírás: </h2>
            <p className="text-3xl ml-1 mg-5 text-left text-black max-md:text-2xl">{description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..."}</p>
          
          
          </article>
        </Grid>
      </Grid>
        </div>
    
    </main>
  );
};

export default ProductPage;