import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ViewConsult from '../components/ViewConsult'
import ConsultCard from '../components/ConsultCards'
import Form from '../components/Form'


const CloudKitchen = () => {
  return (
    <div>
        <Navbar/>
        <ViewConsult />
        <ConsultCard />
        <Footer/>
    </div>
  )
}

export default CloudKitchen