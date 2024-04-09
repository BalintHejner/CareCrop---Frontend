import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Input from "../components/Input";
import { Grid } from '@mui/material'
import Button2 from "../components/Button2";

const Buttons = ({ label, onClicked }) => (
  <Button2 click={onClicked} className={"text-2xl w-btn2 px-6 py-4 mt-2 max-w-full font-bold leading-6 text-black whitespace-nowrap bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px]"}  text={label} />
);


const UploadSection = () => (

  <section className="mt-14 w-full max-w-[1624px] max-md:mt-10 max-md:max-w-full mx-auto my-auto gap-5 text-black whitespace-nowrap bg-body leading-[100%]">
  <div className="flex gap-5 md:flex-col md:gap-0">
    <div className="flex flex-col items-center ml-5 w-[72%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow mt-11 mr-50 items-center max-md:mt-10 max-md:max-w-full">
      <Grid container spacing={5} style={{ marginLeft: "auto", marginRight : "auto"}}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Input type="text" placeholder="Teljes név"  />
              <div>
                <Input type="text" placeholder="Felhasználónév" />
              </div>
          </Grid> 
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <Input type={"email"}  placeholder="E-mail cím" /> 
              <div>
                <Input type={"tel"} onCh pattern={"[0-9]{2}-[0-9]{2}-[0-9]{3}-[0-9]{4}"} placeholder="Telefonszám (Formátum: 06-30-123-4567)"   />
              </div>
          </Grid> 
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Input type={"password"}  placeholder="Jelszó"  />
            <div>
                <Input type={"password"}  placeholder="Jelszó megerősítése"/>
            </div>

          </Grid>
        </Grid>
      </div>
        <div classname="flex flex-col items-center w-full max-md:mt-10 max-md:max-w-full">
        <Buttons label={"Adatok módosítása"} />
        </div>
      </div>
    </div>
  </section>
);


function InformationChange() {

  return (
      <>
          <Header />
          <main className="flex flex-col min-h-mp items-center bg-body">
            <div className="text-3xl font-bold mt-11">username fiókja</div>
            <section className="flex gap-5 sm:flex-col sm:gap-0">
            <div className=" flex gap-5 justify-around">
            <Grid container spacing={1.8}>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Új hírdetés" onClicked={"/productupload"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Profil módosítása" onClicked={"/useredit"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Visszajelzés" onClicked={"/support"}/>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Buttons label="Vissza az áruházba" onClicked={"/shop"}/>
              </Grid>
            </Grid>
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
