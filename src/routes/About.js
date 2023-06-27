import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer  from '../components/footer/Footer'
import AboutImg from '../components/about/AboutImg'
import AboutContent from '../components/about/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutImg/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About