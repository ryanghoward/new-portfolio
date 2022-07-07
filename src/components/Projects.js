import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import WMP from "../assets/images/WaterMyPlants.PNG";
import PP from "../assets/images/PotluckPlanner.PNG";
import UDD from "../assets/images/UnderdogDevs.PNG";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: WMP,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: PP,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: UDD,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: WMP,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: PP,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: UDD,
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis consequuntur voluptates libero qui odit nihil totam
              quod sunt possimus eius!
            </p>
            <Nav variant='pills' defaultActiveKey='/home'>
              <Nav.Item>
                <Nav.Link eventKey='first'>Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='second'>Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='third'>Tab 3</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
