import React from 'react'

import "./SliderServiceStyles.css"

import img1 from "../assets/hero2.jpg"

import img2 from "../assets/services/pexels-mike-van-schoonderwalt-5511097.jpg"
import img3 from "../assets/services/pexels-ivan-babydov-7788508.jpg"
import img4 from "../assets/services/floorwork.jpeg"
import img5 from "../assets/services/pexels-expect-best-323781.jpg"
import img6 from "../assets/services/pexels-anamul-rezwan-1145434.jpg"
import img7 from "../assets/services/pexels-rene-asmussen-3990359.jpg"
import img14 from "../assets/services/cladding.jpeg"
import img15 from "../assets/services/finishes.jpeg"


import img8 from "../assets/services/hvacdesign.jpeg"
import img9 from "../assets/services/electricaldesign.jpeg"
import img10 from "../assets/services/conduits.jpeg"
import img11 from "../assets/services/lightfitting.jpeg"
import img12 from "../assets/services/fireandsafety.jpeg"
import img13 from "../assets/services/dbdressing.jpeg"
import img16 from "../assets/services/hvacsystem.jpeg"
import img17 from "../assets/services/lowcurrent.jpeg"






import { AiFillShop, AiOutlineHome } from "react-icons/ai"
import { FaHotel } from "react-icons/fa"
import { MdFastfood } from "react-icons/md"
import { ImOffice } from "react-icons/im"
import { GiFactory } from "react-icons/gi"



const SliderServices = () => {
  return (
  <div className='slider-hero'>
      
        <h1>Our Services</h1>
      
      <div className='service-content'>
        <p>Seven Degree has accomplished a vast range of interior designing, fit-out and turnkey projects that are diverse in nature. They include the support building of an entire structure and spaces and installation of critical systems that can be ready to operate, created with budget finishes. Such versatile experience in project execution of distinct scale has already made us the ultimate choice for business groups within KSA having unique quality and greater design and manufacturing interests.</p>
      </div>


       <div className='services'>
        <ul>
          <li><AiFillShop size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></AiFillShop>Retail</li>
          {/* <AiFillShop size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></AiFillShop><li>Retail</li> */}
          <li><FaHotel size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></FaHotel>Hospitality</li>
        
          <li><MdFastfood size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></MdFastfood>Food & Beverage</li>
          
          <li><AiOutlineHome size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></AiOutlineHome>Residential</li>

          <li><ImOffice size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></ImOffice>Commercial</li>
         
          <li><GiFactory size={25} style={{color:"#000", marginRight:"1rem", marginLeft:"1rem"}}></GiFactory>Industrial</li>
          
        </ul>
      </div>

      {/* <div className='buffer'></div> */}

      <div className='fits'>
        <h1 className="fit-title">FIT - OUT</h1>
        <h3 className="fit-title">With time and efficiency of our team, we have catered to create occupational spaces that make the interior space functional. From designing to constructing, furnishing to decorating. We have substantially developed spaces that include installation of ceilings, floors, partitions, wiring and much more to transform facilties for their best efficiency. </h3>
        <div className='works'>
          
          <div class="container">
          <img src={img2} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Civil Work</div>
            </div>
          </div>

          <div class="container">
          <img src={img7} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Partition and Panelling</div>
            </div>
          </div>

          <div class="container">
          <img src={img3} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Gypsum Work</div>
            </div>
          </div>

          <div class="container">
          <img src={img6} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Steel and Metal</div>
            </div>
          </div>

          <div class="container">
          <img src={img4} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Floor Work</div>
            </div>
          </div>

          <div class="container">
          <img src={img5} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Glass & Wood</div>
            </div>
          </div>

          <div class="container">
          <img src={img14} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Special Cladding</div>
            </div>
          </div>

          <div class="container">
          <img src={img15} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Finishes & Solid</div>
            </div>
          </div>

          
        </div>
      </div>
    

      
    {/* <div className='buffer'></div> */}

    <div className="mep">
 
        <h1 className="mep-title">Mechanical | Electrical | Plumbing </h1>
        <h3 className="mep-title">After careful planning by our engineers; electrical, mechanical and plumbing requirements are implemented to complete the process of designing and completing interior spaces. We provide high quality of installation and inclusion of these services to enhance the most critical aspects of any construction site. </h3>
  
    <div className="works">
        

        <div class="container">
          <img src={img8} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">HVAC Design</div>
            </div>
          </div>

           <div class="container">
          <img src={img16} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">HVAC System</div>
            </div>
          </div>

          <div class="container">
          <img src={img9} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Electrical Design</div>
            </div>
          </div>

          <div class="container">
          <img src={img10} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Conduits & Wiring</div>
            </div>
          </div>

          <div class="container">
          <img src={img11} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Light Fitting Supply & Installation</div>
            </div>
          </div>

          <div class="container">
          <img src={img12} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Fire & Safety</div>
            </div>
          </div>

          <div class="container">
          <img src={img13} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">DB Dressing</div>
            </div>
          </div>

           <div class="container">
          <img src={img17} alt="Avatar" class="image" width={"100%"}/>
            <div class="middle">
            <div class="text">Low Current Upgrade</div>
            </div>
          </div>
      </div>
    </div>

      


  </div>
  )
}

export default SliderServices