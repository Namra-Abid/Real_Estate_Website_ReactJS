import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <>
            <section className="hero-wrapper">
                <div className="innerWidth flexCenter paddings hero-container">
                    {/* left container */}
                    <div className="hero-left">
                        Left Container
                    </div>
                    {/* right container */}
                    <div className="flexCenter hero-right">
                        <div className="image-container">
                            <img src="./hero-image.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
