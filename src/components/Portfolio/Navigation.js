import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import { Link as Scroll } from "react-scroll";

const StyledNavigation = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = () => {
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
          About
        </Scroll>
        <Scroll to="whatIDo" smooth>
          What I Do
        </Scroll>
        <Scroll to="projects" smooth>
          Projects
        </Scroll>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
