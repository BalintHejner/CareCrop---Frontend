import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button2 from "../components/Button2";
import Input from "../components/Input";
// import CreditCard from "../components/Card";


const ProductInfo = ({crop, amount, price, payment}) => (

  <aside className="flex flex-col w-[33%] md:ml-0 mx-auto md:w-full">
  <div className="flex flex-col mt-2 text-base aspect-square mx-auto text-black bg-brown md:mt-10 md:max-w-full">
     <h1 className="ml-1 mg-5 tracking-[3.2px] font-bold md:max-w-full text-3xl">A kosár tartalma:</h1>
     <hr className="w-500 bg-zinc-300 mg-5" />
     <div className="flex flex-col w-full max-w-full">
       <ul className="flex flex-col w-full max-w-full">
         <li className="flex flex-col w-full max-w-full mg-5">{crop}
         <ul>
         <li>Mennyiség: {amount} kg</li>
         <li>Ár: {price} Ft</li>
         </ul>
         </li>

       </ul>
   </div>

   <hr className="w-500 bg-zinc-300 mg-5" />
   <h1 className="ml-1 mg-5 tracking-[3.2px] font-bold md:max-w-full text-3xl">Fizetendő:</h1>
   <hr className="w-500 bg-zinc-300 mg-5" />
   <h1 className="ml-1 mr-50 tracking-[3.2px] font-bold md:max-w-full text-3xl text-right">{payment} Ft</h1>

  </div>
 </aside>
);


function CartForm()  {
  return (
    <main className="flex min-h-mp mx-auto min-w-screen flex-col pb-12 bg-body">
        <Header />
      <section className="self-center mt-25 w-full max-w-[1728px] md:mt-10 md:max-w-full">
        <div className="flex gap-5 md:flex-col md:gap-0">
          <aside className="flex flex-col w-[33%]  md:ml-0 md:w-full" style={{marginLeft: "auto", marginRight: "auto"}}>
            <div className="flex flex-col mt-2 text-base text-black md:mt-10 md:max-w-full">
              <h2 className="  text-upper tracking-[3.2px] md:max-w-full">Teljes név:</h2>
              <Input placeholder={"Teljes Név"} type={"text"} />
              <h2 className="mt-7  text-upper tracking-[3.2px] md:max-w-full">E-mail cím:</h2>
              <Input placeholder={"E-mail cím"} type={"text"} />
              <h2 className="mt-7  text-upper tracking-[3.2px] md:max-w-full">Telefonszám:</h2>
              <Input placeholder={"Telefonszám"} type={"text"} />
              <h2 className="mt-7  text-upper tracking-[3.2px] md:max-w-full">Kategóriák:</h2>
              <select className="shadow appearance-none border rounded w-360 mt-3 py-2 px-3 text-gray-700 leading-tight">
                 <option disabled selected></option>
                 <option >PayPal</option>
                 <option >Visa</option>
                 <option >Mastercard</option>
                 <option >Maestro</option>
                 <option>Utánvét</option>
              </select>
              {/* <Dropdown options={["PayPal", "Visa", "Mastercard", "Maestro", "Utánvét"]} optionLabel="optionLabel" className="bg-white" placeholder="Select a category" /> */}
            <Button2 click={"/thankyou"} text={"Fizetés"} className={"text-2xl justify-center items-center w-btn2 px-16 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"} />
            </div>
          </aside>
          <ProductInfo />
          {/* <CreditCard /> */}
        </div>
      </section>
    </main>
  );
};


export default CartForm;