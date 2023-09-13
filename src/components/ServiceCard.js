import React from 'react'

import "./ServiceCardStyles.css"

import { Link } from 'react-router-dom'

const ServiceCard = () => {
  return (
    <div className='service-wrapper'>
    <div className='service-slider'>
        
            <h1>Who Are We?</h1>
            <h2>TURNKEY | FIT OUT | MEP</h2>

            
            <h3>Seven Degree is a leading interior designing and contracting company in Saudi Arabia that handles Turnkey, FIT-OUT and MEP projects exceptionally. We specialize in store outlet designing, refurbishing, as well as providing top-notch contracting services to our clients. We pride ourselves on our attention to detail, reliability, and professionalism; committed to delivering outstanding customer service and building long-lasting relationships with our clients.</h3>
                {/* <br>
                </br> */}
             <h3>Trust us to bring your vision to life and create a space that is both beautiful and functional.</h3>
     </div>
        <div className="service-card-container">
            <div className="card-slider1">
                <h2>Design</h2>
                
                
            </div>
            <div className="card-slider2">
                <h2>Build</h2>
    
            </div>
            <div className="card-slider3">
                <h2> Renovate </h2>
        
            </div>
        </div>
        <div className='herobtn'>
                <Link to="./services" className='btn'>Know more about our services</Link>
            </div> 
    </div>
  )
}

export default ServiceCard