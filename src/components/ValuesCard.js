import "./ValuesCardStyles.css"

import { VscWorkspaceTrusted } from "react-icons/vsc"
import {GiSandsOfTime,GiTeamIdea} from "react-icons/gi"

import React from 'react'

const ValuesCard = () => {
  return (
    <div className="values">
        <div className="heading">
            <h1>What We Believe In?</h1>
            <h2>Driven by Design & Powered by Precision</h2>
        </div>
        <div className="value-card-container">
            <div className="value-card">
                <h3> - Reliability - </h3>
                <VscWorkspaceTrusted size={40} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}}></VscWorkspaceTrusted>
                {/* <span className="bar"></span> */}
                <p className="core">We take time building strong, consistent relationships with every client that walks through our door. By truly improving client experience, we have them coming back time and time again.</p>
            </div>
            <div className="value-card">
                <h3> - Project Delivery - </h3>
                <GiSandsOfTime size={40} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}}></GiSandsOfTime>
                {/* <span className="bar"></span> */}
                <p className="core">We build on high standards. Focusing consistently on our policy of excellence, assuring quality for reliable operations. We are committed to providing a complete solution for your needs.</p>
            </div>
            <div className="value-card">
                <h3> - Efficiency - </h3>
                <GiTeamIdea size={40} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}}></GiTeamIdea>
                {/* <span className="bar"></span> */}
                <p className="core">Our in-house command of professional and skillful management, with a network of specialized experts, we create a team providing creative solutions along with high-value, on-time and on-budget.</p>
            </div>
        </div>
    </div>
  )
}

export default ValuesCard