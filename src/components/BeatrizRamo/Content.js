import React from 'react'
import styled from "styled-components";
import { beatrizRamo as theme } from '../../themes';

const StyledContent = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 1.6em;
  h1 {
    font-family: ${theme.fontFamily.title};
    text-transform: uppercase;
  }
`;

const Content = () => {
  return (
    <StyledContent>
      <h1>Beatriz Ramo</h1>
      <p>My work is characterized by the almost constant femal presence, seasoned with natural atmospheres, many colors and light surreal touches.</p>
    </StyledContent>
  )
}

export default Content;
