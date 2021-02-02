import React from "react";
import { Jumbotron, Button, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron)`
  background-image: url('./src/assets/img/background/background.webp');
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContactForm = ({contactInformation}) => {
  

  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <StyledJumbotron>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
        
              <a
                
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-danger" title= {contactInformation.email}>
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/bhagyeshKulkarni999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </StyledJumbotron>
    </div>
  );
};

export default ContactForm;
