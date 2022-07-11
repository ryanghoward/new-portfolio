import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Astronaut from "../assets/images/astronaut.svg";
import guycoding from "../assets/images/guycoding.png";
import "animate.css";
import TrackVisibilty from "react-on-screen";
import Typist from "react-typist";

export const Banner = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const toRotate = [
  //   "Fullstack Web Developer",
  //   "Web Designer",
  //   "UI/UX Designer",
  // ];
  // const period = 500;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);
  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);
  //   setText(updatedText);
  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setDelta(500);
  //   }
  // };

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>
              Hello! I'm Ryan, welcome to my portfolio!
            </span>
            <h1>
              <Typist>
                <span>Phrase 1</span>
                <Typist.Backspace count={17} delay={200} />
                <span>Phrase 2</span>
              </Typist>
              {/* I'm Ryan, a <br />
              <span className='wrap'>{text}</span> */}
            </h1>
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
          {/* <Col xs={12} md={6} xl={5}>
            <img src={guycoding} alt='Header' borderRadius='50%' />
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
