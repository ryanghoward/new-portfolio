import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import JavaScript from "../assets/images/skills/javascript.png";
import HTML from "../assets/images/skills/html.png";
import CSS from "../assets/images/skills/css.png";
import Node from "../assets/images/skills/node.png";
import Express from "../assets/images/skills/express.png";
import React from "../assets/images/skills/react.png";
import Redux from "../assets/images/skills/redux.png";
import Tailwind from "../assets/images/skills/tailwind.png";
import PostgreSQL from "../assets/images/skills/PostgreSQL.png";
import Heroku from "../assets/images/skills/heroku.svg";
import Vercel from "../assets/images/skills/vercel.svg";
import Bootstrap from "../assets/images/skills/bootstrap.png";
import Next from "../assets/images/skills/next.png";
import MUI from "../assets/images/skills/mui.png";
import Less from "../assets/images/skills/less.webp";
import Sass from "../assets/images/skills/sass.png";
import SC from "../assets/images/skills/styledcomponents.png";
import SQLite from "../assets/images/skills/SQLite.png";
import Docker from "../assets/images/skills/docker.webp";
import ESLint from "../assets/images/skills/ESLint.png";
import Postman from "../assets/images/skills/postman.png";
// import Trello from "../assets/images/skills/trello.png";
import colorSharp from "../assets/images/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 300 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>These are the technologies I use</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
                autoPlay={true}
                autoPlaySpeed={1000}
              >
                <div className='item'>
                  <img src={HTML} alt='' />
                  <h5>HTML</h5>
                </div>
                <div className='item'>
                  <img src={CSS} alt='' />
                  <h5>CSS</h5>
                </div>
                <div className='item'>
                  <img src={JavaScript} alt='' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src={Node} alt='' />
                  <h5>Node.js</h5>
                </div>
                <div className='item'>
                  <img src={Express} alt='' />
                  <h5>Express</h5>
                </div>
                <div className='item'>
                  <img src={React} alt='' />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <img src={Redux} alt='' />
                  <h5>Redux</h5>
                </div>
                <div className='item'>
                  <img src={Tailwind} alt='' />
                  <h5>Tailwind</h5>
                </div>
                <div className='item'>
                  <img src={PostgreSQL} alt='' />
                  <h5>PostgreSQL</h5>
                </div>
                <div className='item'>
                  <img src={Heroku} alt='' />
                  <h5>Heroku</h5>
                </div>
                <div className='item'>
                  <img src={Vercel} alt='' />
                  <h5>Vercel</h5>
                </div>
                <div className='item'>
                  <img src={Bootstrap} alt='' />
                  <h5>Bootstrap</h5>
                </div>
                <div className='item'>
                  <img src={Next} alt='' />
                  <h5>Next.js</h5>
                </div>
                <div className='item'>
                  <img src={MUI} alt='' />
                  <h5>MUI</h5>
                </div>
                <div className='item'>
                  <img src={Less} alt='' />
                  <h5>Less</h5>
                </div>
                <div className='item'>
                  <img src={Sass} alt='' />
                  <h5>Sass</h5>
                </div>
                <div className='item'>
                  <img src={SC} alt='' />
                  <h5>Styled Components</h5>
                </div>
                <div className='item'>
                  <img src={SQLite} alt='' />
                  <h5>SQLite</h5>
                </div>
                <div className='item'>
                  <img src={Docker} alt='' />
                  <h5>Docker</h5>
                </div>
                <div className='item'>
                  <img src={ESLint} alt='' />
                  <h5>ESLint</h5>
                </div>
                <div className='item'>
                  <img src={Postman} alt='' />
                  <h5>Postman</h5>
                </div>
                {/* <div className='item'>
                  <img src={Trello} alt='' />
                  <h5>Trello</h5>
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='' />
    </section>
  );
};
