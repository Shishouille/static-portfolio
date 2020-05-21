import React from "react";
import styled, { keyframes } from "styled-components";
import { crope as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import playFilledAlt from "@iconify/icons-carbon/play-filled-alt";

const wave = keyframes`
  0% {
    width: 2em;
    height: 2em;
  }
  40% {
    width: 5em;
    height: 5em;
  }
  100% {
    width: 2em;
    height: 2em;
  }
`;

const shadow = keyframes`
  0% {
    box-shadow: 0px 0px 1px 2px ${theme.color.primary};
  }
  40% {
    box-shadow: 0px 0px 20px 10px ${theme.color.primary};
  }
  100% {
    box-shadow: 0px 0px 1px 2px ${theme.color.primary};
  }
`;

const StyledMain = styled.main`
  width: 80%;
  margin: 5% auto;
  .text {
    width: 70%;
    padding-bottom: 2em;
  }
  .main-play {
    border-radius: 50%;
    cursor: pointer;
    padding: 1em;
    background: ${theme.color.primary};
    width: 4em;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
    position: relative;
    /* box-shadow: 0px 0px 20px 5px ${theme.color.primary}; */
    animation: ${shadow} 1.5s infinite;
    &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    box-shadow: 0px 0px 20px 5px ${theme.color.primary};
    animation: ${wave} 1.5s infinite;
  }}
  h1 {
    font-size: 4.5em;
  }
  .about {
    display: flex;
    text-transform: uppercase;
  .video {
    color: ${theme.color.primary};
    text-transform: none;
  }
  .about-text {
    padding-left: 1em;
    p {
      margin-bottom: .5em;
    }
    .bar {
    background: white;
    height: 1px;
    width: 100%;
    margin-bottom: .5em;
  }
  }
  }
  p {
    font-weight: lighter;
  }

  strong {
    color: ${theme.color.primary};
  }
  @media (max-width: 768px) {
    margin: 1em;
    .text {
      width: 100%;
    }
    h1 {
      font-size: 2em;
    }
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <div className="text">
        <p> ――― Creative ideas</p>
        <h1>
          Craft Design Solutions<strong>.</strong>{" "}
        </h1>
        <p>
          We create new technologies for you business thanks to our wonderful
          team of professionals.
        </p>
      </div>
      <div className="about">
        <div className="main-play">
          <Icon icon={playFilledAlt} color="white" height="2em" />
        </div>
        <div className="about-text">
          <p>About us</p>
          <div className="bar" />
          <p className="video">Promotion video</p>
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
