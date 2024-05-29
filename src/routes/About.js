import React from 'react'
import Navbar from '../Components/Navbar'
import Foother from '../Components/Foother'
import Heroimg2 from '../Components/Heroimg2'
import Aboutcontent from '../Components/Aboutcontent'
const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="ABOUT" text="I am a friendly fullstack developer"/>
      <Aboutcontent/>
      <Foother/>
    </div>
  )
}

export default About
