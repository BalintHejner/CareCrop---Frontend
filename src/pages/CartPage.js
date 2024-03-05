import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

const ProductInfo = ({ productName }) => (
  <section className="self-center mt-16 w-full max-w-[1728px] md:mt-10 md:max-w-full">

    <div className="flex flex-col px-2 py-3 mt-1 rounded border border-solid shadow-sm border-[color:var(--Light-Gray,#DBDBDB)]">
      <div>{productName}</div>
      <div className="shrink-0 mt-2 h-px bg-zinc-300" />
      
    </div>
  </section>
);

const CartPage = () => {
  return (
    <main className="flex min-h-screen min-w-screen flex-col pb-12 bg-body">
        <Header />
      <section className="self-center mt-16 w-full max-w-[1728px] md:mt-10 md:max-w-full">
        <div className="flex gap-5 md:flex-col">
          <aside className="flex flex-col w-[33%] md:ml-0 md:w-full">
            <div className="flex flex-col mt-8 text-base text-black md:mt-10 md:max-w-full">
              <h2 className="ml-4 uppercase tracking-[3.2px] md:max-w-full">Teljes név:</h2>
              <Input placeholder={"Text field data"} type={"text"} />
              <h2 className="mt-7 ml-4 uppercase tracking-[3.2px] md:max-w-full">E-mail cím:</h2>
              <Input placeholder={"Text field data"} type={"text"} />
              <h2 className="mt-7 ml-4 uppercase tracking-[3.2px] md:max-w-full">Telefonszám:</h2>
              <Input placeholder={"Text field data"} type={"text"} />
              <h2 className="mt-7 ml-4 uppercase tracking-[3.2px] md:max-w-full">Kategóriák:</h2>
              <select className="shadow appearance-none border rounded w-10 mt-3 py-2 px-3 text-gray-700 leading-tight">
                 <option>PayPal</option>
                 <option>Visa</option>
                 <option>Mastercard</option>
                 <option>Maestro</option>
                 <option>Utánvét</option>
              </select>
            </div>
          </aside>
          <aside className="flex flex-col w-[33%] md:ml-0 md:w-full">
            <ProductInfo productName={"Repce"} />
            <Button text={"Fizetes"} />
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CartPage;