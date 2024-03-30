import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";
import { Grid } from "@mui/material";

function ThankYouPage() {
    return (
        <main className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%] min-h-screen">
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
                <div className="flex flex-col items-center self-center justify-center mt-2">
                    <Grid container spacing={10}>
                        <Grid item xs={6} sm={3.5}>
                            <Button text="Vásárlás" click={"/shop"}/>
                        </Grid>
                        <Grid item xs={6} sm={3.5}>
                            <Button text="Főoldal" click={"/"}/>
                        </Grid>
                        <Grid item xs={6} sm={3.5}>
                            <Button text="Visszajelzés" click={"/support"}/>
                        </Grid>
                    </Grid>
                </div>
                </main>
        )
}

export default ThankYouPage;