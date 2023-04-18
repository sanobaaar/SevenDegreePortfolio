import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "../assets/burgerking.jpeg"
import img2 from "../assets/aldo.jpeg"
import img3 from "../assets/kiko.png"
import img4 from "../assets/lcwaikiki.png"
import img5 from "../assets/lululemon.png"
import img6 from "../assets/r&b.jpeg"
import img7 from "../assets/voxcinemas.png"
import img8 from "../assets/sunglasshut.jpeg"
import img9 from "../assets/swisscorner.jpeg"
import img10 from "../assets/alpeh.svg"
import img11 from "../assets/mango.png"
import img12 from "../assets/reefi.jpeg"
import img13 from "../assets/services/stradivarious.png"
import img14 from "../assets/services/cloudkitchens.png"

import {AiOutlineArrowRight} from "react-icons/ai"

import "./ProjectViewStyles.css"


const ProjectView = () => {

  return (
    <div className='project-wrapper'>
        
            <h1>Collaborations</h1>
            
     
        <div className='collaborations'>
            <img className='img1' src={img1} alt='project-img'></img>
            <img className='img2' src={img2} alt='project-img'></img>
            <img className='img3' src={img3} alt='project-img'></img>
            <img className='img4' src={img4} alt='project-img'></img>
            <img className='img5' src={img5} alt='project-img'></img>
            <img className='img6' src={img6} alt='project-img'></img>
            <img className='img7' src={img7} alt='project-img'></img>
            <img className='img8' src={img8} alt='project-img'></img>
            <img className='img9' src={img9} alt='project-img'></img>
            <img className='img10' src={img10} alt='project-img'></img>
            <img className='img11' src={img11} alt='project-img'></img>
            <img className='img12' src={img12} alt='project-img'></img>
            <img className='img13' src={img13} alt='project-img'></img>
            <img className='img14' src={img14} alt='project-img'></img>


             <div className='herobtn'>
                <Link to="./projects" className='btn'>Take a look!</Link>
            </div> 

        </div>
    </div>
  )
}

export default ProjectView;