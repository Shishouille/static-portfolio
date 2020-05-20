import React, { useEffect, useRef, useState } from "react";
import Headroom from 'react-headroom';
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
  background: white;
  padding: 1em;
  .name {
    font-size: 1.5em;
  }
  a {
    margin: 0 1em;
    color: ${theme.color.primary};
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
  }
  .is-active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 75%;
      height: .1em;
      bottom: -.5em;
      left: 12.5%;
      background: ${theme.color.secondary};
    }
  }
`;

const Navigation = ({ locale }) => {
  return (
    <Headroom>
    <StyledNavigation className="animate__animated animate__slideInDown">

      <div>
        <Scroll className="name" to="bio" smooth spy>
          Shirin Boomi
        </Scroll>
        <Link activeClassName="is-active" to="/fr">FR</Link>
        <Link activeClassName="is-active" to="/en">EN</Link>
      </div>
      <div>
        <Scroll to="bio" activeClass="is-active" smooth spy>
          {locale[0]}
        </Scroll>
        <Scroll to="about" activeClass="is-active" smooth spy>
          {locale[1]}
        </Scroll>
        <Scroll to="whatIDo" activeClass="is-active" smooth spy>
          {locale[2]}
        </Scroll>
        <Scroll to="projects" activeClass="is-active" smooth spy>
          {locale[3]}
        </Scroll>
        <Scroll to="contact" activeClass="is-active" smooth spy>
          {locale[4]}
        </Scroll>
      </div>

    </StyledNavigation>
    </Headroom>
  );
};

export default Navigation;
