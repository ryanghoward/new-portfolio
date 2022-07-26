import React, { useState } from "react";
import "../CSS Files/Navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import LinkedIn from "../assets/images/main/linkedin.svg";
import GitHub from "../assets/images/skills/github.png";
import Instagram from "../assets/images/main/instagram.svg";
import Resume from "../assets/images/main/Ryan G. Howard Resume 2022.pdf";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='header'>
      <Link to='home' smooth={true} duration={300}>
        <h1>RGH</h1>
      </Link>
      <ul className={nav ? "nav-menu active" : "nav-menu "}>
        <Link
          className='navbar-link'
          onClick={handleClick}
          to='home'
          smooth={true}
          duration={300}
        >
          Home
        </Link>
        <Link
          className='navbar-link'
          onClick={handleClick}
          to='skills'
          smooth={true}
          duration={300}
        >
          Skills
        </Link>
        <Link
          className='navbar-link'
          onClick={handleClick}
          to='projects'
          smooth={true}
          duration={300}
        >
          Projects
        </Link>
        <Link
          className='navbar-link'
          onClick={handleClick}
          to='contact'
          smooth={true}
          duration={300}
        >
          Contact
        </Link>
        <a
          className='navbar-link'
          onClick={handleClick}
          href={Resume}
          target='_blank'
          rel='noreferrer'
        >
          Resume
        </a>
      </ul>
      <div className='social-icons'>
        <a
          href='https://www.linkedin.com/in/ryangeorgehoward/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={LinkedIn} alt='LinkedIn' />
        </a>
        <a
          href='https://github.com/ryanghoward/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={GitHub} alt='GitHub' />
        </a>
        <a
          href='https://www.instagram.com/ryanghoward/'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Instagram} alt='Instagram' />
        </a>
      </div>
      <div className='hamburger' onClick={handleClick}>
        {nav ? (
          <FaTimes size={20} style={{ color: "white" }}></FaTimes>
        ) : (
          <FaBars size={20} style={{ color: "white" }}></FaBars>
        )}
      </div>
    </div>
  );
};
