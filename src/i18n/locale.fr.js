import bxlReact from '@iconify/icons-bx/bxl-react';
import reduxIcon from '@iconify/icons-cib/redux';
import gatsbyIcon from '@iconify/icons-cib/gatsby';
import bxlNodejs from '@iconify/icons-bx/bxl-nodejs';
import slackCircleFilled from '@iconify/icons-ant-design/slack-circle-filled';
import bxlDiscord from '@iconify/icons-bx/bxl-discord';
import phpIcon from '@iconify/icons-cib/php';
import mysqlIcon from '@iconify/icons-cib/mysql';

export default {
  navigation: ['A propos', 'Ce que je fais', 'Projets'],
  bio: {
    title: "Bonjour, je suis Shirin Boomi.",
    subtitle: "Je suis développeuse Front-end.",
    content: "En recherche active.",
    button: "Contactez-moi",
  },
  about: {
    aboutMe: {
      title: "A propos de moi",
      content:
        "Formée à l'école oClock, je suis passionée par le code depuis que je m'y suis baignée. Trouver le petit effet wow! est mon objectif lorsque je fais un site web",
    },
    whyMe: {
      title: "Pourquoi moi ?",
      content:
        "Après des études en psychologie, j'ai voulu changer de cap en devenant développeuse web ! Ce qui me permet d'avoir la casquette humaine, avec l'empathie, la communication et l'écoute nécessaire en équipe, et la casquette technique, étant super curieuse et toujours à la recherche d'optimisation.",
    },
  },
  whatIDo: {
    first: "Ce que je fais",
    second: "Ce que j'ai pratiqué",
    primary: [
      {
        icons: [bxlReact, reduxIcon],
        title: "Single Page Application",
        content:
          "Les SPA, c'est mon dada! Tout au moins, j'adore travailler avec React et React-Redux. Je peux facilement rendre mes compétences transversables sur Angular ou VueJS si besoin.",
      },
      {
        icons: [gatsbyIcon],
        title: "JAMStack",
        content:
          "J'ai eu l'occasion de travailler avec GatsbyJS et NextJS pour m'améliorer en front-end.",
      },
      {
        icons: [bxlNodejs],
        title: "Nouveaux Horizons",
        content:
          "J'aimerais maîtriser ce langage qu'est Javascript. Je m'intéresse au back-end NodeJS pour m'étendre à du fullstack.",
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
        title: "Travail d'équipe",
        content:
          "Slack, Discord, Trello, j'ai pu découvrir les joies du travail d'équipe en remote, et vivre l'expérience d'un développement de projet en groupe.",
      },
    ],
  },
  projects: {
    title: "Mes Projets",
    intern: {
      title: "Projets internes",
      subtitle: "Ce portfolio a été conçu avec GatsbyJS.",
      text:
        "Baladez vous sur ce site en découvrant des pages inspirées de talentueux designs.",
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
      title: "Projets externes",
      subtitle: "Retrouvez des projets de groupes, ou personnels ici :",
      cards: [
        {
          title: "The Wander",
          url: "http://52.203.65.107/",
          img: "",
        },
        {
          title: "Mon Ancien Portfolio",
          url: "https://shirin-boomi.netlify.app/",
          img: "",
        },
      ],
    },
  },
  contactForm: {
    firstname: {
      title: "Prénom",
      error: "Votre prénom est requis.",
    },
    lastname: {
      title: "Nom",
      error: "Votre nom est incroyablement long, ça ne passe pas !.",
    },
    email: {
      title: "Email",
      error: "Votre email est requis et doit être valide.",
    },
    tel: {
      title: "Numéro de téléphone",
      error: "Votre numéro n'est pas valide.",
    },
    message: {
      title: "Entrez votre message :",
      error: "M'envoyer un message vide, est-ce vraiment le but ?",
    },
  },
};
