import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { liefde as theme } from "../themes";

import Navigation from "../../src/components/Liefde/Navigation";
import Content from "../../src/components/Liefde/Content";

const StyledWrapper = styled.div`
  min-height: 100vh;
  font-family: ${theme.fontFamily.text};
  position: relative;
`;

const TrapezeBackground = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  bottom: 0;
  right: 45%;
  z-index: -2;
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  background: ${theme.color.bg};
`;

const Liefde = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Muli&family=Playfair+Display:wght@800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <StyledWrapper>
      <TrapezeBackground />
      <Navigation />
      <Content />
    </StyledWrapper>
  </>
);

export default Liefde;
