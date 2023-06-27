import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer  from '../components/footer/Footer'
import SkillImg from '../components/skills/SkillImg'
import SkillCard from '../components/skills/SkillCard'

const skillSet = () => {
  return (
    <div>
        <Navbar/>
        <SkillImg/>
        <SkillCard/>
        <Footer/>
    </div>
  )
}

export default skillSet