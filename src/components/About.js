import React from 'react';
import './About.css';
import Programmer from '../assets/bighead.svg';
import { DiReact, DiHtml5, DiJava, DiPython, DiCss3, DiJavascript1 } from 'react-icons/di';
import { Icon } from '@iconify/react';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'


const About = () => {
  return (
    <>
      <div className="about">
        <Fade left>        
        <p >About Me</p>
        </Fade>
        <div className="sections">
          <div className="data">
            <p>
              Hello! 🙋 I'm a  programmer proficient in Java as my core language. I have built several projects using Java and continuously enhance my skills in this language. Additionally, I am actively involved in web development👩‍💻, constantly learning and creating new things. I am passionate about learning new things and still learning everyday.
            </p>
          </div>
          <div className="image">
            <Zoom>
              <img src={Programmer} alt="Programmer" />
            </Zoom>
          </div>
        </div>
        <div className="skills">
          <h1>
            Professional <span style={{ color: '#f300b4' }}>SkillsSet</span>
          </h1>
          <div className="skill">
            <div className="icon-container">
              <DiReact size={100} color="black" />
            </div>
            <div className="icon-container">
              <DiHtml5 size={100} color="black" />
            </div>
            <div className="icon-container">
              <DiJava size={100} color="black" />
            </div>
            <div className="icon-container">
              <DiPython size={100} color="black" />
            </div>
            <div className="icon-container">
              <DiJavascript1 size={100} color="black" />
            </div>
            <div className="icon-container">
              <DiCss3 size={100} color="black" />
            </div>

            <div className="icon-container">
              <Icon icon="devicon-plain:arduino-wordmark" style={{ fontSize: '100px' }} />
            </div>

            <div className="icon-container">
              <Icon icon="cib:c" style={{ fontSize: '100px' }} />
            </div>
            <div className="icon-container">
              <Icon icon="mdi:language-cpp" style={{ fontSize: '100px' }} />
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default About;
