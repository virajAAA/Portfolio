import React from "react";
import { Card, CardDeck, Image, Row, Col } from "react-bootstrap";
import styled from "styled-components";


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
  text-align: center;
  margin-bottom: 1rem;
}
`;


const Skills = ({ skillsData }) => (
  <div className="pt-3 pb-3" id="skills">
    <StyledH1>TECH SKILLS</StyledH1>
    <CardDeck>
      <Row className="d-flex justify-content-around">
        {skillsData.map((skillData) => (
          <Col md={4} key={skillData.id}>
            <CardWrapper className="mt-2 mb-2">
              <Card.Body>
                {/* Frontend */}
                <CardTitle className="text-center"></CardTitle>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillData.skills.map((skill ,index) => (
                    <span className="p-2" key={index} key={skill.skillName}>
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
        ))}
      </Row>
    </CardDeck>
  </div>
);

export default Skills;
