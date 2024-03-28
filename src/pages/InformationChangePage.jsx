import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Input from "../components/Input";
import { Grid } from '@mui/material'
import  Button from "../components/Button";

const UploadSection = () => (
  <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
    <div className="flex gap-5 md:flex-col md:gap-0">
      <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-center px-5 max-md:mt-10 max-md:max-w-full">
          <Grid container spacing={30} style={{marginLeft : "auto" , marginRight : "auto"}}>
            <Grid item xs={6} sm={3}>
                <Input type="text" placeholder="Teljes név" />
                <div>
                  <Input type="text" placeholder="Felhasználó név" />
                </div>
            </Grid> 
            <Grid item xs={6} sm={3}>
                <Input type="text" placeholder="Email cím" /> 
                <div>
                  <Input type="number" placeholder="Telefonszám" />
                </div>
            </Grid> 
            <Grid item xs={6} sm={3}>
              <Input type="text" placeholder="Jelszó" />
              <div>
                  <Input type="text" placeholder="Jelszó megerősítése" />
              </div>

            </Grid>
          </Grid>
        </div>
        <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
        <Button text="Hírdetés feladása" />
        </div>
      </div>
    </div>
  </section>
);


function InformationChange() {

  return (
      <>
          <Header />
          <main className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
            <section className="flex gap-5 sm:flex-col sm:gap-0">
              <aside className="flex flex-col w-full sm:ml-0 sm:w-full">
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
                  <div className="flex gap-5 sm:flex-wrap sm:max-w-full">
                    <Button text="Új hirdetés" />
                    <Button text="Profil módosítása" />
                  </div>
                  <Button text="Visszajelzés" />
                </div>
              </div>
            </section>
            <section>
                <UploadSection />
            </section>
          </main>
      </>
  );
}

export default InformationChange;
