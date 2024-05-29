import React from 'react'
import Navbar from '../Components/Navbar'
import Foother from '../Components/Foother'
import Heroimg2 from '../Components/Heroimg2'
import Pricing from '../Components/Pricing'
import Work from '../Components/Work'
const Praject = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <Pricing/>
      <Foother/>
    </div>
  )
}

export default Praject
