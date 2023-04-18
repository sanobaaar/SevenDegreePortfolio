import "./HeroProjectStyles.css"

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ProjectHero from "../assets/projecthero.jpg"

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
        <h1>Milestones</h1>
        <h3>A curated display of our journey that shows the dedication and efforts put into our projects, delivering with complete efficiency, high quality and best production practices.</h3>

        
      </div>

    </div>
  
    </>
  );
}
}

export default HeroProject