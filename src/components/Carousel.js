import * as React from "react";
import "../output.css";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyCarousel() {
    const images = [
        {
            url: require('../images/carousel-p-1.png'),
            alt: 'Első kép'
        },
        {
            url: require('../images/carousel-p-4.jpeg'),
            alt: 'Második kép'
        },
        {
            url: require('../images/carousel-p-3.jpg'),
            alt: 'Harmadik kép'
        },
        {
            url: require('../images/carousel-p-4.jpeg'),
            alt: 'Negyedik kép'
        },
        {
            url: require('../images/carousel-p-1.png'),
            alt: 'Ötödik kép'
        }
    ]

    return(
        <div className="flex flex-col items-center img  my-carousel pb-12 h-max text-black whitespace-nowrap bg-body leading[100%]">
            <Carousel showThumbs={false} showStatus={false} className="rounded-full" showIndicators={false} showArrows={false} infiniteLoop={true} autoPlay={true} interval={2000} stopOnHover={false} transitionTime={500}>
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