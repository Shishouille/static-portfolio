import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Link } from "gatsby";
import { Link as Scroll } from "react-scroll";

const StyledNavigation = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  color: ${theme.color.primary};
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 1em;
  a {
    margin: 0 1em;
    color: ${theme.color.primary};
    text-decoration: none;
  }
`;

const Navigation = ({ locale }) => {
  return (
    <StyledNavigation>
      <div>
        <Scroll to="bio" smooth>
          Shirin Boomi
        </Scroll>
        <Link to="/en">EN</Link>
        <Link to="/fr">FR</Link>
      </div>
      <div>
        <Scroll to="about" smooth>
          {locale[0]}
        </Scroll>
        <Scroll to="whatIDo" smooth>
        {locale[1]}
        </Scroll>
        <Scroll to="projects" smooth>
        {locale[2]}
        </Scroll>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
