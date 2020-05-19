import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";

const StyledAbout = styled.article`
  background: ${theme.color.primary};
  color: white;
  display: flex;
  align-items: center;
  .about-text {
    width: 75%;
  }
  .about-imgs {
    img {
      width: 25%;
    }
  }
`;
const About = ({ locale }) => {
  return (
    <Element name="about">
      <StyledAbout>
        <article className="about-text">
          <h2>{locale.aboutMe.title}</h2>
          <p>{locale.aboutMe.content}</p>
          <h2>{locale.whyMe.title}</h2>
          <p>{locale.whyMe.content}</p>
        </article>
        <article className="about-imgs">
          <img src="https://oclock.io/images/logo-short.66184eb7.svg" alt="" />
          <img
            src="https://www.univ-reims.fr/theme_front/theme_front_1/image/bandeau/logo.png"
            alt=""
          />
        </article>
      </StyledAbout>{" "}
    </Element>
  );
};

export default About;
