import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://cryptologos.cc/logos/chatcoin-chat-logo.png"}
              isBlog={false}
              title="Chit-Chat"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with MERN. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/Newton1037/CHAT-APP-MERN"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://ouch-cdn2.icons8.com/cCh2UttS-1X5ZA2MffN0Xv7SMpNScwcKyDwaEGTXAiQ/rs:fit:511:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNzMy/L2UwODJjMWE3LTVm/ZjQtNDdlMC1hOGFi/LWY1NjNkZjM3MWQy/YS5zdmc.png"}
              isBlog={false}
              title="Smart Surveillance"
              description="Developed a sophisticated Smart Surveillance System using React and TensorFlow.js, integrating real- timeobject detection and video recording capabilities. This web application leverages a webcam feed toaccurately identify and highlight humans and other objects, with features designed to enhance usability andsecurity."
              ghLink="https://github.com/Newton1037/smart-surveillance"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.simplilearn.com/ice9/free_resources_article_thumb/Figure_1_Machine_learning.jpg"}
              isBlog={false}
              title="Training-ML-models-on-Subatomic-particle-Collisions-for-accurate-feature-prediction"
              description="We train ML models on electron collision data to predict it's invariant mass . We find the most suitable and efficient ML model to handle large size of experimental data and find the desired result using the machine learning model"
              ghLink="https://github.com/Newton1037/Training-ML-models-on-Subatomic-particle-Collisions-for-accurate-feature-prediction"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
