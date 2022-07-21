import "../CSS Files/Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import LinkedIn from "../assets/images/main/linkedin.svg";
import GitHub from "../assets/images/skills/github.png";
import Instagram from "../assets/images/main/instagram.svg";
import Resume from "../assets/images/main/Ryan G. Howard Resume 2022.pdf";
import { Link } from "react-scroll";
// import { FaBars, FaTimes } from "react-icons/fa";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [activeLink, setActiveLink] = useState("home");
  // const [nav, setNav] = useState(false);
  // const handleClick = () => setNav(!nav);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <h1>RGH</h1> */}
        {/* <Navbar.Toggle onClick={handleClick} className='nav-icon'>
          {!nav ? <FaBars /> : <FaTimes />}
        </Navbar.Toggle> */}
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className={"home" ? "active navbar-link" : "navbar-link"}>
              <Link to='home' smooth={true} duration={300}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link className='navbar-link'>
              <Link to='skills' smooth={true} duration={300}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link className='navbar-link'>
              <Link to='projects' smooth={true} duration={300}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link href={Resume} target='_blank' className='navbar-link'>
              Resume
            </Nav.Link>
            <Nav.Link className='navbar-link'>
              <Link to='contact' smooth={true} duration={300}>
                Contact
              </Link>
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
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
            {/* <button className='vvd' onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
