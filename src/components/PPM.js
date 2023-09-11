import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "../assets/ppm/MS-Beauty-removebg-preview.png"
import img2 from "../assets/ppm/M_SCafe-removebg-preview.png"
import img3 from "../assets/ppm/marksandspencer-removebg-preview.png"
import img4 from "../assets/ppm/b_q-removebg-preview.png"
import img5 from "../assets/ppm/boss-removebg-preview.png"
import img6 from "../assets/ppm/eggo-removebg-preview.png"
import img7 from "../assets/ppm/sandro-removebg-preview.png"
import img8 from "../assets/ppm/tedbaker-removebg-preview.png"
import img9 from "../assets/ppm/watsons-removebg-preview.png"



import {AiOutlineArrowRight} from "react-icons/ai"

import pin from "../assets/location-pin.png"
import store from "../assets/store.png"


import "./PPMStyles.css"


const ProjectView = () => {

  return (
    <div className='ppm-hero'>
    <div className='ppm-wrapper'>
        
            <h1>PPM & Active Maintenance Services</h1>

            
            <h3> <img src={pin} style={{width:'35px'}} alt="location-pin"/> Jeddah, Riyadh, Dammam</h3>

            <h3> <img src={store} style={{width:'35px'}} alt="store"/> Number of Stores - 37</h3>

    </div>

    <div className='project-ppm-wrapper'>
     
        <div className='active-ppm'>
            <img className='img1' src={img1} alt='project-img'></img>
            <img className='img2' src={img2} alt='project-img'></img>
            <img className='img3' src={img3} alt='project-img'></img>
            <img className='img4' src={img4} alt='project-img'></img>
            <img className='img5' src={img5} alt='project-img'></img>
            <img className='img6' src={img6} alt='project-img'></img>
            <img className='img7' src={img7} alt='project-img'></img>
            <img className='img8' src={img8} alt='project-img'></img>
            <img className='img9' src={img9} alt='project-img'></img>
            

        </div>
    </div>
</div>

  )

}

export default ProjectView;