import React from "react";
import { Helmet } from "react-helmet";

import styled, { keyframes } from "styled-components";
import { crope as theme } from "../themes";

import Sider from "../../src/components/Crope/Sider";
import Content from "../../src/components/Crope/Content";

const StyledWrapper = styled.div`
  display: flex;
  color: white;
  height: 100vh;
  font-family: ${theme.fontFamily.text};
`;

const Crope = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledWrapper>
        <Sider />
        <Content />
      </StyledWrapper>
    </>
  );
};

export default Crope;
