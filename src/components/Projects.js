import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import WMP from "../assets/images/projects/WaterMyPlants.PNG";
import PP from "../assets/images/projects/PotluckPlanner.PNG";
import UDD from "../assets/images/projects/UnderdogDevs.PNG";
import colorSharp2 from "../assets/images/color-sharp.png";
import "../App.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Water My Plants",
      description: "Design & Development",
      imgUrl: WMP,
    },
    {
      title: "Potluck Planner",
      description: "Design & Development",
      imgUrl: PP,
    },
    {
      title: "Underdog Devs",
      description: "Design & Development",
      imgUrl: UDD,
    },
    // {
    //   title: "Water My Plants",
    //   description: "Design & Development",
    //   imgUrl: WMP,
    // },
    // {
    //   title: "Potluck Planner",
    //   description: "Design & Development",
    //   imgUrl: PP,
    // },
    // {
    //   title: "Underdog Devs",
    //   description: "Design & Development",
    //   imgUrl: UDD,
    // },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                > */}
            <h2>Projects</h2>
            <p>
              Check out these projects that I have worked on. More to come soon!
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey='third'>Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* </div>
              )}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      <img className='background-image-right' src={colorSharp2} alt='xyz'></img>
    </section>
  );
};
