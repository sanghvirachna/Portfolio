import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <div className='footer'>
            <Fade left>
                <p>Get in Touch!!😄</p>
            </Fade>
            <div className='footer-icons'>
                <Zoom left>
                    <div className="icon">
                        <a href="mailto:rachnasanghvi123@gmail.com" ><FaMailBulk size={40} style={{ color: "#fff", marginRight: "2rem" }}></FaMailBulk>
                        </a>                </div>
                </Zoom>
                <Zoom>
                    <div className="icon">
                        <a href="https://github.com/sanghvirachna" target="_blank"><FaGithub size={40} style={{ color: "#fff", marginRight: "2rem" }}></FaGithub>
                        </a>                </div>
                </Zoom>
                <Zoom>
                    <div className="icon">
                        <FaTwitter size={40} style={{ color: "#fff", marginRight: "2rem" }}></FaTwitter>
                    </div>
                </Zoom>
                <Zoom right>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/rachna-sanghvi-2887401a1" target='_blank'><FaLinkedin size={40} style={{ color: "#fff", marginRight: "2rem" }}></FaLinkedin></a>
                    </div>
                </Zoom>
            </div>

            <br></br>
            <br></br>
            <br></br>

        </div>
    )
}

export default Footer
