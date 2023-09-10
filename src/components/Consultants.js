import "./HeroProjectStyles.css"

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ProjectHero from "../assets/consultants/consultancy.jpg"

class HeroProject extends Component {
    render() {
  return (
    <>
    <div className="project-hero">
      <img className='project-img' src={ProjectHero} alt="hero" />
      <div className="project-mask">
        <img className='project-img-mob' src={ProjectHero} alt="hero" />
      </div>
      <div className="project-heading">
        <h1 style={{color:'#d01e1e'}}>Project Management & Consultancy</h1>
        <h3>An unmatched experience of our capability and knowledge that delivers top-notch projects. Professionals with years of experience quantifying market research, honest feedbacks that will help your company save costs and deliver results.</h3>

         <div className='herobtn' style={{marginTop:'4rem'}}>
                <Link to="./consultant" className='btn'>Learn More</Link>
            </div> 
      </div>

      

    </div>
  
    </>
  );
}
}

export default HeroProject