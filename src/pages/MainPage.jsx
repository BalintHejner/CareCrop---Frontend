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
        <MyCarousel />
        <section className="flex flex-col self-center px-5 mt-12 w-full max-w-[1457px] max-md:mt-10 max-md:max-w-full">
          <h2 className="text-center px-16 py-4 mt-11 text-4xl italic font-extralight text-black max-md:max-w-full">
            Nekünk a termény a fontos
          </h2>
          <div className="justify-center mt-2">
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} lg={4} xl={4}>
                <Button2 click={"/register"} text={"Regisztráció"} className={"w-full btn-style"}/>
              </Grid>
              <Grid item xs={12} sm={4} lg={4} xl={4}>
                <Button2 click={"/shop"} text={"Vásárlás"} className={"w-full btn-style"}/>
              </Grid>
              <Grid item xs={12} sm={4} lg={4} xl={4}>
                <Button2 click={"/login"} text={"Bejelentkezés"} className={"w-full btn-style"}/>
              </Grid>
            </Grid>
          </div>
        </section>
      </div>
    </>
  );
};

function MainPage() {
  return (
    <div className="flex flex-col items-center min-h-mp pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
      <Header />
      <MainForm />
    </div>
  );
}

export default MainPage;
