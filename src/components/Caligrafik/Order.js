import React from 'react';
import styled from "styled-components";
import { caligrafik as theme } from '../../themes';

const StyledOrder = styled.div`
  text-align: center;
  border-bottom: 1px solid ${theme.color.primary};
  padding: 2em 0;
  h2 {
    font-family: ${theme.fontFamily.title};
    font-size: 2.5em;
    margin-bottom: 3em;
  }
  nav {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5em;
    a {
      all: unset;
      font-family: ${theme.fontFamily.text};
    }
  }

  @media (min-width: 768px) { 
    h2 {
      font-size: 5em;
      font-weight: 100;
      margin-bottom: 1em;
    }
  }
`;

const Order = () => {
  return (
    <StyledOrder>
      <h2>Order yours today</h2>
      <nav>
        <a href="">Caricatures</a>
        <a href="">Portraits</a>
        <a href="">Illustrations</a>
      </nav>
    </StyledOrder>
  )
}

export default Order;
