import bxlReact from "@iconify/icons-bx/bxl-react";
import reduxIcon from "@iconify/icons-cib/redux";
import gatsbyIcon from "@iconify/icons-cib/gatsby";
import bxlNodejs from "@iconify/icons-bx/bxl-nodejs";
import slackCircleFilled from "@iconify/icons-ant-design/slack-circle-filled";
import bxlDiscord from "@iconify/icons-bx/bxl-discord";
import phpIcon from "@iconify/icons-cib/php";
import mysqlIcon from "@iconify/icons-cib/mysql";
import typescriptIcon from '@iconify/icons-cib/typescript';
import styledComponents from '@iconify/icons-simple-icons/styled-components';

export default {
  navigation: ["Bio", "About", "What I Do", "Projects", "Contact"],
  bio: {
    title: "Hello, I am Shirin Boomi.",
    subtitle: "I am a Front-end Developper.",
    content: "Specialized in ReactJS.",
    button: "Contact me",
    cv: "Download my Resume",
  },
  about: {
    aboutMe: {
      title: "About Me",
      content:
        "Formée à l'école oClock, je suis passionée par le code depuis que je m'y suis baignée. Trouver le petit effet wow! est mon objectif lorsque je fais un site web.",
    },
    whyMe: {
      title: "Why Me ?",
      content:
        "Après des études en psychologie, j'ai voulu changer de cap en devenant développeuse web ! Ce qui me permet d'avoir la casquette humaine, avec l'empathie, la communication et l'écoute nécessaire en équipe, et la casquette technique, étant super curieuse et toujours à la recherche d'optimisation.",
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
        content:
          "Les SPA, c'est mon dada! Tout au moins, j'adore travailler avec React et React-Redux. Je peux facilement rendre mes compétences transversables sur Angular ou VueJS si besoin.",
      },
      {
        icons: [gatsbyIcon, styledComponents],
        title: "JAMStack & Stylisation",
        content:
          "J'ai eu l'occasion de travailler avec GatsbyJS et NextJS pour m'améliorer en front-end. Pour rendre un site joli, je me sers de Styled Components majoritairement. Il m'est arrivé de me servir de Tailwind CSS, Bootstrap, ou encore Sass.",
      },
      {
        icons: [bxlNodejs, typescriptIcon],
        title: "New Horizons",
        content:
          "J'aimerais maîtriser ce langage qu'est Javascript. Je m'intéresse au back-end NodeJS pour m'étendre à du fullstack. Je veux également apprendre Typescript pour aiguiser mes compétences avec ReactJS.",
      },
    ],
    secondary: [
      {
        icons: [phpIcon, mysqlIcon],
        title: "Back-End",
        content:
          "Je suis à l'aise avec les notions comme MVC (Model-View-Controller), ou POO. Je n'ai pas autant d'expérience en back-end qu'en front-end, mais cela me permet de comprendre comment faire le lien entre ces deux structures si intriquement liées.",
      },
      {
        icons: [slackCircleFilled, bxlDiscord],
        title: "TeamWork",
        content:
          "Slack, Discord, Trello, j'ai pu découvrir les joies du travail d'équipe en remote, et vivre l'expérience d'un développement de projet en groupe.",
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
          img: "",
        },
        {
          title: "Theodore Géricault - Le Louvre",
          link: "/louvre",
          authorUrl: "https://dribbble.com/ADLOCON",
          author: "@Adrien Louis Constant",
          img: "",
        },
        {
          title: "Beatriz Ramo Portfolio",
          link: "/beatriz-ramo",
          authorUrl: "https://dribbble.com/rmbrm",
          author: "@Anastasia",
          img: "",
        },
        {
          title: "The song of the nightingales",
          link: "/nightingale",
          authorUrl: "https://dribbble.com/totodsgn",
          author: "@Thomas Monavon",
          img: "",
        },
        {
          title: "Chatbot Service Concept",
          link: "/chatbox",
          authorUrl: "https://dribbble.com/Ankur_007",
          author: "@Ankur Tripathi",
          img: "",
        },
        {
          title: "Essai Grid - Japon",
          link: "/japan",
          authorUrl: "https://dribbble.com/malfiksas",
          author: "@nuzarim",
          img: "",
        },
        {
          title: "Music Player",
          link: "/music-player",
          authorUrl: "https://dribbble.com/mkcreates",
          author: "@Maksym",
          img: "",
        },
        {
          title: "Liefde City Tribute",
          link: "/liefde",
          authorUrl: "https://dribbble.com/rachel48",
          author: "@Rachelizmarvel",
          img: "",
        },
        {
          title: "Pawfect",
          link: "/pawfect",
          authorUrl: "https://dribbble.com/ishaank58",
          author: "@Ishaan Kumar",
          img: "",
        },
        {
          title: "Art World",
          link: "/art-world",
          authorUrl: "https://dribbble.com/Zihad-Islam",
          author: "@Zihad Islam",
          img: "",
        },
        {
          title: "Craft Design Solutions",
          link: "/crope",
          authorUrl: "https://dribbble.com/coolbabka",
          author: "@Katerina",
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
          img: "",
        },
        {
          title: "Mon Ancien Portfolio",
          github: "https://github.com/Shishouille/Portfolio",
          url: "https://shirin-boomi.netlify.app/",
          img: "",
        },
        {
          title: "Opav - Infos sur l'opéra",
          url: "https://vivalopera.now.sh/",
          github : "https://github.com/Shishouille/opav",
          img: "",
        },
        {
          title: "WIP - Plateforme Chercheurs-cobayes",
          github: "https://github.com/Shishouille/cobaye-front",
          img: "",
        },
      ],
    },
  },
  contactForm: {
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
      title: "Phone Number (Optionnel)",
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
      content: "Message Sent ! Thanks a lot for your time. I'll catch you up soon.",
    },
    error: {
      content: "An error has occured. Please try again.",
    },
    button: {
      content: "Send",
    }
  },
};

