import * as React from "react";
import "../output.css";
import {Carousel} from "react-responsive-carousel";

export default function Carousel() {
    return(
        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading[100%]">
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop={true} autoPlay={true} interval={20}>
                
            </Carousel>
        </div>
    )
}