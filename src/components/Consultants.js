import "./HeroProjectStyles.css"

import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import ProjectHero from "../assets/consultants/consultancy.jpg"

import img1 from "../assets/consultants/resource.jpg"
import img2 from "../assets/consultants/logistics.jpg"
import img3 from "../assets/consultants/tenant.jpg"
import img4 from "../assets/consultants/fastforward.png"

import { Card, CardGroup } from "react-bootstrap"
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


      
      <div className="resource-planning"><img src={img4} style={{width:'20px', color:'red'}} alt="arrow"/> <h2 style={{color : '#d01e1e'}}>Resource Planning</h2></div>
      <div className="resource-planning"><img src={img4} style={{width:'20px', color:'red'}} alt="arrow"/> <h2 style={{color : '#d01e1e'}}>Supply Logistics</h2></div>
      <div className="resource-planning"><img src={img4} style={{width:'20px', color:'red'}} alt="arrow"/> <h2 style={{color : '#d01e1e'}}>Contact with Tenants</h2></div>
      


      {/* <CardGroup className='card-group-consult'>
      <Card className='consult-card'>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Resource Planning</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='consult-card'>
    <Card.Img variant="top" src={img2} />
        <Card.Body>
          <Card.Title>Supply Logistics</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='consult-card'>
        <Card.Img variant="top" src={img3} />
        <Card.Body>
          <Card.Title>Contact with Tenants</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup> */}

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