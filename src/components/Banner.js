import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import Astronaut from "../assets/images/astronaut.svg";
import me from "../assets/images/me.jpg";
import TypeAnimation from "react-type-animation";

export const Banner = () => {
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            {/* <span className='tagline'>
              Hello! I'm Ryan, welcome to my portfolio!
            </span> */}
            {/* <h1>
              Hello, my name is <br /> Ryan G. Howard <br /> and I am a:
            </h1> */}
            <h2>Hello, my name is</h2>
            <h1>Ryan G. Howard</h1>
            {/* <h4>I am a</h4> */}
            <TypeAnimation
              wrapper='h2'
              cursor={true}
              repeat={Infinity}
              sequence={[
                "Web Developer",
                2000,
                "",
                1000,
                "UI/UX Designer",
                2000,
                "",
                1000,
                "Fullstack Developer",
                1000,
                "",
                1000,
                "Tech Nerd",
                1000,
                "",
                1000,
              ]}
            />
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses, all the
              way up to large corporations. What could you accomplish if you had
              a software expert available at your fingertips? Let's find out!
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect! <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={me} alt='Header' borderRadius='50%' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
