import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_WORDPRESS from "../../assets/img/skills/wordpress1.png";

export const skills = {
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
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    }
  ], 
  frontend1: [ 
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },

    {
      link: "https://reacttraining.com/react-router/",
      imgAltText: "React Router",
      imgSrc: L_REACT_ROUTER,
      skillName: "React Router",
    },

    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: L_REACT_BOOTSTRAP,
      skillName: "React Bootstrap",
    },

  ],
  frontend2: [
   
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },

    {
      link: "https://wordpress.com/create/?utm_source=bing&utm_campaign=bing_wpcom_search_brand_desktop_row_en&utm_medium=paid_search&keyword=wordpress&creative=76759747017204&campaignid=282011434&adgroupid=1228154574804979&matchtype=e&device=c&network=s&targetid=kwd-76759730299059&msclkid=572159f16fa41a1eff30068a91840dcb",
      imgAltText: "Wordpress",
      imgSrc: L_WORDPRESS,
      skillName: "WordPress",
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
};
