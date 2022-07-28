import "../CSS Files/Contact.css";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MeAndJasper from "../assets/images/main/Jasper.png";

export const Contact = () => {
  const initFormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(initFormDetails);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className='contact' id='contact'>
      <Container>
        <Row>
          <Col md={5}>
            <img src={MeAndJasper} alt='Contact Us'></img>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <p>
              Shoot me an email at <i>ryghoward@gmail.com</i> or submit the form
              below
            </p>
            <form
              method='POST'
              action='https://getform.io/f/99fe3662-cb99-4771-8073-1a7bd0f92f96'
            >
              <Row>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.firstName}
                    name='first'
                    placeholder='First Name'
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='text'
                    value={formDetails.lastName}
                    name='last'
                    placeholder='Last Name'
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='email'
                    value={formDetails.email}
                    name='email'
                    placeholder='Email'
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className='px-1'>
                  <input
                    type='tel'
                    value={formDetails.phone}
                    name='phone'
                    placeholder='Phone Number'
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row='6'
                    value={formDetails.message}
                    name='message'
                    placeholder='Message'
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type='submit'>
                    <span>Send</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
