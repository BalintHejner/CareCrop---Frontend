import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import { Carousel } from "primereact/carousel";
import Button from "../components/Button";

import React from "react";

const ImageComponent = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const FeedbackButton = () => (
  <div className="justify-center self-center px-12 py-6 mt-24 text-2xl font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] max-md:px-5 max-md:mt-10">
    Visszajelzés
  </div>
);

const MainForm = () => (
 <>
 <Carousel className="max-w-full max-md:max-w-full" value={0} numVisible={1}>
    <img src="" alt="Decorative Image" />
 </Carousel>
  <section className="flex flex-col self-center px-5 mt-12 w-full max-w-[1457px] max-md:mt-10 max-md:max-w-full">
    <div className="py-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
          <ImageComponent
            src=""
            alt="Decorative Image"
            className="grow w-full aspect-[2.27] max-md:mt-8 max-md-w-full"
          />
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full"></div>
      </div>
    </div>
    <h2 className="self-start mt-4 ml-56 text-4xl italic font-extralight text-center text-black max-md:max-w-full">
      Nekünk a termény a fontos
    </h2>
    <Button />
    <FeedbackButton />
  </section>
  </>
);



function MainPage() {
    return (
        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
        <Header />
        <MainForm />
        </div>

    )
}

export default MainPage