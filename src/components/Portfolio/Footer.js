import React from "react";
import { Link as Scroll } from "react-scroll";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: ${theme.color.primary};
  padding-bottom: 2em;
  .name {
    cursor: pointer;
    text-transform: initial;
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${theme.color.primary};
    &:hover {
      animation: pulse;
      animation-duration: 0.5s;
    }
    &:active {
      color: ${theme.color.secondary};
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://twitter.com/BoomiShirin">Twitter</a>
      <a href="https://www.linkedin.com/in/shirin-boomi/">LinkedIn</a>
      <Scroll className="name" to="bio" smooth spy>
        Shirin Boomi
      </Scroll>
      <a href="https://github.com/Shishouille">Github</a>
      <a href="mailto:shirin.boomi.dev@gmail.com">Mail</a>
    </StyledFooter>
  );
};

export default Footer;
