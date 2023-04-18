import React from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ValuesCard from '../components/ValuesCard'
import ServiceCard from '../components/ServiceCard'
import HeroVideo from '../components/HeroVideo'
import ProjectView from '../components/ProjectView'


const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Hero/> */}
        <HeroVideo />
        <ServiceCard />
        <ValuesCard />
        <ProjectView />
        <Footer />
    </div>
  )
}

export default Home