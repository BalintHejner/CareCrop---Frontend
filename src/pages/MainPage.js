import * as React from "react";
import "../output.css";
import Header from "../components/Header";
import { Carousel } from "primereact/carousel";
import Button from "../components/Button";

function MainFrom() {
    return (
        <>
            <Carousel circular autoplayInterval={2000} numScroll={1} numVisible={1} responsiveOptions={responsiveOptions} itemTemplate={""}/>
            <Button />
        </>
    )
}


function MainPage() {
    return (
        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading-[100%]">
        <Header />
        <MainForm />
        </div>

    )
}

export default MainPage