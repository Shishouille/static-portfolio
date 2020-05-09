import React from 'react';
import styled from "styled-components";
import { caligrafik as theme } from '../../themes';

const StyledMainTitle = styled.div`
  h1, h2 {
    font-family: ${theme.fontFamily.title};
    font-weight: 100;
  }
  h1 {
    text-transform: uppercase;
    font-size: 2.5em;
    text-align: center;
  }
  h2 {
    width: 75%;
    margin: auto;
    padding-bottom: .5em;
  }
  @media (min-width: 768px) {
    font-size: 5vw;
    h2 {
      width: 65%;
      padding-bottom: 3em;
    }
  }
`;

const MainTitle = () => {
  return (
    <StyledMainTitle>
      <h1>Custom Artwork - On Demand</h1>
      <h2>that delights art lovers and embelishes spaces</h2>
    </StyledMainTitle>
  )
}

export default MainTitle;
