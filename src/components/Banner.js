import "../CSS Files/Banner.css";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import me from "../assets/images/main/me.jpg";
import { Link } from "react-scroll";

/* Extra Packages */
import { GlitchText } from "glitch-text";
import Textra from "react-textra";

export const Banner = () => {
  return (
    <section className='banner'>
      <div className='inner-banner'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <h2>Hello, my name is</h2>
              <h1>
                <GlitchText theme='purple' text={"Ryan G. Howard"} />
              </h1>
              <h3>I am a</h3>
              <h2>
                <Textra
                  effect='downTop'
                  stopDuration={1500}
                  data={[
                    "Web Developer",
                    "UI/UX Designer",
                    "Full Stack Developer",
                    "Techie",
                  ]}
                />
              </h2>
              <p>
                I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses, all
                the way up to large corporations. What could you accomplish if
                you had a software expert available at your fingertips? Let's
                find out! View my work and skills below.
              </p>
              <Link to='projects'>
                <button>
                  See More <ArrowRightCircle size={30} />
                </button>
              </Link>
            </Col>
            <Col xs={12} md={6} xl={4}>
              <img src={me} alt='Header' borderRadius='50%' />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
