import { React, useState } from 'react'
import "./NavbarStyles.css" 
import { FaBars, FaTimes } from "react-icons/fa"

import { Link } from 'react-router-dom'
import Logo from "../assets/Logo1.png"

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=1){
            setColor(true)
        }else{
            setColor(false)
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header" }>
        <div className='logo'>
        <Link to="/">
            <img src={Logo} alt="Logo"/> 
        </Link>
        </div>
        <ul className={click? "nav-menu active" : "nav-menu"}> 
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
            { click ? (
            <FaTimes size={20} style={{color:"#000"}}/>
            ) : (
            <FaBars size={20} style={{color:"#000"}}/>
            )
            }
    
        </div>
    </div>
  )
}

export default Navbar