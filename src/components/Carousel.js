import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"
import Carousel from "react-responsive-carousel/lib/js/components/Carousel/index";
import {SliderData} from "./SliderData"

class ImageCarousel extends Component{
    render() {
        return (
            <Carousel className="carousel" showArrows={true} autoPlay={true}
            showThumbs={false} infiniteLoop={true} centerMode={true}
            interval={5000} swipeable={false} animationHandler="fade"
            centerSlidePercentage={100} autoFocus={true}
            swipeable={false}>
                
                {SliderData.map((slide, index) => {
                    return (
                            <div className="slide-image-div" style={{backgroundImage: 'url('+slide.image+')'}}>
                            </div>
                    )
                })}
            </Carousel>
        );
    }
};

export default ImageCarousel