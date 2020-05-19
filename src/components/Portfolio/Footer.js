import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://twitter.com/BoomiShirin">Twitter</a>
      <a href="https://www.linkedin.com/in/shirin-boomi/">LinkedIn</a>
      <p>Shirin Boomi</p>
      <a href="https://github.com/Shishouille">Github</a>
      <a href="mailto:shirin.boomi.dev@gmail.com">Mail</a>
    </StyledFooter>
  );
};

export default Footer;
