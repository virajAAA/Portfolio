import React from "react";
import { Card, CardDeck, Image, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { skills } from "./skills-data";

const CardWrapper = styled(Card)`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }

  &mt-1,
  mb-1 {
    display: flex;
    flex-direction: column;
  }
`;

const CardTitle = styled(Card.Title)`
  font-size: 2em;
  font-weight: 700;
`;

const StyledImage = styled(Image)`
  width: 3em;
`;

const StyledH1 = styled.h1`
  font-size: 3em;
  font-weight: 500;
  color: #ffffff;
`;

const StyledCardText = styled(Card.Text)`
  justify-items: center;
`;

const Skills = () => {
  return (
    <div className="pt-3 pb-3" id="skills">
      <StyledH1 className="text-center pb-4">TECH SKILLS</StyledH1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <CardWrapper className="mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <CardTitle className="text-center"></CardTitle>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StyledImage
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="m-1"
                        />
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </CardWrapper>
          </Col>

          <Col md={4}>
            <CardWrapper className="mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <CardTitle className="text-center"></CardTitle>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend1.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StyledImage
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className=" m-1"
                        />
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </CardWrapper>
          </Col>

          <Col md={4}>
            <CardWrapper className="mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <CardTitle className="text-center"></CardTitle>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend2.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StyledImage
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="m-1"
                        />
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </CardWrapper>
          </Col>

          <Col md={4}>
            <CardWrapper className="mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <CardTitle className="text-center"></CardTitle>
                <hr />
                <StyledCardText className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend3.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <StyledImage
                          src={skill.imgSrc}
                          alt={skill.imgAltText}
                          rounded
                          className="m-1"
                        />
                        {skill.skillName}
                      </a>
                    </span>
                  ))}
                </StyledCardText>
              </Card.Body>
            </CardWrapper>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
