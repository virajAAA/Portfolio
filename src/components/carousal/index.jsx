import React from "react";
import { default as ReactCarousel } from "react-bootstrap/Carousel";
import styled from "styled-components";
// import Slide1 from "../../assets/img/carousal/slide1.webp";
// import Slide2 from "../../assets/img/carousal/slide2.webp";
// import Slide3 from "../../assets/img/carousal/slide3.webp";

import { skills } from "../../pages/skills/skills-data";


const CarousalWrapper = styled.div`
  img {
    width: 100%;
    display: block;
    height: 100vh;
  }
`;

const Carousal = () => {
  return (
    <CarousalWrapper>
      <ReactCarousel
        controls={false}
        interval={2500}
        pauseOnHover={false}
      >
        <ReactCarousel.Item>
          <img src={skills.crousalDetails.crousalImg1} alt="First slide" />
        </ReactCarousel.Item>
        <ReactCarousel.Item>
          <img src={skills.crousalDetails.crousalImg2} alt="Second slide" />
        </ReactCarousel.Item>
        <ReactCarousel.Item>
          <img src={skills.crousalDetails.crousalImg3} alt="Third slide" />
        </ReactCarousel.Item>
      </ReactCarousel>
    </CarousalWrapper>
  );
};

export default Carousal;
