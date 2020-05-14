import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { pawfect as theme } from "../themes";

import Presentation from "../../src/components/Pawfect/Presentation";
import Description from "../../src/components/Pawfect/Description";

const StyledWrapper = styled.div`
  font-family: ${theme.fontFamily.text};
  min-height: 100vh;
`;

const Calligrafik = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledWrapper>
        <Presentation />
        <Description />
      </StyledWrapper>
    </>
  );
};

export default Calligrafik;
