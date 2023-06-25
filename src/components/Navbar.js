import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const [color,setColor]=useState(false);
    const changeColor = ()=>{
        if(window.scrollY>= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    }
    window.addEventListener('scroll',changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
              <NavLink to="/">
              <h1 className="rachna">rachna</h1>
</NavLink>            <ul className={click ? " nav-menu active" : "nav-menu"}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/project">Project</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
               <FaTimes size={20} style={{ color: "#fff" }} />
                ):  (
                <FaBars size={20} style={{ color: "#fff" }} />
                )
                }
            </div>
        </div>
    )
}

export default Navbar
