import "./Navbarstyle.css"


import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from 'react'
const Navbar = () => {
    const [click,setclick]=useState(false);

    const handleclick=()=> setclick(!click);
    const [color,setcolor]=useState(false);
    const changecolor=()=>{
        if(window.scrollY>=100){
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    };
    window.addEventListener("scroll",changecolor);
  return (
    <div className={color?"header header-bg":"header"}>
      <Link  to='/'>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
        <Link to='/' className="pp1">Home</Link>
        </li>
        <li>
        <Link to='/about'className="pp2">About</Link> 
            </li>
            <li>
        <Link to='/contact'className="pp3">Contact</Link>
            </li>
            <li>
            <Link to='/project'className="pp4">Project</Link>
            </li>
      </ul>
      <div className="hamburger"onClick={handleclick}>
        {click?<FaTimes size={20} style={{color:"#fff"}}></FaTimes>:<FaBars size={20} style={{color:"#fff"}}/>}


      </div>
    </div>
  )
}

export default Navbar
