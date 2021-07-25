import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css'
import {SliderData} from "./SliderData"

class ImageCarousel extends Component{
    render() {
        return (
            <Carousel className="carousel" showArrows={true} autoPlay={true}
            showThumbs={false} infiniteLoop={true} animationHandler="fade"
            interval={5000} swipeable={false}>
                
                {SliderData.map((slide, index) => {
                    return (
                            <div>
                                <img src={slide.image} className="slide-image"/>
                            </div>
                    )
                })}
            </Carousel>
        );
    }
};

export default ImageCarousel