import React from "react";
import { Container, Row, Image, Col, Button } from "react-bootstrap";
import styled from "styled-components";

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

const About = ({ aboutMe }) => {
  return (
    <div id="about">
      <AboutWrapper>
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <ProfileImage
                  alt="profile"
                  src={aboutMe.profilePic}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <DetailsRow className="align-items-start p-2 rounded">
                Hi there! I am <strong>&nbsp;{aboutMe.profilerName}</strong>
                <br />
                {aboutMe.introduction}
                <br />
                {aboutMe.educationInfo}
                <br />
                {aboutMe.currentStatus}
                <br />
                {aboutMe.experience}
                <br />
                {aboutMe.capabilities}
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
                      href="https://drive.google.com/file/d/1SrsHdnjkWFwVC4YoavS7LIt2AVbxeEC2/view"
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
                      href="https://github.com/bhagyeshKulkarni999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
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
    </div>
  );
};

export default About;
