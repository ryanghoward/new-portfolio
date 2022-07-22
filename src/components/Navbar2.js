import React, { useState } from "react";
import "../CSS Files/Navbar2.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import LinkedIn from "../assets/images/main/linkedin.svg";
import GitHub from "../assets/images/skills/github.png";
import Instagram from "../assets/images/main/instagram.svg";
import Resume from "../assets/images/main/Ryan G. Howard Resume 2022.pdf";

export const Navbar2 = () => {
  // const [color, setColor] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // const changeColor = () => {
  //   if (window.scrollY >= 100) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };

  // window.addEventListener("scroll", changeColor);

  return (
    <div className='header'>
      <Link to='/'>
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
        <Link
        // className='navbar-link'
        // href={Resume}
        // target='_blank'
        // rel='noreferrer'
        >
          <a
            className='navbar-link'
            href={Resume}
            target='_blank'
            rel='noreferrer'
          >
            Resume
          </a>
        </Link>
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
