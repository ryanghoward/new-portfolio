import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import WMP from "../assets/images/projects/WaterMyPlants.PNG";
import PP from "../assets/images/projects/PotluckPlanner.PNG";
import UDD from "../assets/images/projects/UnderdogDevs.PNG";
import "../CSS Files/Projects.css";
// import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "I Wet My Plants",
      description: "Plant Watering Schedule App",
      imgUrl: WMP,
    },
    {
      title: "Potluck Planner",
      description: "Potluck Organizing & Planning App",
      imgUrl: PP,
    },
    {
      title: "Underdog Devs",
      description: "Underdog Devs Website",
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
            <h2>Projects</h2>
            <p>
              Check out these projects that I have worked on. More to come soon!
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};
