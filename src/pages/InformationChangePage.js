import * as React from "react";
import "../output.css";
import Header from "../components/Header";

return (
    <>
        <Header />
        <main>
        <section className="flex gap-5 sm:flex-col sm:gap-0">
          <aside className="flex flex-col w-2/5 sm:ml-0 sm:w-full">
            <div className="flex flex-col self-stretch my-auto text-black sm:mt-10">
              <div className="text-5xl font-bold sm:text-4xl">Sanyi45</div>
              <div className="mt-5 text-2xl italic underline">
                <span>Elérhetőségek</span>:
                <ul>
                  <li>Email: <span className="italic font-light">sanyiakiraly@gmail.com</span></li>
                  <li>Telefonszám: <span className="italic font-light">+36 305713585</span></li>
                </ul>
              </div>
            </div>
          </aside>
          <div className="flex flex-col ml-5 w-[22%] sm:ml-0 sm:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/image_src_9" alt="" className="shrink-0 max-w-full aspect-square w-[248px] sm:mt-10"/>
          </div>
          <div className="flex flex-col ml-5 w-[38%] sm:ml-0 sm:w-full">
            <div className="flex flex-col mt-3.5 text-2xl font-bold leading-6 text whitespace-nowrap sm:mt-10 sm:max-w-full">
              <div className="flex gap-5 justify-between sm:flex-wrap sm:max-w-full">
                <button className="grow justify-center px-14 py-6 bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] sm:px-5"> Új hírdetés </button>
                <button className="grow justify-center px-5 py-6 bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"> Profil módosítása </button>
              </div>
              <button className="justify-center self-center px-12 py-6 mt-10 bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] sm:px-5"> Visszajelzés </button>
            </div>
          </div>
        </section>
        </main>
    </>
);
