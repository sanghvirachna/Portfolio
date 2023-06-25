import React from 'react'
import ProjectCard from './ProjectCard'
import './Project.css'
import Fade from 'react-reveal/Fade'
import Footer from './Footer'
const Project = () => {
  
  return (
    <div>
      <div className="Projects">
      <Fade left>        
        <p>Projects</p>
        </Fade>
        <div className="projects">
           <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default Project
