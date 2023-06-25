import "./HeroImgStyle.css"

import React from 'react'

import IntroImg from "../assets/home.jpg"

import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">

        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>

        <div className="content">
            <p>Hi, I'm Kirti Nishad</p>
            <h1>MERN Stack Developer</h1>
            <div>
                <Link to="/project" className="btn">Project</Link>
                <Link to="/about" className="btn btn-light">About</Link>
            </div>
        </div>
        
    </div>
  )
}

export default HeroImg