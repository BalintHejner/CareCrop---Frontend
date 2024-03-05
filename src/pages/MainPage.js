import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button2 from "../components/Button2";
import MyCarousel from "../components/Carousel";

const items = [
    <>
        <img loading="lazy" src={require('../images/carousel-p-1.png')} className="w-[100%] h-[100%]"/>
        <img loading="lazy" src={require('../images/carousel-p-1.png')} className="w-[100%] h-[100%]"/>
        <img loading="lazy" src={require('../images/carousel-p-1.png')} className="w-[100%] h-[100%]"/>
        <img loading="lazy" src={require('../images/carousel-p-1.png')} className="w-[100%] h-[100%]"/>
        <img loading="lazy" src={require('../images/carousel-p-1.png')} className="w-[100%] h-[100%]"/>
    </>
]

function MainForm() {
    return (
        <>
         <div className="flex flex-col min-h-mp items-center justify-center">
            {/* <img loading="lazy" src={require('../images/carousel-p-1.png')} className="mt-7 rounded-full img" /> */}
            <MyCarousel />
            <section className="flex flex-col self-center px-5 mt-12  w-full max-w-[1457px] max-md:mt-10 max-md:max-w-full">
              <div className="py-2.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"></div>
                  </div>
              </div>
              <h2 className="text-center px-16 py-4 mt-4 text-4xl italic font-extralight text-black max-md:max-w-full">
                  Nekünk a termény a fontos
              </h2>
              <Button2 text={"Regisztráció"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 mt-8 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
              <Button2 text={"Vásárlás"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 left max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
              <Button2 text={"Visszajelzés"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 right max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
              <Button2 text={"Bejelentkezés"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 mt--8 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
            </section>
         </div>
        </>
)};

function MainPage() {
  return (
    <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
      <Header />
      <MainForm />
    </div>
  );
}

export default MainPage;
