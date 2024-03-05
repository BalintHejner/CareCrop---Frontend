import React from "react";
import "../output.css";
import Header2 from "../components/HeaderOption2";
import Button2 from "../components/Button2";
import { InputTextarea } from 'primereact/inputtextarea';

const FeedbackSection = () => (
  <div className="flex  flex-col min-w-screen self-center items-center justify-center gap-5 pb-12 text-black whitespace-nowrap bg-body leading-[100%]">
  <img loading="lazy" src={require('../images/carecroplogo.png')} className="  sitecarecroplogo  " />
    <div className="self-center text-4xl italic font-light leading-9 items-center text-black max-md:max-w-full">
      Visszajelzése van? Ossza meg velünk!
    </div>
    <p className=" ml-1 mb-5px text-upper self-start mt-10 mt-11 text-base text-black uppercase tracking-[3.2px] max-md:max-w-full">
      Termény:
    </p>
    <div className="flex gap-2.5 self-start px-2 py-3 mb-4 text-2xl bg-white rounded border border-solid border-[color:var(--Gray,#A6A6A6)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
      <select className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight">
        <option>Termény</option>
        <option>Termény</option>
        <option>Termény</option>
      </select>
    </div>
    <div className="flex gap-5 ml-1 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
      <InputTextarea placeholder={"Visszajelzés"} rows={5} cols={50} className="w-75 py-3 px-3 flex gap-5  justify-between items-start pt-1.5 pr-1.5 pb-12 pl-4 text-base leading-6 text-gray-700 bg-white rounded border border-solid border-[color:var(--denim-16-center-channel-text,rgba(63,67,80,0.16))] h-15 max-md:flex-wrap max-md:max-w-full" />
      {/* <Button2 text={"Küldés"} className={"text-2xl justify-center items-center w-225  px-16 py-4 mt-105r max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/> */}
    </div>
  </div>
);

function SupportPage() {
  return (
    <div className="flex flex-col pb-12 bg-body leading-[100%]">
        <Header2 />
        <FeedbackSection />
    </div>
  );
}

export default SupportPage;