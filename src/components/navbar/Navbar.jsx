import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";


const Navbar = () => {
  return (
    <>
    <nav class="navbar">
        <div class="logo">
            <img src="src/assets/logo bs.webp" alt=""/>
        </div>

        <ul>
            <li>
               <Link to='/'><IoIosHome />Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'><IoMdContact />Contact</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
        </ul>
        <button class="sign-up">Sign up</button>
    </nav>
    </>
  )
}

export default Navbar
