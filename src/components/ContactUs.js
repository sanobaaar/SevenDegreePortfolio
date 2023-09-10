import React from 'react'

import { Link } from 'react-router-dom'

import {FaHome, FaPhone, FaMailBulk} from "react-icons/fa"

import {VscWorkspaceTrusted} from "react-icons/vsc"

import IntroImg from "../assets/Logo.png"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./ContactUsStyles.css"

const ContactUs = () => {

    const showToastMessage = () => {
        toast.success('Your query has been sent!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
  return (
<>

    <div className='contact-wrapper'>
    <div className='contact-slider'>
        <h1>Our Company</h1>
        <h3>Seven Degree is a contracting company is a leader in the construction and interior design industry in Saudi Arabia. We specialize in store outlet construction, as well as providing top-notch contracting services to our clients. Our team of industry experts has over years of experience and excellence, delivering high-quality results for our clients every time.</h3>
        <br></br>
        <h3>We pride ourselves on our attention to detail, reliability, and professionalism. We are committed to delivering outstanding customer service and building long-lasting relationships with our clients. Trust us to bring your vision to life, and create a space that is both beautiful and functional.</h3>
    </div>

    <div className="card-container">
            <div className="card">
                <h3> - VISION - </h3>
                {/* <span className="bar"></span> */}
                <p className="core">To be the leading contracting company in Saudi Arabia, providing exceptional interior design, FIT-OUT and MEP services to our clients and setting the standard for excellence in our turnkey industry.</p>
            </div>

            <div className="card">
                <h3> - MISSION - </h3>
                {/* <span className="bar"></span> */}
                <p className="core">Our mission is to deliver exceptional value and quality to our clients through our expertise in store outlet construction, interior designing, and contracting services with efficient budget and optimum delivery. </p>
            </div>
    </div>

    <hr></hr>

    <br></br>

    <br></br>

     <h1>Reach out to us!</h1>

    <div className="getintouch">
         
        <div className="contactcard">
            <h1>Head Office</h1>
            <div className='location'>
                    <FaHome size={30} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}} />
                    <div>
                        <p>Al Ameen Center, Prince Majid Street, Bani Malik P.O: 8657, Jeddah 23232, KSA</p>
                    </div>
                </div>
                 <div className='phone'>
                    <FaPhone size={18} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}} />
                    <div>
                        <p>+966 50 538 7622</p>
                    </div>
                </div>
                 <div className='location'>
                    <FaMailBulk size={20} style={{color:"#000", marginRight:"1rem", marginLeft:"0"}} />
                    <div>
                        <p>info@sevendegree.co</p>
                    </div>
                </div>
        </div>

        {/* <div className="contactcard">
            <a href="mailto:email@address.com">Click to email</a>
        </div> */}

        <div className="form-email">
            <form action="https://formsubmit.co/info@sevendegree.co" method="POST">
                <input type="hidden" name="_captcha" value="false"/>
                <input type="hidden" name="_subject" value="New Enquiry!"/>
                {/* <input type="hidden" name="_next" value="https://sevendegree.co/"/> */}
                <label>Name</label>
                <input type="text" name="name" placeholder='Enter name' required/>
                <label>Email</label>
                <input type="email" name="email" placeholder='Enter e-mail address' required/>
                <label>Message</label>
                <textarea name="message" placeholder='Send us your message!' required/>
                <button onClick={showToastMessage} type="submit">Send</button>
                <ToastContainer/>
            </form>
        </div>

    </div>

     
</div>
</>

  )
}

export default ContactUs