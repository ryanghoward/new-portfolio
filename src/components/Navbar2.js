import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "../CSS Files/Navbar2.css";
import { Link } from "react-scroll";
import Resume from "../assets/images/main/Ryan G. Howard Resume 2022.pdf";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <IconContext.Provider value={{ color: "fff" }}>
      <div className='nav'>
        <div className='nav-container'>
          <a href='/' className='nav-logo' onClick={closeMobileMenu}>
            RGH
          </a>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='home' smooth={true} duration={500}>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='skills' smooth={true} duration={500}>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>
                  Skills
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='projects' smooth={true} duration={500}>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </a>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contact' smooth={true} duration={500}>
                <a href='/' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </a>
              </Link>
            </li>
            <a
              href={Resume}
              target='_blank'
              rel='noreferrer'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navbar;
