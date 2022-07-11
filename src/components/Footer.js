import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/RGH2.PNG";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <img src={logo} alt='Logo' />
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/ryangeorgehoward/'
                target='_blank'
                alt='LinkedIn Logo'
              >
                <img src={FaLinkedin} alt='LinkedIn' />
              </a>
              <a
                href='https://github.com/ryanghoward'
                target='_blank'
                alt='Github'
              >
                <img src={FaGithub} alt='Icon' />
              </a>
              <a
                href='https://www.instagram.com/ryanghoward/'
                target='_blank'
                // alt='Instagram Logo'
              >
                <img src={FaInstagram} alt='Instagram' />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
