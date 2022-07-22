import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import WMP from "../assets/images/projects/WaterMyPlants.PNG";
import PP from "../assets/images/projects/PotluckPlanner.PNG";
import UDD from "../assets/images/projects/UnderdogDevs.PNG";
import VHCL from "../assets/images/projects/VHCL.PNG";
import code6 from "../assets/images/projects/code6.jpg";
import code8 from "../assets/images/projects/code8.jpg";
import "../CSS Files/Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "VHCL",
      description: "Turo Landing Page Clone",
      imgUrl: VHCL,
      siteUrl: "https://ryanghoward.github.io/VHCL/",
      codeUrl: "https://github.com/ryanghoward/VHCL",
    },
    {
      title: "Underdog Devs",
      description: "Underdog Devs Website",
      imgUrl: UDD,
      siteUrl: "https://www.underdogdevs.org/",
      codeUrl: "https://github.com/BloomTech-Labs/underdog-devs-fe-a",
    },
    {
      title: "Potluck Planner",
      description: "Potluck Organizing & Planning App",
      imgUrl: PP,
      siteUrl: "https://potluck1-front-end.vercel.app/",
      codeUrl: "https://github.com/Potluck-Planner-A",
    },
    {
      title: "I Wet My Plants",
      description: "Plant Watering Schedule App",
      imgUrl: WMP,
      siteUrl: "https://water-my-plants-9-build-week.vercel.app/",
      codeUrl: "https://github.com/Build-Week-Water-My-Plants-8/front-end",
    },
    {
      title: "Placeholder",
      description: "Lorem Ipsum",
      imgUrl: code6,
      siteUrl: "/",
      codeUrl: "/",
    },
    {
      title: "Placeholder",
      description: "Lorem Ipsum",
      imgUrl: code8,
      siteUrl: "/",
      codeUrl: "/",
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <div className='projects' size={12}>
            <h2>Projects</h2>
            <p>
              Check out these projects that I have built or contributed to. More
              to come soon!
            </p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </div>
        </Row>
      </Container>
    </section>
  );
};
