import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import {SliderData} from "./SliderData"

class ImageCarousel extends Component{
    render() {
        return (
            <Carousel className="carousel" showArrows={true}>
                <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

                {SliderData.map((slide, index) => {
                return (
                        <div>
                            <img src={slide.image} />
                        </div>
                )
                })}
            </Carousel>
        );
    }
};

export default ImageCarousel