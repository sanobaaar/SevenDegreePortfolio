import React from 'react'

import ReactPlayer from 'react-player';
import heroVideo from '../assets/herovid.mp4';
import IntroImg from "../assets/hero2.jpg"


import  "./HeroStyles.css"
import { Link } from 'react-router-dom';

const HeroVideo = () => {
  return (
    <>
    <div className='videohero'>
        <div className='videomask'>
      
          <ReactPlayer className='intro-vid'
              url={heroVideo}
              playing
              loop
              muted
              width="100%"
              height="100%"
          />
        </div>

       <div className="intromask">
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
  </>
  )
}

export default HeroVideo