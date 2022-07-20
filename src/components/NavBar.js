import "../CSS Files/Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import LinkedIn from "../assets/images/main/linkedin.svg";
import GitHub from "../assets/images/skills/github.png";
import Instagram from "../assets/images/main/instagram.svg";
import Resume from "../assets/images/main/Ryan G. Howard Resume 2022.pdf";
import { Link } from "react-scroll";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand='lg' className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href='home'>
          {/* <img src={logo} alt='Logo' /> */}
        </Navbar.Brand>
        <h1>RGH</h1>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              href='home'
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              <Link to='home' smooth={true} duration={300}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link
              href='skills'
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              <Link to='skills' smooth={true} duration={300}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link
              href='Projects'
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              <Link to='projects' smooth={true} duration={300}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link
              href={Resume}
              target='_blank'
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Resume
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
            <button className='vvd' onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
