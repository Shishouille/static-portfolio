import React from "react";
import styled, { keyframes } from "styled-components";
import { chatBox as theme } from "../../themes";
import { Icon } from "@iconify/react";
import arrowRight from "@iconify/icons-cil/arrow-right";

import bot from "../../images/chatbox/bot.png";

const translateLeft = keyframes`
from { 
  transform: translate(0,  0); 
  }
50% { 
transform: translate(1em, 0); 
}
to { 
transform: translate(0, 0); 
}
`;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 90vh;
  margin: auto;
  div {
    width: 100%;
    margin: 1em 0;
  }
  h1,
  h2 {
    font-family: ${theme.fontFamily.title};
    text-transform: capitalize;
  }
  h1 {
    color: white;
    margin-bottom: 0.2em;
  }
  h2 {
    color: ${theme.color.primary};
    font-weight: normal;
  }
  p {
    color: ${theme.color.primary};
  }
  button {
    border-radius: 2em;
    letter-spacing: 0.3em;
    background: ${theme.color.button};
    text-transform: uppercase;
    color: white;
    padding: 0.8em 2em;
    border: 1px solid ${theme.color.primary};
    box-shadow: 0px 1px 8px 1px ${theme.color.primary};
    cursor: pointer;
    position: relative;
    z-index: 1;
    &:hover {
      svg {
        animation: ${translateLeft} 0.5s infinite;
      }
    }
  }
  svg {
    position: absolute;
    z-index: 2;
    top: -9%;
    right: -2.5em;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: start;
    div {
      width: 50%;
    }
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <div>
        <h1>Chatbot Service</h1>
        <h2>Concept</h2>
        <p>
          Discover enterprises solution to lead to a better client conversion.
          Our chatbot is 100% flexible, customizable and grow as you grow.
        </p>
        <button type="button">
          View Demo
          <Icon icon={arrowRight} color="white" width="3.5em" />
        </button>
      </div>
      <div>
        <img src={bot} alt="" />
      </div>
    </StyledMain>
  );
};

export default Main;
