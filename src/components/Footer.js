import React from 'react'

import "./FooterStyles.css"
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
            <div className='quicklinks'>
                    <ul className='nav-link'>           
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    {/* <li>
                        <Link to="/consultant">Consultancy</Link>
                    </li> */}
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    </ul>
            </div>

            <div className='headers'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}} />
                    <div>
                        <p>Al Ameen Center, Prince Majid Street, Jeddah 23232, KSA</p>
                    </div>
                </div>
                 <div className='phone'>
                    <BsFillTelephoneFill size={18} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}} />
                    <div>
                      <p>+966 50 538 7622</p>
                    </div>
                </div>
                 <div className='social'>
                    <FaMailBulk size={20} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}} />
                    <div>
                        <p>info@sevendegree.co</p>
                    </div>
                </div>
            </div>
            <div className='rights'>
                <p>Copyright © 2023 Seven Degree - All Rights Reserved.</p>
            </div>
        </div> 
        {/* <div className='title'>
                
                <div>
                    <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    
                </div>
        </div> */}
    </div>
    </>

  )
}

export default Footer