import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background"></div>
            <img src="https://avatars.githubusercontent.com/u/37356545?v=4" alt="profile" className="picture" />
            <h1 className="name">Antônio Víctor Basilio</h1>
            <h2 className="description">Front-end Developer</h2>
        </section>
    )
}

export default Hero
