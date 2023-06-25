import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import { Emojione } from 'react-emoji-render';
import './BgImg.css';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'


const BgImg = () => {  
  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
 
  return (
    <>
    
    <div className='bg'>
        <ParticleBackground />
      

      <div className="content">
          <div data-aos="fade-up">
          Hii<Emojione text="👋" className="wave-emoji" />
          </div>
        <h1 data-aos="fade-up">I am <span style={{ color: "#f300b4" }}>Rachna Sanghvi</span></h1>
        <span className="input-cursor" data-aos="fade-up">
          <Typewriter className="typewriter" 
            words={["{Programmer}","<Developer/>","Learner"]}
            loop={100}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />          
          </span><br></br>
        <div data-aos="fade-up">
          <Link to="/projects" className='btnlight'   >Projects</Link>
          <Link to="/contact" className='btnlight' data-aos="fade-up">Contact</Link>
        </div>
        </div>
    </div>
    </>
  );
};

export default BgImg;
