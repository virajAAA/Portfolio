import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #101018f8;
  color: #fff;
  font-size: 1.5em;
  border: 2px solid #101018f8;
  border-top-left-radius: 3px;
  padding: 8px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      © Viraj Awati &nbsp; {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
