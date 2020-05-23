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

import cv from "../images/portfolio/CV.png";

export default {
  navigation: ["Bienvenue", "A propos", "Ce que je fais", "Projets", "Contact"],
  bio: {
    title: "Bonjour, je suis Shirin Boomi.",
    subtitle: "Je suis développeuse Front-end.",
    content: "Mon framework préféré : ReactJS.",
    button: "Contactez-moi",
    cv: "Télécharger mon CV",
    url: cv,
  },
  about: {
    aboutMe: {
      title: "A propos de moi",
      content: [
        "Je suis une jeune fille de 23 ans qui me suis reconvertie dans le développement web. J'ai quitté mon ancienne vie, étudiante en psychologie préparant son Master, pour trouver une vocation qui me correspondait mieux : le code. Je suis prête à déménager là où il le faudra, tant que le projet me plaît et que c'est une ville où il fait bon y vivre.",
        "Je cherche maintenant une entreprise prête à accueillir sa nouvelle recrue. Vous avez en face quelqu'un qui adore résoudre des problèmes et les challenges. Etant curieuse, j'adore découvrir de nouvelles choses, mais mon pire ennemi est la routine. Faire tout le temps la même chose, ce n'est pas fait pour moi au long terme.",
      ],
    },
    whyMe: {
      title: "Mais encore ?",
      content: [
        "La psychologie est un bagage qui me tient à coeur dans ce nouveau métier. Mais pourquoi avoir quitté cette voie ? Je vous vois venir ! Plus le temps passait, et plus je sentais, surtout lors de mon stage, que notre rôle était de mettre un pansement sur quelqu'un qui s'était fait poignardé. Ce n'était pas suffisant, et je voulais plus agir dans mon quotidien que dans ce métier.",
        "L'humain reste une de mes passions et je veux y mettre ma pâte car je suis fière des connaissances que j'ai acquis dans ce domaine. Mes études à l'université m'ont appris à devenir autonome, à chercher par moi-même, et à comprendre. Cette ligne de conduite a été appliquée aussi à ma formation de développeur web et je suis toujours dans cette continuité.",
      ],
    },
    life: {
      studies: [
        {
          title: "Formation",
          content: "Ecole oClock - Développement Web",
        },
        {
          title: "Formation",
          content: "URCA - Licence en Psychologie",
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
          content: "Jeux-vidéos",
        },
      ],
      langs: [
        {
          title: "Langues",
          content: "Français - Maternel",
        },
        {
          title: "Langues",
          content: "Anglais - Courant",
        },
        {
          title: "Langues",
          content: "Espagnol - Notions",
        },
      ],
    },
  },
  whatIDo: {
    first: "Ce que je fais",
    second: "Ce que j'ai pratiqué",
    primary: [
      {
        icons: [bxlReact, reduxIcon],
        title: "Single Page Application",
        content: [
          "ReactJS et Redux sont mes chevaux de bataille. J'adore le système de gestions d'états, assez polyvalent pour ne pas être limité par cette technologie. Couplée à d'autres librairies comme Axios ou React-Router, j'ai pu développer en équipe une application complète niveau front-end : Routing, appels API et UI avec une mise à jour directe des informations.",
        ],
      },
      {
        icons: [gatsbyIcon, styledComponents],
        title: "JAMStack & Stylisation",
        content: [
          "Le concept des JAMStack m'a beaucoup plu : ils ont l'avantage d'avoir la rapidité des sites statiques et sont codés grâce à des frameworks dynamiques. J'ai pu expérimenter GatsbyJS et NextJS pour des projets personnels. J'ai pu pratiqué le routing sur NextJS, les requêtes GraphQL également sur les deux frameworks, et les composantes 'Images' qui permettent un chargement plus agréable grâce aux fragments.",
          "Pour la stylisation, j'adore Styled-Components et le principe du CSS-in-JS. Leur système de props est très pratique, tout comme les styles globaux ou les keyframes. J'ai aussi pu tester Bootstrap lors de ma formation, et Tailwind CSS, muni de ses plugins (surtout les composants) dans un projet personnel. Pour ce qui est de SaSS, j'en vois souvent, mais à pratiquer plus si l'occasion s'y trouve !",
          "Qu'importe les outils pour styliser, je fais en sorte qu'il y ait toujours une version desktop et mobile dans mes projets, grâce aux media queries notamment.",
        ],
      },
      {
        icons: [bxlNodejs, typescriptIcon],
        title: "Nouveaux Horizons",
        content: [
          "J'aimerais maîtriser un peu plus le back-end Javascript afin de faire du fullstack et développer des applications MERN. Je sais réaliser un CRUD simple avec l'environnement NodeJS, Express et Mongoose. J'aimerais maintenant améliorer la validation et la manipulation de données.",
          "Typescript étant très à la mode et permettant plus de contrôle et de vérification, j'aimerais le tester prochainement sur ReactJS.",
        ],
      },
    ],
    secondary: [
      {
        icons: [bxlWordpress, bxlJavascript],
        title: "Wordpress & Javascript",
        content: [
          " Pendant ma formation, j'ai eu l'occasion de découvrir comment créer un thème Wordpress. Leur Codex est très clair, il y a beaucoup de tutoriels sur le sujet. Donc si l'occasion se présente de repratiquer sur ce framework, j'en suis !",
          "J'ai également le bagage nécessaire pour créer des sites webs en HTML/PHP, CSS et Javascript, ayant vu les bonnes pratiques pour la création des pages web.",
        ],
      },
      {
        icons: [phpIcon, mysqlIcon],
        title: "Back-End",
        content: [
          "J'ai pu pratiqué sur des challenges la gestion de bases de données avec PHP et MySQL avec le modèle MVC (Model-View-Controller) et la Programmation Orientée Objet (POO). J'ai les bagages nécessaires pour créer un back-end, comprenant les méthodes du CRUD (Create, Read, Update, Delete) et des vérifications de sécurité (Eviter les injections SQL, vérifier les données entrantes du front, filtrer les accès sur certaines pages)...",
          "Grâce à ces bonnes bases, j'ai pu transverser mes connaissances sur NodeJS à la fin de ma formation pour créer une application fullstack.",
        ],
      },
      {
        icons: [slackCircleFilled, bxlDiscord],
        title: "Travail d'équipe",
        content: [
          "Mon école m'a mis en place des sessions de pair programming avec le Liveshare de Visual Studio Code et un projet de fin d'études en groupe pour m'adapter à mon futur environnement de travail. J'ai pu communiquer par Slack, Github, Discord ou Trello.",
          "Si vous cherchez quelqu'un à accueillir dans votre super team, n'hésitez pas à me contacter pour mieux me connaître. J'adore rencontrer de nouvelles personnes, que ce soit en réel ou virtuel !",
        ],
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
      title: "Projets externes",
      subtitle: "Retrouvez des projets de groupes ou personnels ici.",
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
          title: "Opav - Infos sur l'opéra",
          url: "https://vivalopera.now.sh/",
          github: "https://github.com/Shishouille/opav",
          lang: "FR",
          tags: [nextjsIcon],
          img: "",
        },
        {
          title: "WIP - Plateforme Chercheurs-cobayes",
          github: "https://github.com/Shishouille/cobaye-front",
          lang: "FR",
          tags: [bxlReact, bxlNodejs],
          img: "",
        },
      ],
    },
  },
  contactForm: {
    title: "N'hésitez pas à me contacter",
    firstname: {
      title: "Prénom",
      error: "Votre prénom est requis.",
    },
    lastname: {
      title: "Nom (Optionnel)",
      error: "Votre nom est incroyablement long, ça ne passe pas !",
    },
    email: {
      title: "Email",
      error: "Votre email est requis et doit être valide.",
    },
    tel: {
      title: "Numéro de téléphone (Optionnel)",
      error: "Votre numéro n'est pas valide.",
    },
    message: {
      title: "Entrez votre message :",
      error: "M'envoyer un message vide, est-ce vraiment le but ?",
    },
    loading: {
      content: "Message en cours d'envoi...",
    },
    success: {
      content: "Votre message a bien été envoyé. Merci beaucoup !",
    },
    error: {
      content: "Une erreur s'est produite. Merci de retenter le coup...",
    },
    button: {
      content: "Envoyer",
    },
  },
};
