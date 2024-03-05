import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

const ProductInfo = ({ productName, productDetails }) => (
  <div className="flex flex-col px-2 py-3 mt-1 bg-white rounded border border-solid shadow-sm border-[color:var(--Light-Gray,#DBDBDB)]">
    <div>{productName}</div>
    <div className="shrink-0 mt-2 h-px bg-zinc-300" />
    {productDetails.map((detail) => (
      <div key={detail} className="mt-2">{detail}</div>
    ))}
  </div>
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
              <h2 className="mt-9 ml-4 uppercase tracking-[3.2px] md:max-w-full">Telefonszám:</h2>
              <Input placeholder={"Text field data"} type={"text"} />
              <h2 className="mt-9 ml-4 uppercase tracking-[3.2px] md:max-w-full">Kategóriák:</h2>
              <select className="shadow appearance-none border rounded w-50 py-2 px-3 text-gray-700 leading-tight">
                 <option>PayPal</option>
                 <option>Visa</option>
                 <option>Mastercard</option>
                 <option>Maestro</option>
                 <option>Utánvét</option>
             </select>
            </div>
          </aside>
          <article className="flex flex-col ml-5 w-[67%] md:ml-0 md:w-full">
            <div className="flex flex-col grow font-bold text-black md:mt-10 md:max-w-full">
              <div className="flex flex-col items-end self-end px-8 pt-4 pb-12 max-w-full text-5xl bg-stone-400 w-[830px] md:px-5 md:text-4xl">
                <h1 className="self-center text-center md:text-4xl">A kosár tartalma</h1>
                <div className="mt-5 max-w-full h-px bg-zinc-300 w-[716px]" />
                <div className="self-stretch mt-3.5 text-3xl md:max-w-full">
                  Repce<br />
                  Mennyiség: 20 kg<br />
                  Ár: 2000 Ft<br />
                  Árpa<br />
                  Rozs stb...
                </div>
                <div className="mt-32 max-w-full h-px bg-zinc-300 w-[716px] md:mt-10" />
                <div className="self-start mt-3.5 ml-10 text-center md:ml-2.5 md:text-4xl">Fizetendő:</div>
                <div className="mt-5 max-w-full h-px bg-zinc-300 w-[716px]" />
                <div className="flex gap-5 justify-between mt-5 mr-6 text-center whitespace-nowrap md:mr-2.5 md:text-4xl">
                  <div className="flex-auto md:text-4xl">Sok-sok</div>
                  <div className="md:text-4xl">Ft</div>
                </div>
              </div>
                <Button text={"Fizetés"} onClick={""} />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default CartPage;