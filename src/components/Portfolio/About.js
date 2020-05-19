import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";

const StyledAbout = styled.article`
  background: ${theme.color.primary};
  height: 100vh;
  padding: 2em;
  color: white;
  display: flex;
  align-items: center;
  h2 {
    font-size: 2.5em;
  }
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
          <div>
            <p>J'ai fait ça et puis ça</p>
          </div>
        </article>
      </StyledAbout>{" "}
    </Element>
  );
};

export default About;
