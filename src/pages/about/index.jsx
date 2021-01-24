import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styled from "styled-components";
import Profile from "../../assets/img/profile/profile.webp";

const AboutWrapper = styled.div`
  background-color: transparent;
  font-size: 1.1em;
`;

const ProfileImage = styled(Image)`
  max-width: 18em;
`;

const DetailsRow = styled(Row)`
  background-color: rgba(255, 255, 255, 0.747);
`;

const About = () => {
  return (
    <AboutWrapper>
      <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
      <Container>
        <Row className="pt-3 pb-5 align-items-center">
          <Col xs={12} md={6}>
            <Row className="justify-content-center mb-2 mr-2 ">
              <ProfileImage alt="profile" src={Profile} thumbnail fluid />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <DetailsRow className="align-items-start p-2 rounded">
              Hi there! I am <strong>&nbsp;Viraj Awati</strong>
              <br />A passionate programmer, born and brought up in Ahmednagar,
              India. I am a Web Developer with HTML, CSS, JavaScript, and
              React-Js.
              <br />
              In 2017, I successfully completed my Masters with a specialization
              in 'Computer Science'. <br />
              Currently working as a FreeLancer Web Developer.
              <br />
              I have 2 years of experience in Web Development. My goal is always
              to provide the amazing and best level of quality, service to the
              client.
              <br />
              Always keen to learn and adapt to emerging technologies, putting
              dedicated efforts, and build better products.
              <br /> <br />
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1AEJS5rCx17_vktYeHskNWFvVlhGOgNza/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/virajAAA/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/viraj-awati-9749521b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </DetailsRow>
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
};

export default About;
