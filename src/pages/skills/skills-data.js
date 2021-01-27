//Imort  new logo
import L_LOGOImg from "../../assets/img/skills/logo.png";

//crousal images
import L_CROUSALIMG1 from "../../assets/img/skills/slide1.jpg";
import L_CROUSALIMG2 from "../../assets/img/skills/slide2.jpg";
import L_CROUSALIMG3 from "../../assets/img/skills/slide3.jpg";

// skills
import L_JAVA from "../../assets/img/skills/java.svg";
import L_MEVEN from "../../assets/img/skills/Meven.png";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CUCUMBER from "../../assets/img/skills/cucumber.jpg";
import L_SELENIUM from "../../assets/img/skills/selenium.png";
import L_API_TESTING from "../../assets/img/skills/apitesting.png";
import L_TESTNG from "../../assets/img/skills/testng.png";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MANUAL_TESING from "../../assets/img/skills/manual.jpg";

//profile pic

import L_PROFILEPIC from "../../assets/img/skills/profile.png";

export const skills = {
  // Navbar
  navbarDetails: {
    link: "https://en.wikipedia.org/wiki/HTML5",
    imgAltText: "logo",
    imgSrc: L_LOGOImg,
  },

  //Crousal
  crousalDetails: {
    crousalImg1: L_CROUSALIMG1,
    crousalImg2: L_CROUSALIMG2,
    crousalImg3: L_CROUSALIMG3,
  },

  //About Me
  textEffectDetails: {
    nameText: "Bhagyesh Kulkarni",
    designationText: "Software Tester| Automation ",
  },

  aboutmeDetails: {
    profilePicture: L_PROFILEPIC,
    introduction:
      "A passionate programmer, born and brought up in Ahmednagar, India. i am a software Tester with Automation  and also API testing knowledge",
    educationInformation:
      "In 2017 I I successfully completed my Masters with a specialization in 'Computer Science'.  ",
    currentStatus: "Currently working as a FreeLancer Automation Tester.",
    experience: "I have 2 years of experience in Software Testing.",
    capablites:
      "Always keen to learn and adapt to emerging technologies, putting dedicated efforts, and build better products.",
  },

  //Skills

  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link:
        "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },

    {
      link: "https://docs.oracle.com/javase/tutorial/",
      imgAltText: "JAVA",
      imgSrc: L_JAVA,
      skillName: "Java",
    },
  ],
  frontend1: [
    {
      link:
        "https://en.wikipedia.org/wiki/Selenium_(software)#:~:text=Selenium%20is%20a%20portable%20framework,scripting%20language%20(Selenium%20IDE).&text=The%20tests%20can%20then%20run,Windows%2C%20Linux%2C%20and%20macOS.",
      imgAltText: "selenium",
      imgSrc: L_MANUAL_TESING,
      skillName: "Manual Testing",
    },

    {
      link:
        "https://en.wikipedia.org/wiki/Selenium_(software)#:~:text=Selenium%20is%20a%20portable%20framework,scripting%20language%20(Selenium%20IDE).&text=The%20tests%20can%20then%20run,Windows%2C%20Linux%2C%20and%20macOS.",
      imgAltText: "selenium",
      imgSrc: L_SELENIUM,
      skillName: "Selenium Testing",
    },

    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: L_API_TESTING,
      skillName: "API Testing",
    },
  ],
  frontend2: [
    {
      link: "https://maven.apache.org/",
      imgAltText: "MAVEN",
      imgSrc: L_MEVEN,
      skillName: "Meven",
    },
    {
      link: "https://testng.org/doc/",
      imgAltText: "TestNg",
      imgSrc: L_TESTNG,
      skillName: "TestNG",
    },

    {
      link: "https://en.wikipedia.org/wiki/Cucumber_(software)",
      imgAltText: "Cucumber",
      imgSrc: L_CUCUMBER,
      skillName: "Cucumber",
    },
  ],

  frontend3: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],

  contactmeDetails: {
    email: "bhagyesh707@gmail.com",
    linkedIn: "Software Tester| Automation ",
  },
};
