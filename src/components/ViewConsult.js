import "./ViewConsultStyles.css"

import React from 'react'

import img1 from "../assets/consultants/freywille-removebg-preview.png"
import img2 from "../assets/consultants/breitling-removebg-preview.png"
import img3 from "../assets/consultants/charriol-removebg-preview.png"
import img4 from "../assets/consultants/alhussaini-removebg-preview.png"

import img5 from "../assets/brands-consult/PHOTO-2023-09-04-23-05-33 10.jpg"
import img6 from "../assets/brands-consult/PHOTO-2023-09-04-23-05-33 11.jpg"
import img7 from "../assets/brands-consult/PHOTO-2023-09-04-23-05-33 2.jpg"
import img8 from "../assets/brands-consult/PHOTO-2023-09-04-23-05-33 3.jpg"
import img9 from "../assets/brands-consult/PHOTO-2023-09-04-23-05-33 4.jpg"
import img10 from "../assets/brands-consult/PHOTO-2023-09-04-23-05-33 5.jpg"
import img11 from "../assets/brands-consult/PHOTO-2023-09-04-23-06-11 2.jpg"
import img12 from "../assets/brands-consult/PHOTO-2023-09-04-23-06-11.jpg"
import img13 from "../assets/brands-consult/PHOTO-2023-09-04-23-06-12.jpg"
import img14 from "../assets/brands-consult/PHOTO-2023-09-04-23-08-02.jpg"
import img15 from "../assets/brands-consult/PHOTO-2023-09-04-23-08-03.jpg"
import img16 from "../assets/brands-consult/PHOTO-2023-09-04-23-09-00.jpg"
import img17 from "../assets/brands-consult/PHOTO-2023-09-04-23-09-01 2.jpg"
import img18 from "../assets/brands-consult/PHOTO-2023-09-04-23-09-01 4.jpg"
import img19 from "../assets/brands-consult/PHOTO-2023-09-04-23-09-01.jpg"
import { Link } from "react-router-dom"


const ViewConsult = () => {
  return (
    <div className="consult-container">
        <div className="consult-heading">
            <h1>Project Management</h1>
        </div>
        <div className="consult-content">
            <h2>specific aspects that differ significantly from managing the construction of entire buildings in the formula of general contracting. Failure to account for these differences can have a huge impact on the success of the project.

The Project Manager, who manages the construction site, deals with several important elements, a much larger budget, has a team of specialized engineers at his or her disposal and works with key project participants – the investor, designer, general contractor, construction supervision and local authorities.</h2>
        </div>

        <div className="consult-brands">
            <img src={img1} alt="FreyWille"/>
            <img src={img2} alt="FreyWille"/>
            <img src={img3} alt="FreyWille"/>
            <img src={img4} alt="FreyWille"/>
        </div>

         <div className='herobtn'>
                <Link to="/contact" className='btn'>Get in Touch</Link>
            </div> 

        <div className="brand-img">
        <div className="scroll">
             <img src={img5} alt="FreyWille"/>
            <img src={img6} alt="FreyWille"/>
            <img src={img7} alt="FreyWille"/>
            <img src={img8} alt="FreyWille"/>
            <img src={img9} alt="FreyWille"/>
            <img src={img10} alt="FreyWille"/>
            <img src={img11} alt="FreyWille"/>
            <img src={img12} alt="FreyWille"/>
            <img src={img13} alt="FreyWille"/>
            <img src={img14} alt="FreyWille"/>
            <img src={img15} alt="FreyWille"/>
            <img src={img16} alt="FreyWille"/>
            <img src={img17} alt="FreyWille"/>
            <img src={img18} alt="FreyWille"/>
            <img src={img19} alt="FreyWille"/>

        </div>
        </div>

       
  
    </div>
  )
}

export default ViewConsult