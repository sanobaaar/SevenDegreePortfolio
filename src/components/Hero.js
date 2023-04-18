import React from 'react'

import "./HeroStyles.css"
import IntroImg from "../assets/hero2.jpg"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt="hero" />
        </div>
        <div className='content'>
            <h1>Solid foundations for a stronger future</h1>
            <div className='herobtn'>
                <Link to="./projects" className='btn'>Projects</Link>
                <Link to="./contact" className='btn'>Contact</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Hero