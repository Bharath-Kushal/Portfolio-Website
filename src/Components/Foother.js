import "./footerstyles.css"
import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk,FaFacebook,FaTwitter} from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa";

const Foother = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                   <div className="location" style={{display:"flex"}}>
                    <h4>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem",maxWidth:"50px"}} />
                    Visakhaptnam,AndhraPradesh
                    </h4>
                  
                   </div>
       
                <div className="phone"style={{display:"flex"}}> 
                   <h4> <FaPhoneAlt size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 8106544119</h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                            bharathkushal938@gmail.com  
                    </h4>
                </div>
                </div>
                <div className="right">
                    <h4>About  the company</h4>
                    <p>This is me Bharath Kushal,an enthusiastic webdeveloper. I enjoy discussing new Projects and design  challenges.</p>
                    <div className="social">
                    <FaFacebook href=""size={30} style=
                    {{color:"#fff",marginRight:"2rem",cursor:"pointer"}}/>
                    <FaTwitter size={30} style=
                    {{color:"#fff",marginRight:"2rem",cursor:"pointer"}}/>
                      <a href="https://linkedin.com/in/madduru-bharath-kushal-b521ab326"> <FaLinkedin size={30} style=
                    {{color:"#fff",marginRight:"2rem",cursor:"pointer"}}/></a>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Foother
