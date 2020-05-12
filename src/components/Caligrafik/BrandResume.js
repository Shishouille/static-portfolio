import React from "react";
import styled from "styled-components";
import { caligrafik as theme } from "../../themes";

const StyledBrandResume = styled.article`
  margin-left: 0.5em;
  margin-top: 1em;
  h5,
  p {
    font-family: ${theme.fontFamily.text};
    font-weight: normal;
  }
  h2 {
    font-family: ${theme.fontFamily.title};
  }
  @media (min-width: 768px) {
    width: 50%;
    margin: auto;
    h2 {
      font-size: 2.5em;
      font-weight: 200;
      line-height: 1.2em;
      margin-bottom: 1em;
    }
  }
`;
const BrandResume = () => {
  return (
    <StyledBrandResume>
      <h5>Who we are</h5>
      <h2>We are Caligrafik, an illustration agency with a different spin.</h2>
      <p>
        We work with talented artists around the world and top-tier printing
        companies to make custom digital artwork, printed on fine art materials,
        affordable and convenient.
      </p>
    </StyledBrandResume>
  );
};

export default BrandResume;
