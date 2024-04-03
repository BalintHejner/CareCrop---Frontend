import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button2 from "../components/Button2";
import { Grid } from "@mui/material";

function ThankYouPage() {
    return (
        <main className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%] min-h-mp">
            <Header />
            <div>
                <img className="sitecarecroplogo" loading="lazy" src={require('../images/carecroplogo.png')} />
            </div>
            <div>
                <h1 className="text-center px-16 py-4 text-4xl italic font-extralight text-black max-md:max-w-full">
                    Köszönjük szépen, hogy vásárlásához igénybe vette szolgáltatásunkat!
                    <br />
                    További sok sikert kívánunk a tranzakció lebonyolításában!
                    <br />
                    Válassza legközelebb is a CareCrop oldalát.
                    <br />
                    Nekünk a termény a fontos!
                </h1>
                </div>
                <div className="flex flex-col items-center self-center ml-10 justify-center mt-2">
                    <Grid container spacing={10}>
                        <Grid item xs={6} sm={3.5}>
                            <Button2 text="Vásárlás" click={"/shop"} className={"justify-center items-center px-16 py-4 mt-5 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10"}/>
                        </Grid>
                        <Grid item xs={6} sm={3.5}>
                            <Button2 text="Főoldal" click={"/"} className={"justify-center items-center px-16 py-4 mt-5 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10"}/>
                        </Grid>
                        <Grid item xs={6} sm={3.5}>
                            <Button2 text="Visszajelzés" click={"/support"} className={"justify-center items-center px-16 py-4 mt-5 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10"}/>
                        </Grid>
                    </Grid>
                </div>
                </main>
        )
}

export default ThankYouPage;