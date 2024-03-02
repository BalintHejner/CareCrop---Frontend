import React from "react";
import "../output.css";
import Header2 from "../components/HeaderOption2";
import Button2 from "../components/Button2";
import Input from "../components/Input";

const FeedbackSection = () => (
  <div className="flex z-10 flex-col self-center -mt-3.5 w-full max-w-[1716px] max-md:max-w-full">
   
    <div className="self-center text-4xl italic font-light leading-9 text-center text-black max-md:max-w-full">
      Visszajelzése van? Ossza meg velünk!
    </div>
    <div className="self-start mt-10 text-base text-black uppercase tracking-[3.2px] max-md:max-w-full">
      Termény:
    </div>
    <div className="flex gap-2.5 self-start px-2 py-3 mt-1 text-2xl bg-white rounded border border-solid border-[color:var(--Gray,#A6A6A6)] text-neutral-400 max-md:flex-wrap max-md:max-w-full">
      <select className="shadow appearance-none border rounded w-10px  py-2 px-3 text-gray-700 leading-tight">
        <option>Termény</option>
      </select>
    </div>
    <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start pt-1.5 pr-1.5 pb-12 pl-4 text-base leading-6 text-gray-700 bg-white rounded border border-solid border-[color:var(--denim-16-center-channel-text,rgba(63,67,80,0.16))] max-md:flex-wrap max-md:max-w-full">
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" type="text" placeholder="Visszajelzés" />
        <div className="w-1.5 rounded bg-gray-700 bg-opacity-20 h-[155px]" />
      </div>
      <Button2 text={"Küldés"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 mt-8 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}/>
    </div>
  </div>
);

function MyComponent() {
  return (
    <div className="flex flex-col pb-12 bg-body leading-[100%]">
        <Header2 />
        <FeedbackSection />
    </div>
  );
}

export default MyComponent;