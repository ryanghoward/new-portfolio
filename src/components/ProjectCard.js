import { Col } from "react-bootstrap";
import "../CSS Files/Projects.css";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  siteUrl,
  codeUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbox'>
        <img src={imgUrl} alt='abc' />
        <div className='proj-text'>
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={siteUrl} target='_blank' rel='noreferrer'>
            View Site
          </a>
          <a href={codeUrl} target='_blank' rel='noreferrer'>
            View Code
          </a>
        </div>
      </div>
    </Col>
  );
};
