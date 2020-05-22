import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element, Link as Scroll } from "react-scroll";

import { Icon, InlineIcon } from "@iconify/react";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";
import mailIcon from "@iconify/icons-feather/mail";
import messageFilled from "@iconify/icons-ant-design/message-filled";
import faceSatisfiedFilled from "@iconify/icons-carbon/face-satisfied-filled";

import Img from "gatsby-image";
// import photo from "../../images/portfolio/avatar.jpeg";
import cv from "../../images/portfolio/CV.png";

const StyledBio = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.primary};
  min-height: 100vh;
  margin: 1em 0;
  .bio-pic {
    display: flex;
    justify-content: center;
    align-items: center;
    .bio-photo {
      box-shadow: 0px 10px 15px 5px rgba(125, 125, 125, 0.75);
      border-radius: 1em;
      width: 50%;
      margin: auto;
    }
  }

  h1 {
    font-size: 4em;
  }
  nav {
    margin: 2em 0;
    svg {
      margin-right: 1em;
      transition: opacity 0.2s ease;
      &:hover {
        opacity: 0.7;
        animation: heartBeat;
        animation-duration: 1s;
      }
    }
  }
  .buttons {
    display: flex;
    width: 70%;
    justify-content: space-between;
    text-align: center;
    .cv {
      border: 2px solid ${theme.color.primary};
      color: ${theme.color.primary};
      text-decoration: none;
      padding: 0.5em 0.75em;
      border-radius: 0.3em;
      cursor: pointer;
      text-transform: uppercase;
      transition: background 0.2s ease-in;
      &:hover {
        background: ${theme.color.primary};
        color: white;
      }
    }
    button {
      background: ${theme.color.secondary};
      color: white;
      border: 2px solid ${theme.color.secondary};
      padding: 0.5em 0.75em;
      border-radius: 0.3em;
      cursor: pointer;
      text-transform: uppercase;
      transition: background 0.2s ease-in;
      &:hover {
        background: white;
        color: ${theme.color.secondary};
      }
    }
  }

  div {
    width: 50%;
  }
  @media (max-width: 1024px) {
    .buttons {
      justify-content: center;
      flex-direction: column;
      width: 80%;
      margin: auto;
      button {
        margin: 1em 0;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: 2em;
    }
    div {
      width: 100%;
      margin: 1.5em;
    }
    
  }
`;
const Bio = ({ locale, fluid }) => {
  return (
    <Element name="bio">
      <StyledBio className="animate__animated animate__fadeIn">
        <div className="bio-pic">
          <Img className="bio-photo" fluid={fluid} alt="" />
        </div>
        <div>
          <section>
            <h1>{locale.title}</h1>
            <nav>
              <a href="https://github.com/Shishouille">
                <Icon
                  icon={githubFilled}
                  color={theme.color.primary}
                  width="3em"
                />
              </a>
              <a href="https://www.linkedin.com/in/shirin-boomi/">
                <Icon
                  icon={linkedinFilled}
                  color={theme.color.primary}
                  width="3em"
                />
              </a>
              <a href="https://twitter.com/BoomiShirin">
                <Icon
                  icon={twitterCircleFilled}
                  color={theme.color.primary}
                  width="3em"
                />
              </a>
              <a href="mailto:shirin.boomi.dev@gmail.com">
                <Icon icon={mailIcon} color={theme.color.primary} width="3em" />
              </a>
            </nav>
          </section>
          <section>
            <h2>{locale.subtitle}</h2>
            <p>{locale.content}</p>
            <nav className="buttons">
              <button>
                <Scroll to="contact" smooth>
                  <InlineIcon icon={messageFilled} hFlip />
                  {locale.button}
                </Scroll>
              </button>
              <a className="cv" href={cv} download>
                <InlineIcon icon={faceSatisfiedFilled} />
                {locale.cv}
              </a>
            </nav>
          </section>
        </div>
      </StyledBio>
    </Element>
  );
};

export default Bio;
