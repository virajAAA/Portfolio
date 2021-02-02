import React from "react";
import { default as ReactCarousel } from "react-bootstrap/Carousel";
import styled from "styled-components";

const CarousalWrapper = styled.div`
  img {
    width: 100%;
    display: block;
    height: 100vh;
  }
`;

const Carousal = ({ carouselData }) => {
  return (
    <CarousalWrapper>
      <ReactCarousel controls={false} interval={2500} pauseOnHover={false}>
        {carouselData.map((carouseldata) => (
          <ReactCarousel.Item key={carouseldata}>
            <img src={carouseldata.img} alt="slides" />
          </ReactCarousel.Item>
        ))}
      </ReactCarousel>
    </CarousalWrapper>
  );
};

export default Carousal;
