  import React from "react";
  import "../output.css";
  import axios from "axios";
  import { InputTextarea } from 'primereact/inputtextarea';
  import Header from "../components/Header";
  import { Grid } from '@mui/material';

  const FeedbackSection = () => {

    const [selectedOption, setSelectedOption] = React.useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    let message;
    const handleSupport = e => {
      e.preventDefault();
      const data = {
        type: selectedOption,
        message: message
      }
      console.log("Selected option:", selectedOption);
      axios.post(`support.php?message=${message}&type=${selectedOption.valueOf}`, data).then(res => {
        console.log(res);
      }).catch(  
        err => console.log(err)
      )
    };

  return (
    <div className="flex flex-col self-center items-center justify-center gap-5 pb-12 text-black whitespace-nowrap bg-body leading-[100%]">
    <img loading="lazy" src={require('../images/carecroplogo.png')} className="  sitecarecroplogo  " />
    <div className="word-wrap self-center text-4xl italic mb-4 font-light leading-9 items-center text-black" >
      Visszajelzése van? Ossza meg velünk!
    </div>
      
    <Grid container spacing={2}>
      <Grid item xs={10} sm={12} md={7} lg={9} xl={9}>
      <div className="flex  self-start mb-1 mt-3 text-2xl rounded border border-solid border-[color:var(--Gray,#A6A6A6)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
        <select onChange={handleOptionChange} value={selectedOption} className="shadow appearance-none border rounded w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <option className="mg-5 glass" value="" disabled selected>Visszajelzés típusa</option>
          <hr className="mx-auto"/>
          <option className="mg-5" value="1">Vásárlási problémák</option>
          <hr className="mx-auto"/>
          <option className="mg-5" value="2">Problémák az oldal működésével</option>
          <hr className="mx-auto"/>
          <option className="mg-5" value="3">Vásárlási élmény javítása</option>
          <hr className="mx-auto"/>
          <option className="mg-5" value="4">Egyéb</option>
        </select>
      </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
      <div className="flex text-2xl rounded border border-solid border-[color:var(--Gray,#A6A6A6)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
        <button onClick={handleSupport} className="text-2xl  w-btn2 px-16 py-4 mt-2 max-w-full font-bold text-black bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]">Küldés</button>
      </div>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={10} sm={10} md={10} lg={12} xl={12}>
        <InputTextarea onChange={e => message = e.target.value} placeholder={"Visszajelzés"}  className="w-75 py-3 px-3 flex gap-5 justify-between items-start pt-1.5 pr-1.5 pb-12 pl-4 text-base leading-6 text-gray-700 bg-white rounded border border-solid border-[color:var(--denim-16-center-channel-text,rgba(63,67,80,0.16))] h-15 max-md:flex-wrap max-md:max-w-full focus:outline-none focus:shadow-outline focus:border-blue-500" />
      </Grid>
    </Grid>
    </div>
    )
  };

  function SupportPage() {
    return (
      <div className="flex flex-col pb-12 min-h-mp bg-body leading-[100%]">
          <Header/>
          <FeedbackSection />
      </div>
    );
  }

  export default SupportPage;