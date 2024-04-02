import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import Button2 from "../components/Button2";

function ComingSoonPage()  {

    return (

        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%] min-h-screen">
            <Header />
            <img loading="lazy" src={require('../images/carecroplogocrossed.png')} />
            <h2 className="text-center px-16 py-4 text-4xl italic font-extralight text-black max-md:max-w-full">
                    Sajnáljuk, ez a szolgáltatás jelenleg nem elérhető!
            </h2>
            <Button2 text={"Vissza a főoldalra"} className={"justify-center items-center px-16 py-4 mt-5 max-w-full text-3xl font-bold bg-orange-200 rounded-xl border-black border-solid shadow-sm border-[3px] w-[361px] max-md:px-5 max-md:mt-10"} click={"/"}/>
           
        </div>
    )
}

export default ComingSoonPage;