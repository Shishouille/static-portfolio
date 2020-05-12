import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { caligrafik as theme } from "../themes";

import Navigation from "../../src/components/ChatBox/Navigation";
import Main from "../../src/components/ChatBox/Main";
import Footer from "../../src/components/ChatBox/Footer";

const StyledWrapper = styled.div`
  padding-top: 1em;
  min-height: 100vh;
  font-family: ${theme.fontFamily.text};
  background-image: linear-gradient(
    to left top,
    #46108a,
    #3a0e7c,
    #2e0b6f,
    #220861,
    #170654
  );
  .gutter {
    width: 80%;
    margin: auto;
  }
`;

const ChatBox = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Mukta:wght@200&family=Poppins&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <StyledWrapper>
      <div className="gutter">
        <Navigation />
        <Main />
      </div>
      <Footer />
    </StyledWrapper>
  </>
);

export default ChatBox;
