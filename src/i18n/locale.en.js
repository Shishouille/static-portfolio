import bxlReact from "@iconify/icons-bx/bxl-react";
import reduxIcon from "@iconify/icons-cib/redux";
import gatsbyIcon from "@iconify/icons-cib/gatsby";
import bxlNodejs from "@iconify/icons-bx/bxl-nodejs";
import slackCircleFilled from "@iconify/icons-ant-design/slack-circle-filled";
import bxlDiscord from "@iconify/icons-bx/bxl-discord";
import phpIcon from "@iconify/icons-cib/php";
import mysqlIcon from "@iconify/icons-cib/mysql";
import typescriptIcon from "@iconify/icons-cib/typescript";
import styledComponents from "@iconify/icons-simple-icons/styled-components";
import nextjsIcon from "@iconify/icons-logos/nextjs";
import symfonyIcon from "@iconify/icons-cib/symfony";
import bxlWordpress from "@iconify/icons-bx/bxl-wordpress";
import bxlJavascript from "@iconify/icons-bx/bxl-javascript";

import cv from "../images/portfolio/CVE.png";

export default {
  navigation: ["Hello", "About", "What I Do", "Projects", "Contact"],
  bio: {
    title: "Hello, I am Shirin Boomi.",
    subtitle: "I am a Front-end Developper.",
    content: "My Favorite Framework : ReactJS.",
    button: "Contact me",
    cv: "Download my Resume",
    url: cv,
  },
  about: {
    aboutMe: {
      title: "About Me",
      content: [
        "I'm a 23 years old woman who did a retraining in web development. I left my last life, studying psychology and preparing my Master degree, to find my true calling : Coding. I'm ready to move wherever, if I'm fond of the project and the city is nice to live in.",
        "I am now looking for a company ready to welcome its new member. You are in front of someone that loves problem solving and challenges. Curious, discovering new concepts is what motivates me, but my ennemy is the routine. Doing the same thing everyday, everytime is not for me in long-term.",
      ],
    },
    whyMe: {
      title: "The More you know...",
      content: [
        "Psychology is a background near to my heart in this new domain. But why leave this studies ? I see you coming ! The more time went by, and the more I felt, especially during my internship, that our role was only to put a band aid on someone who got stabbed. It wasn't enough for me, and I wanted to act more in my daily life than in this job.",
        "Humain stays one of my passions and I want to put my grain of salt in web development because I'm proud of this knowledge that made me grow from in this domain. My studies in university taught me to become autonomous, to search by myself, and to understand. This guidline has been applied to my courses in web development also, and I am still following it to this day.",
      ],
    },
    life: {
      studies: [
        {
          title: "Education",
          content: "oClock Remote School - Web Development",
        },
        {
          title: "Education",
          content: "URCA - Psychology Degree",
        },
      ],
      hobbies: [
        {
          title: "Hobbies",
          content: "Art",
        },
        {
          title: "Hobbies",
          content: "Podcasts",
        },
        {
          title: "Hobbies",
          content: "Boxe",
        },
        {
          title: "Hobbies",
          content: "Video-Games",
        },
      ],
      langs: [
        {
          title: "Langues",
          content: "French - Native Language",
        },
        {
          title: "Langues",
          content: "English - Fluent",
        },
        {
          title: "Langues",
          content: "Spanish - Notions",
        },
      ],
    },
  },
  whatIDo: {
    first: "What I Do",
    second: "What I've Done",
    primary: [
      {
        icons: [bxlReact, reduxIcon],
        title: "Single Page Application",
        content: [
          "ReactJS and Redux are my go-to technologies. I love the state management system, polyvalent enough for not being limited by this tool. Coupled by other libraries as Axios or React-Router, I've developped in team a complete web application at a front-end level : Routing, API calls and UI management with a live information update.",
        ],
      },
      {
        icons: [gatsbyIcon, styledComponents],
        title: "JAMStack & Stylisation",
        content: [
          "I really liked the JAMStack concept : They have the pros of static websites speed and are coded with dynamic frameworks.  I have been practicing with GatsbyJS and NextJS for 2 personnal projects. I have experimented routing on NextJS, GraphQL requests on both and 'Images' components that allow a pleasant loading thanks to fragments.",
          "For stylisation, I love Styled-Components and the concept of CSS-in-JS. Their props system is very practical, global styles and keyframes also. I had the occasion to test Bootstrap during my courses and Tailwind CSS, with its plugins (components in majority) in a personnal project. About SaSS, I see it a lot, and I would be glad to practice it if occasion there is !",
          "When I am doing a project, I assure there is always a desktop and mobile version with media queries in general, whatever stylisation tool.",
        ],
      },
      {
        icons: [bxlNodejs, typescriptIcon],
        title: "New Horizons",
        content: [
          "I would like to know more about Javascript back-end to do fullstack and develop MERN applications. I know how to make a basic CRUD with NodeJS, Express and Mongoose environment. I would like to get better in validation and data manipulation.",
          "Typescript being trending and allowing more control and verification, I would like to test it soon to adapt my ReactJS components to this new langage.",
        ],
      },
    ],
    secondary: [
      {
        icons: [bxlWordpress, bxlJavascript],
        title: "Wordpress & Javascript",
        content: [
          "During my courses, I had the opportunity to discover how to create a Wordpress theme. Their codex is very clear, and there is a lot of tutorials about it. If there is an occasion to pratice on this framework, I'm in !",
          "I have also the required foundation to create websites in HTML/PHP, CSS and Javascript. I have seen the go-to methods for the web pages creation.",
        ],
      },
      {
        icons: [phpIcon, mysqlIcon],
        title: "Back-End",
        content: [
          "I have been practising on challenges database management with PHP and MySQL, thanks to the MVC Model (Model-View-Controller) and Object Oriented Programming (OOP). I have the requirements needed to create a back-end, understanding CRUD methods (Create, Read, Update, Delete) and security verifications (Avoid SQL injections, verify entry front-end data, filter access on pages (Admin for instance))...",
          "With this foundation, I have been able to transverse this concepts in NodeJS to create a back-end application.",
        ],
      },
      {
        icons: [slackCircleFilled, bxlDiscord],
        title: "TeamWork",
        content: [
          "My retraining has been a great adventude to learn all I know in web development today. My school set up sessions of pair programming with the LiveShare of Visual Studio Code, and a final project in group to be able to adapt in my future work environment. I could communicate via Slack, Github, Discord or Trello. Being a remote a school, I am used to work from home.",
          "If you're looking for someone to welcome on your super team, contact me to know me better. I love to meet new people, in virtual or real life !",
        ],
      },
    ],
  },
  projects: {
    title: "My Projects",
    intern: {
      title: "Intern projects",
      subtitle: "That portfolio has been made with GatsbyJS.",
      text:
        "Discover pages imagined by awesome designers by following these links.",
      cards: [
        {
          title: "Caligrafik",
          link: "/caligrafik",
          authorUrl: "https://dribbble.com/calinbalea",
          author: "@Calin Balea",
          lang: "EN",
          img: "",
        },
        {
          title: "Theodore Géricault - Le Louvre",
          link: "/louvre",
          authorUrl: "https://dribbble.com/ADLOCON",
          author: "@Adrien Louis Constant",
          lang: "FR",
          img: "",
        },
        {
          title: "Beatriz Ramo Portfolio",
          link: "/beatriz-ramo",
          authorUrl: "https://dribbble.com/rmbrm",
          author: "@Anastasia",
          lang: "EN",
          img: "",
        },
        {
          title: "The song of the nightingales",
          link: "/nightingale",
          authorUrl: "https://dribbble.com/totodsgn",
          author: "@Thomas Monavon",
          lang: "EN",
          img: "",
        },
        {
          title: "Chatbot Service Concept",
          link: "/chatbox",
          authorUrl: "https://dribbble.com/Ankur_007",
          author: "@Ankur Tripathi",
          lang: "EN",
          img: "",
        },
        {
          title: "Essai Grid - Japon",
          link: "/japan",
          authorUrl: "https://dribbble.com/malfiksas",
          author: "@nuzarim",
          lang: "EN",
          img: "",
        },
        {
          title: "Music Player",
          link: "/music-player",
          authorUrl: "https://dribbble.com/mkcreates",
          author: "@Maksym",
          lang: "EN",
          img: "",
        },
        {
          title: "Liefde City Tribute",
          link: "/liefde",
          authorUrl: "https://dribbble.com/rachel48",
          author: "@Rachelizmarvel",
          lang: "EN",
          img: "",
        },
        {
          title: "Pawfect",
          link: "/pawfect",
          authorUrl: "https://dribbble.com/ishaank58",
          author: "@Ishaan Kumar",
          lang: "EN",
          img: "",
        },
        {
          title: "Art World",
          link: "/art-world",
          authorUrl: "https://dribbble.com/Zihad-Islam",
          author: "@Zihad Islam",
          lang: "EN",
          img: "",
        },
        {
          title: "Craft Design Solutions",
          link: "/crope",
          authorUrl: "https://dribbble.com/coolbabka",
          author: "@Katerina",
          lang: "EN",
          img: "",
        },
      ],
    },
    extern: {
      title: "Extern Projects",
      subtitle: "Find my personnal and team work here.",
      cards: [
        {
          title: "The Wander",
          url: "http://52.203.65.107/",
          github: "https://github.com/O-clock-X/projet-astronomie-front",
          lang: "EN",
          tags: [bxlReact, symfonyIcon],
          img: "",
        },
        {
          title: "Mon Ancien Portfolio",
          github: "https://github.com/Shishouille/Portfolio",
          url: "https://shirin-boomi.netlify.app/",
          lang: "EN",
          tags: [bxlReact],
          img: "",
        },
        {
          title: "Opav - Infos about opera",
          url: "https://vivalopera.now.sh/",
          github: "https://github.com/Shishouille/opav",
          lang: "FR",
          tags: [nextjsIcon],
          img: "",
        },
        {
          title: "WIP - Scientists",
          github: "https://github.com/Shishouille/cobaye-front",
          lang: "FR",
          tags: [bxlReact, bxlNodejs],
          img: "",
        },
      ],
    },
  },
  contactForm: {
    title: "Contact Me !",
    firstname: {
      title: "First Name",
      error: "Your first name is required.",
    },
    lastname: {
      title: "Last Name",
      error: "Your name is incredibly long, I can't digest that!",
    },
    email: {
      title: "Email",
      error: "Your email is required and must be valid.",
    },
    tel: {
      title: "Phone Number (Optionnal)",
      error: "Your phone number is not valid.",
    },
    message: {
      title: "Write your message :",
      error: "Do you really want to send me an empty message ?",
    },
    loading: {
      content: "Sending Message...",
    },
    success: {
      content:
        "Message Sent ! Thanks a lot for your time. I'll catch you up soon.",
    },
    error: {
      content: "An error has occured. Please try again.",
    },
    button: {
      content: "Send",
    },
  },
};
