import React, { useState } from 'react';
import "../output.css";
import axios from 'axios';
import Header from '../components/Header';
import Button2 from '../components/Button2';
import Input from '../components/Input';
import { InputTextarea } from 'primereact/inputtextarea';
import { Grid } from '@mui/material';
import { FileUpload } from 'primereact/fileupload';


const Buttons = ({ label, onClicked }) => (
  <Button2 click={onClicked} className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={label} />
);


const EditSection = () => {

  const [title, setTitle] = useState("");
  const [crop, setCrop] = useState("");
  const [amount, setAmount] = useState("");
  const [quality, setQuality] = useState("");
  const [price, setPrice] = useState("");
  const [season, setSeason] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = e => {
    const newTitle = e.target.value;
    setTitle(newTitle);
   }

  const handleCropChange = e => {
    const newCrop = e.target.value;
    setCrop(newCrop);
   }

  const handleAmountChange = e => {
    const newAmount = e.target.value;
    setAmount(newAmount);
   }

  const handleQualityChange = e => {
    const newQuality = e.target.value;
    setQuality(newQuality);
   }

  const handlePriceChange = e => {
    const newprice = e.target.value;
    setPrice(newprice);
   }

  const handleSeasonChange = e => {
    const newSeason = e.target.value;
    setSeason(newSeason);
   }

  const handleDescriptionChange = e => {
    const newDescription = e.target.value;
    setDescription(newDescription);
   }

  const handleProductEdit = e => {
    e.preventDefault();
    const dataToBackend = {
      season: season,
      name: crop,
      quality: quality,
      price: price,
    }
    const otherProductData = {
      title: title,
      amount: amount,
      price: price,
      description: description
    }
    axios.put(`products.php?season=${season}&name=${crop}&quality=${quality}&price=${price}`, dataToBackend).then(res => {
      console.log(res);
      localStorage.setItem('otherProductData', JSON.stringify(otherProductData));
    }).catch(
      err => console.log(err)
    )
  };


  return (
    <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
      <div className="flex gap-5 md:flex-col md:gap-0">
        <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full" style={{marginLeft : "auto" , marginRight : "auto"}}>
          <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">
            <Grid container spacing={10}>
              <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
                  <Input type="text" change={handleTitleChange} placeholder="*Hírdetés címe" />

                  <div className="flex flex-col mt-1 bg-white  rounded border border-solid shadow-sm border-zinc-300">
                    <select onChange={handleSeasonChange} className="shadow appearance-none border rounded h-3 w-360  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option className="mg-5 glass" value="" disabled selected>*Szezon</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5 " value="Repce">Tavasz</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Árpa" >Nyár</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Kukorica" >Ősz</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Búza" >Tél</option>
                    </select>
                  </div>

                  <FileUpload 
                  id="fileupload" 
                  name="fileupload" 
                  maxFileSize={1000000} 
                  mode='basic' 
                  url={'/api/upload'}
                  multiple={false} 
                  accept="image/*" 
                  className='text-2xl w-360 px-3 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]' 
                />            
              </Grid> 
              <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
              <div className="flex flex-col mt-1 bg-white  rounded border border-solid shadow-sm border-zinc-300">
                    <select onChange={handleCropChange} className="shadow appearance-none border rounded h-3 w-360  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option className="mg-5 glass" value="" disabled selected>*Termény</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5 " value="Repce">Repce</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Árpa" >Árpa</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Kukorica" >Kukorica</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Búza" >Búza</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Tritikálé" >Tritikálé</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Zab" >Zab</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Borsó" >Borsó</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Napraforgó" >Napraforgó</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Szója" >Szója</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Durum" >Durum</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Rozs" >Rozs</option>
                    </select>
                  </div>

                  <Input type="number" change={handleAmountChange} placeholder="*Mennyiség" /> 

                  <div className="flex flex-col mt-1 bg-white  rounded border border-solid shadow-sm border-zinc-300">
                    <select onChange={handleQualityChange} className="shadow appearance-none border rounded h-3 w-360  text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option className="mg-5 glass" value="" disabled selected>*Minőség</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Takarmány">Takarmány</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Malmi 2-es" >Malmi 2-es</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Malmi 1-es" >Malmi 1-es</option>
                      <hr className="mx-auto"/>
                      <option className="mg-5" value="Prémium" >Prémium</option>
                  </select>
                  </div>
              </Grid> 
              <Grid item xs={8} sm={6} md={6} lg={4} xl={4}>
                <Input type="number" change={handlePriceChange} placeholder="*Ár" />
                <div className="flex flex-col mt-1 bg-white  rounded border border-solid shadow-sm border-zinc-300">
                    <InputTextarea onChange={handleDescriptionChange} placeholder={"Leírás"} rows={7} style={{width: "360px"}} cols={50}  className="w-20 py-3 px-3 flex gap-5 justify-between items-start pt-1.5 pr-1.5 pb-12 pl-4 text-base leading-6 text-gray-700 bg-white rounded border border-solid border-[color:var(--denim-16-center-channel-text,rgba(63,67,80,0.16))] h-15 max-md:flex-wrap max-md:max-w-full focus:outline-none focus:shadow-outline focus:border-blue-500" />
                </div>

              </Grid>
            </Grid>
          </div>
          <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
          <button onClick={handleProductEdit} className="text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]">Hírdetés módosítása</button>
          <div className="mt-6 text-base italic text-black whitespace-nowrap">A *-gal megjelölt mezők kitöltése kötelező</div>
          </div>
        </div>
      </div>
    </section>
  )
};

function ProductEditPage() {
  return (
    <main className="flex flex-col min-h-mp items-center pb-2 bg-body">
      
      <Header />
      <div className="mb-1 flex gap-5 justify-around">
        <Grid container spacing={1.8}>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Buttons label="Új hírdetés" onClicked={"/productupload"}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Buttons label="Profil módosítása" onClicked={"/useredit"}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Buttons label="Visszajelzés" onClicked={"/support"}/>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Buttons label="Vissza az áruházba" onClicked={"/shop"}/>
          </Grid>
        </Grid>
      </div>
      <EditSection />
     
    </main>
  );
}

export default ProductEditPage;