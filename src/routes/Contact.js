import React from 'react'
import Navbar from '../Components/Navbar'
import Foother from '../Components/Foother'
import Heroimg2 from '../Components/Heroimg2'
import Form from '../Components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Foother/>
    </div>
  )
}

export default Contact
