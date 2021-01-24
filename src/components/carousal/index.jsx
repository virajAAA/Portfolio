import React from "react";
import { default as ReactCarousel } from "react-bootstrap/Carousel";
import styled from "styled-components";
import Slide1 from "../../assets/img/carousal/slide1.webp";
import Slide2 from "../../assets/img/carousal/slide4.webp";
import Slide3 from "../../assets/img/carousal/slide3.webp";

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
        indicators
        interval={2500}
        pauseOnHover={false}
      >
        <ReactCarousel.Item>
          <img src={Slide2} alt="First slide" />
        </ReactCarousel.Item>
        <ReactCarousel.Item>
          <img src={Slide3} alt="Third slide" />
        </ReactCarousel.Item>
        <ReactCarousel.Item>
          <img src={Slide1} alt="Third slide" />
        </ReactCarousel.Item>
      </ReactCarousel>
    </CarousalWrapper>
  );
};

export default Carousal;
