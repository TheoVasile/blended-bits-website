import React from 'react'
import './Home.css'
import Navbar from "./components/navbar/Navbar"
import ImageSlider from './components/ImageSlider'
import {SliderData} from "./components/SliderData"
import { ParallaxProvider } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import ImageCarousel from './components/Carousel'

function Home() {
    return (
        <body>
            <div class="hero-bg">
                <Navbar/>
                <h1>Take your 3D renders to<br></br> the next level</h1>
                <p>3D assets for any scene</p>
                <button class="collections-button">Check out our collections</button>
                <ImageCarousel class="slider"/>
            </div>
            <div class="parallax">
                <ParallaxProvider class="info">
                    <ParallaxBanner
                        layers={[
                            {
                                image: "/images/drownin.png",
                                amount: 0.2,
                            }
                        ]}
                        style={{height: '100%'}}>
                        <h2>Blended Bits provides the most expansive collection of professional-grade assets for any scene</h2>
                        <h2>Our focus is on letting 3D artists unleash their full creativity without the hassle of creating secondary assets</h2>
                    </ParallaxBanner>
                </ParallaxProvider>
            </div>
            <div class="comparison">
                <section class="advertisment">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                </section>
            </div>
            <div class="collections">
                <div class="title">
                    <h1>OUR MOST POPULAR COLLECTIONS</h1>
                    <p>Lorem ipsum</p>
                </div>
                <div class="set">
                    <h2>
                        3D Assets for any scene
                    </h2>
                    <button class="collections-button">Check out the kitchen collection</button>
                    <img src="/images/kitchen 2.png"/>
                </div>
                <div class="set">
                    <h2>
                        Populate your renders
                    </h2>
                    <button class="collections-button">Check out the bathroom collection</button>
                    <img src="/images/bathroom.png"/>
                </div>
                <div class="set">
                    <h2>
                        One step closer to realism
                    </h2>
                    <button class="collections-button">Check out the office collection</button>
                    <img src="/images/office.png"/>
                </div>
            </div>
            <div id="end">
                    <a>Contact us</a>
                    <a>Help</a>
                    <a>Terms and conditions</a>
                    <a>Privacy policies</a>
            </div>
        </body>
    )
}

export default Home