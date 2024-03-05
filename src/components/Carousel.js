import * as React from "react";
import "../output.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        },
        {
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        },
        {
            url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
        }
    ]

    return(
        <div className="flex flex-col items-center pb-12 h-max text-black whitespace-nowrap bg-body leading[100%]">
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} infiniteLoop={true} autoPlay={true} interval={2000} dynamicHeight={true} transitionTime={500}>
                 {
                    images.map((image, index) => (
                        <div key={index}>
                            <img loading="lazy" src={image.url} className="img" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}