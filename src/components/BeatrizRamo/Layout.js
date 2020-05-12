import React from "react";

import styled from "styled-components";
import { beatrizRamo as theme } from "../../themes";

import Navigation from "./Navigation";
import Footer from "./Footer";

import main from "../../images/beatriz-ramo/mainbr.png";

const StyledWrapper = styled.div`
  position: relative;
  z-index: 3;
  background: transparent;
  font-family: ${theme.fontFamily.text};
  color: ${theme.color.primary};
  margin: 1em 2em;
  main {
    width: 100%;
  }
  @media (min-width: 768px) {
    main {
      width: 45%;
    }
  }
`;

const StyledBackground = styled.img`
  position: fixed;
  margin: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 50%;
  @media (min-width: 768px) {
    width: auto;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledBackground src={main} alt="" />
      <StyledWrapper>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </StyledWrapper>
    </>
  );
};

export default Layout;
