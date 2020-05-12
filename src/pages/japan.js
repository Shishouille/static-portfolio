import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { japan as theme } from "../themes";

import Left from "../../src/components/Japan/Left";
import Center from "../../src/components/Japan/Center";
import Right from "../../src/components/Japan/Right";

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: ${theme.fontFamily.text};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 0.5fr repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  div {
    border: 1px solid black;
  }

  .post {
    grid-area: 2 / 3 / 5 / 4;
  }
  .menu-icon {
    grid-area: 1 / 1 / 2 / 2;
  }
  .title {
    grid-area: 1 / 2 / 2 / 3;
  }
  .lang {
    grid-area: 1 / 3 / 2 / 4;
  }
  .japan {
    grid-area: 2 / 2 / 5 / 3;
  }
  .number {
    grid-area: 2 / 1 / 3 / 2;
  }
  .text {
    grid-area: 3 / 1 / 4 / 2;
  }
  .mail {
    grid-area: 4 / 1 / 5 / 2;
  }
`;

const Japan = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <StyledWrapper>
      <Left />
      <Center />
      <Right />
    </StyledWrapper>
  </>
);

export default Japan;
