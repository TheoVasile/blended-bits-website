import React from 'react'
import './Home.css'
import Navbar from "./components/navbar/Navbar"

function Home() {
    return (
        <body>
            <div class="hero-bg">
                <Navbar/>
                <h1>Take your 3D renders to<br></br> the next level</h1>
                <p>3D assets for any scene</p>
            </div>
            <div class="parallax">
                <section class="info">
                    <h2>Blended Bits provides the most expansive collection of professional-grade assets for any scene</h2>
                    <h2>Our focus is on letting 3D artists unleash their full creativity without the hassle of creating secondary assets</h2>
                </section>
            </div>
            <div class="comparison">
                <section class="advertisment">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
                </section>
            </div>
            <div class="collections">
                <section class="title">
                    <h1>OUR MOST POPULAR COLLECTIONS</h1>
                    <p>Lorem ipsum</p>
                </section>
            </div>
        </body>
    )
}

export default Home