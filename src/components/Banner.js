import "../CSS Files/Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import me from "../assets/images/main/me.jpg";

/* Extra Packages */
import Textra from "react-textra";
import { Link } from "react-scroll";

export const Banner = () => {
  return (
    <section className='banner'>
      <div className='inner-banner'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <h2>Hello, my name is</h2>
              <h1>Ryan G. Howard</h1>
              <h2>
                <Textra
                  effect='downTop'
                  stopDuration={1500}
                  data={[
                    "Full Stack Developer",
                    "UI/UX Designer",
                    "Software Engineer",
                    "Web Developer",
                  ]}
                />
              </h2>
              <p>
                Welcome to my website! Thanks for stopping by. Over the past
                year I chose to make a career change and dove head first into
                the world of Web Development and Coding. I completed the Full
                Stack Web Development boot camp at Bloom Institute of Technology
                and loved every minute of it. This site is the culmination of my
                work up to this point. Enjoy!
              </p>
              <Link to='projects'>
                <button>
                  See More <ArrowRightCircle size={30} />
                </button>
              </Link>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <img src={me} alt='My Face' borderRadius='50%' />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
