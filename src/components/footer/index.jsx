import React from "react";
import styled from "styled-components";
import { skills } from "../../pages/skills/skills-data"

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
      © {skills.textEffectDetails.nameText} &nbsp; {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;
