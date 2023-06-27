import "./FooterStyle.css"

import React from 'react'
import  { FaHome, FaMailBulk, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <p>
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        Ayodhya, Uttar Pradesh
                    </p>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        kirtinishad18799@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <div className="social">

                    <a href="https://www.linkedin.com/in/kirti-nishad-833a58219/" target="_blank" rel="noreferrer">
                        <FaLinkedin size={20} style={{color: "#fff", marginRight: "1rem"}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer