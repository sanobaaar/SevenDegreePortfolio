import React from 'react'
import { Link } from 'react-router-dom'

import img1 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.27 PM.jpeg"
import img2 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.28 PM (1).jpeg"
import img3 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.28 PM (2).jpeg"
import img4 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.28 PM.jpeg"
import img5 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.29 PM (1).jpeg"
import img6 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.29 PM (2).jpeg"
import img7 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.29 PM (3).jpeg"
import img8 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.29 PM.jpeg"
import img9 from "../assets/projects/kitchen/WhatsApp Image 2023-04-16 at 8.01.30 PM.jpeg"



const KitchenGallery = () => {
  return (
    <>
        <div className="types">
         <div className='herobtn'>
                <Link href="./projects" className='btn'>Retail</Link>
                {/* <Link to="./cloudkitchen" className='btn'>Cloud Kitchen</Link>
                <Link to="./industrial" className='btn'>Industrial</Link> */}
            </div>
        </div>

        <section className='project-section'>

     <div className='project-name'>
            
        <div className='img-projects'>
            <img className='img2' src={img1} alt='project-img'></img>
            <img className='img1' src={img2} alt='project-img'></img>
            <img className='img2' src={img3} alt='project-img'></img>
            <img className='img2' src={img4} alt='project-img'></img>
            <img className='img2' src={img5} alt='project-img'></img>
            {/* <img className='img2' src={img6} alt='project-img'></img> */}
            {/* <img className='img2' src={img7} alt='project-img'></img> */}
            {/* <img className='img2' src={img8} alt='project-img'></img> */}
            <img className='img2' src={img9} alt='project-img'></img>


    </div>
    </div>
    </section>
    </>
  )
}

export default KitchenGallery