import "../CSS Files/Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import skills from "./SkillsData";

// Carousel Stuff
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
            <div className='skill-box'>
              <h2>Skills</h2>
              <p>These are the technologies I work with</p>
              <Carousel
                swipeable={false}
                draggable={false}
                className='skill-slider'
                arrows={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                customTransition='all 1000ms'
                transitionDuration={1000}
              >
                {skills.map((skill) => (
                  <div key={skill.id} className='item'>
                    <img src={skill.img} alt={skill.name} />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
