import React from 'react'
import Navbar from './Navbar'
import BgImg from './BgImg'
import Footer from './Footer'
import { Route } from 'react-router-dom'
import About from './About'
import Project from './Project'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg">
        <BgImg />
      </div>
      <div className="about-container">
        <About />
      </div>
      <Project />
      <Footer />
      </div>
  )
}

export default Home
