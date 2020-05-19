import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element, Link as Scroll } from "react-scroll";

import { Icon, InlineIcon } from "@iconify/react";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import twitterCircleFilled from "@iconify/icons-ant-design/twitter-circle-filled";
import linkedinFilled from "@iconify/icons-ant-design/linkedin-filled";

const StyledBio = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.color.primary};
  height: 100vh;
  h1 {
    font-size: 4em;
  }
  nav {
    margin: 2em 0;
    svg {
      margin-right: 1em;
    }
  }
  button {
    background: ${theme.color.secondary};
    color: white;
    border: none;
    padding: 0.5em 0.75em;
    border-radius: 0.3em;
    cursor: pointer;
    text-transform: uppercase;
  }
  div {
    width: 50%;
  }
`;
const Bio = ({ locale }) => {
  return (
    <Element name="bio">
      <StyledBio>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <section>
            <h1>{locale.title}</h1>
            <nav>
              <a href="https://github.com/Shishouille">
                <Icon
                  icon={githubFilled}
                  color={theme.color.primary}
                  width="1.5em"
                />
              </a>
              <a href="https://www.linkedin.com/in/shirin-boomi/">
                <Icon
                  icon={linkedinFilled}
                  color={theme.color.primary}
                  width="1.5em"
                />
              </a>
              <a href="https://twitter.com/BoomiShirin">
                <Icon
                  icon={twitterCircleFilled}
                  color={theme.color.primary}
                  width="1.5em"
                />
              </a>
            </nav>
          </section>
          <section>
            <h2>{locale.subtitle}</h2>
            <p>{locale.content}</p>
            <button>
              <Scroll to="contact" smooth>
                {locale.button}
              </Scroll>
            </button>
          </section>
        </div>
      </StyledBio>
    </Element>
  );
};

export default Bio;
