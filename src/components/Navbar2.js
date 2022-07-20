import React from "react";
import logo from "../assets/favicon.ico";
import "../CSS Files/Navbar2.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

const Navbar2 = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Navbar.Brand>
          {/* <img src={logo} width='5px' height='5px' /> */}
          RGH
        </Navbar.Brand>

        <Nav>
          <Nav.Link href='products'>Products</Nav.Link>
          <Nav.Link href='blog'>Blog</Nav.Link>
          <Nav.Link href='about-us'>About Us</Nav.Link>
          <Nav.Link href='Contact Us'>Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      {/* <div className='content'>This is content.</div> */}
    </div>
  );
};

export default Navbar2;
