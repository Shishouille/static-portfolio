import React from "react";
import styled from "styled-components";
import { pawfect as theme } from "../../themes";

const StyledNavigation = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  a {
    all: unset;
    cursor: pointer;
    opacity: 50%;
    color: white;
    &:hover {
      opacity: 100%;
      font-weight: bold;
    }
  }
  .active {
    opacity: 100%;
    font-weight: bold;
    position: relative;
    width: fit-content;
    &::before {
      content: "";
      position: absolute;
      width: 120%;
      height: 3px;
      background: white;
      bottom: -0.5em;
      left: -10%;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <a href="" className="active">
        Home
      </a>
      <a href="">Accessories</a>
      <a href="">Food Supplies</a>
      <a href="">Contact</a>
    </StyledNavigation>
  );
};

export default Navigation;
