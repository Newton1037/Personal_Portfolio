import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nitin Kumar </span>
            from <span className="purple"> Noida , India.</span>
            <br />
            I am currently a Btech 3rd year student at JIIT and an aspiring full stack developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading novels , current affairs
            </li>
       
          </ul>

         <footer className="blockquote-footer">Nitin Kumar</footer> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
