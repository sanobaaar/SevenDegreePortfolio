import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroProject from '../components/HeroProject'
import ProjectGallery from '../components/ProjectGallery'
import ProjectCarousel from '../components/ProjectCarousel'

const Projects = () => {
  return (
    <div>
      <Navbar />
      {/* <HeroProject /> */}
      <ProjectCarousel/>
      <ProjectGallery />
      <Footer />
    </div>
  )
}

export default Projects