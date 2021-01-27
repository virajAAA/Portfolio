import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import LogoSrc from "../../assets/icons/logo.png";
import styled, { keyframes } from "styled-components";
import { skills } from "../../pages/skills/skills-data";


const Logo = styled.img`
  width: 25%;
  border-radius: 10px;
`;

const moveDownKeyframes = keyframes`
  from {
    transform: translateY(-5rem);
  }
  to {
    transform: translateX(0rem);
  }
`;

const NavbarWrapper = styled(Navbar)`
  background-color: #101018f8;
  font-size: 20px;
  box-shadow: 1px 1px 1px #222;
  justify-content: space-between;
  animation: ${moveDownKeyframes} 0.5s ease-in-out;
`;

const MyNavbar = () => {
  return (
    <div>
      <NavbarWrapper fixed="top" variant="dark" expand="md">
        <div>
          <Navbar.Brand href="#home">
            <Logo src={skills.navbarDetails.imgSrc} alt="logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </NavbarWrapper>
    </div>
  );
};

export default MyNavbar;
