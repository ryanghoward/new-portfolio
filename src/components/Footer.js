import "../CSS Files/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import LinkedIn from "../assets/images/main/linkedin.svg";
import Instagram from "../assets/images/main/instagram.svg";
import GitHub from "../assets/images/skills/github.png";

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <Col size={12} sm={6}>
            <h1>RGH</h1>
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              <a
                href='https://www.linkedin.com/in/ryangeorgehoward/'
                target='_blank'
                rel='noreferrer'
              >
                <img src={LinkedIn} alt='LinkedIn' />
              </a>
              <a
                href='https://github.com/ryanghoward'
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
            <p>Copyright 2022 RGH. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
