import React from "react";
import Container from "react-bootstrap/Container";
import { Fade, Slide } from "react-reveal";
import { Parallax } from "react-parallax";
import { About, Skills, ContactForm } from "./pages";
import { Footer, Carousal, Navbar, TitleMessage } from "./components";
import styled from "styled-components";

const Hr = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

const AppWrapper = styled.div`
  position: relative;
`;

const ContainerWrapper = styled(Container)`
  width: 80%;
  background-color: transparent;
  position: relative;
  z-index: 9;
`;

const App = () => {
  return (
    <AppWrapper>
      <Carousal />
      <Navbar />
      <TitleMessage />

      <Parallax
        blur={1}
        bgImage={require("./assets/img/parallex/background.webp")}
        bgImageAlt="bagroundimg"
        strength={100}
      >
        <ContainerWrapper>
          <Fade duration={100}>
            <About />
          </Fade>
        </ContainerWrapper>
      </Parallax>

      <ContainerWrapper>
        <Slide bottom duration={100}>
          <Hr />
          <Skills />
        </Slide>
      </ContainerWrapper>
      <div>
        <ContainerWrapper>
          <Fade duration={500}>
            <Hr />
          </Fade>
        </ContainerWrapper>
      </div>
      <ContainerWrapper>
        <Slide bottom duration={500}></Slide>
      </ContainerWrapper>

      <ContainerWrapper>
        <Fade duration={500}>
          <ContactForm/> 
        </Fade>
      </ContainerWrapper>

      <Hr />
      <Footer  />
    </AppWrapper>
  );
};

export default App;
