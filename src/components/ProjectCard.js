import { Col } from "react-bootstrap";
import "../CSS Files/Projects.css";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbox'>
        <img src={imgUrl} alt='abc' />
        <div className='proj-text'>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
