import React from 'react';
import { useState } from 'react';
import './Project.css';
import mario from '../assets/mario.jpg'
import resume from '../assets/resume1.jpg'
import calculator from '../assets/calculator.jpg'
import Fade from 'react-reveal/Fade';


const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="projects">
        <Fade left>
          <div className="card" >
            <h3>Super Mario game using JS</h3>
            <img src={mario}></img>
            <p>Super Mario game is a traditional Mario experience built with HTML, CSS, and JavaScript. It includes all the classic features of the original game, providing a simple yet enjoyable gaming experience for players.A good beginner level project to ehance JavaScripts skills.
            </p>
            <div className='buttons'>
              <a href="https://github.com/sanghvirachna/SuperMario" className='btn' target="_blank">View</a>
            </div>
          </div>
        </Fade>
        <Fade>       <div className="card">
          <h3>Resume Builder using Java</h3>
          <img src={resume}></img>
          <p>Resume Builder is a project designed to solve the common issue of resume formatting. It simplifies the process by taking user inputs and generating a professional, job-ready resume. With Resume Builder, creating an impressive resume becomes effortless and efficient.
          </p>
          <div className='buttons'>
            <a href="https://github.com/sanghvirachna/ScientificCalculator.git" target="_blank" className='btn'>View</a>
          </div>
        </div>
        </Fade>
        <Fade right>
          <div className="card">
            <h3>Scientific Calculator using Java</h3>
            <img src={calculator}></img>
            <p>A Calculator application  with three modes (Standard, Scientific, and Base-N) and incorporating light and dark modes boosted my Java skills. This beginner-level project ehanced my skills, while also showcasing my ability to develop practical and functional applications.

            </p>
            <div className='buttons'>
              <a href="https://github.com/sanghvirachna/RESUME_BUILDER.git" target="_blank" className='btn'>View</a>
            </div>
          </div>
        </Fade>

      </div>
    </>
  );
}

export default ProjectCard;
