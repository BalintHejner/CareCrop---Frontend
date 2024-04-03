import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button2 from "../components/Button2";
import MyCarousel from "../components/Carousel";
import { Grid } from '@mui/material';



const MainForm = () => {
    return (
        <>
         <div className="flex flex-col items-center justify-center">
            {/* <img loading="lazy" src={require('../images/carousel-p-1.png')} className="mt-7 rounded-full img" /> */}
            <MyCarousel />
            <section className="flex flex-col self-center px-5 mt-12  w-full max-w-[1457px] max-md:mt-10 max-md:max-w-full">
              <h2 className="text-center px-16 py-4 text-4xl italic font-extralight  text-black max-md:max-w-full">
                  Nekünk a termény a fontos
              </h2>
              <div className="flex flex-col items-center justify-center mt-2">
                
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={4}>
                    <Button2 click={"/register"} text={"Regisztráció"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4  max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"} />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Button2 click={"/shop"} text={"Vásárlás"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Button2 click={"/login"} text={"Bejelentkezés"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
                  </Grid>
                </Grid>
              </div>
            </section>
         </div>
        </>
)};

function MainPage() {
  return (
    <div className="flex flex-col items-center min-h-mp pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
      <Header />
      <MainForm />
    </div>
  );
}

export default MainPage;
