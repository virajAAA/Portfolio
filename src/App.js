import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ContactForm from "./pages/contact-form/contact-form.component";
import { Parallax } from "react-parallax";
import FooterPanel from "./components/footer/footer.component";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyNavbar />
      <MyTitleMessage />

      <div>
        <Parallax
          blur={1}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt="bagroundimg"
          strength={100}
        >
          <div>
            <Container className="container-box ">
              <Fade duration={100}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box ">
        <Slide bottom duration={100}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box ">
          <Fade duration={500}>
            <hr />
          </Fade>
        </Container>
      </div>
      <Container className="container-box ">
        <Slide bottom duration={500}>
        
        </Slide>
      </Container>
      <Container className="container-box ">
        <Fade duration={500}>
          
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
};

export default App;
