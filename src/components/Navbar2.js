import React, { useState } from "react";
import "../CSS Files/Navbar2.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import LinkedIn from "../assets/images/main/linkedin.svg";
import GitHub from "../assets/images/skills/github.png";
import Instagram from "../assets/images/main/instagram.svg";
import Resume from "../assets/images/main/Ryan G. Howard Resume 2022.pdf";

function Navbar2() {
  const [color, setColor] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to='/'>
        <h1>RGH</h1>
      </Link>
      <ul className={nav ? "nav-menu active" : "nav-menu "}>
        <a>
          <Link to='home' smooth={true} duration={300}>
            Home
          </Link>
          <Link to='skills' smooth={true} duration={300}>
            Skills
          </Link>
          <Link to='projects' smooth={true} duration={300}>
            Projects
          </Link>
          <Link to='contact' smooth={true} duration={300}>
            Contact
          </Link>
          <Link href={Resume} target='_blank' rel='noreferrer'>
            Resume
          </Link>
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
}

export default Navbar2;
