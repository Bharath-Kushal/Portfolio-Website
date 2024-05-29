import React from 'react'
import "./Heroimg.css" ;
import Introimg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'> 
            <img className='into-img' src={Introimg} alt="IntroImg"></img>
        </div>
        <div className='content'>
            <p>HI, This  is Pavan Adithya</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
