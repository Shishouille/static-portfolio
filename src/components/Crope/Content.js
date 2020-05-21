import React from "react";
import styled, { keyframes } from "styled-components";
import { crope as theme } from "../../themes";

import main from "../../images/crope/main.png";

import Navigation from "./Navigation";
import Main from "./Main";

const Background = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  img {
    object-fit: cover;
    height: 100vh;
    min-width: 40%;
  }
  div {
    background: ${theme.color.bg};
    width: 60%;
    height: 100vh;
  }
  @media (max-width: 768px) {
    img {
      width: 20%;
    }
  }
`;

const StyledContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`;

const Content = () => {
  return (
    <StyledContent>
      <main>
        <Navigation />
        <Main />
      </main>
      <Background>
        <div />
        <img src={main} alt="" />
      </Background>
    </StyledContent>
  );
};

export default Content;
