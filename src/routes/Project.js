import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProjectImg from '../components/project/ProjectImg'
import Footer from '../components/footer/Footer'
import WorkCard from '../components/project/WorkCard'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <ProjectImg/>
        <WorkCard/>
        <Footer/>
    </div>
  )
}

export default Project