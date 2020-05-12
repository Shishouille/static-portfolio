import React from "react";

import styled from "styled-components";
import { beatrizRamo as theme } from "../../themes";

const StyledNav = styled.nav`
  text-align: center;
  a {
    all: unset;
    margin-left: 0.7em;
  }
  .logo {
    display: flex;
    justify-content: center;
    margin-bottom: 1em;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    .logo {
      display: block;
      width: 5em;
      span {
        text-align: center;
        display: inline-block;
        width: 50%;
        padding: 0.4em;
      }
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <div className="logo">
        <span>R</span>
        <span>A</span>
        <span>M</span>
        <span>O</span>
      </div>
      <div>
        <a href="">Home</a>
        <a href="">Portfolio</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </StyledNav>
  );
};

export default Navigation;
