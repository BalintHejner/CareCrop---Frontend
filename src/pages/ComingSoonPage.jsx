import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button from "../components/Button";

function comingsoon()  {

    return (

        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%] min-h-screen">
            <Header />
            <img loading="lazy" src={require('../images/carecroplogocrossed.png')} />
            <h2 className="text-center px-16 py-4 text-4xl italic font-extralight text-black max-md:max-w-full">
                    Sajnáljuk, ez a szolgáltatás jelenleg nem elérhető!
            </h2>
            <Button  text={"Vissza a főoldalra"} className={"text-2xl justify-center items-center w-btn2"} click={"/"}/>
           
        </div>
    )
}

export default comingsoon;