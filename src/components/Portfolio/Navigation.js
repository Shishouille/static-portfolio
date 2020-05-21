import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Headroom from "react-headroom";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Link } from "gatsby";
import { Link as Scroll } from "react-scroll";
import { Icon, InlineIcon } from "@iconify/react";
import bxsGrid from "@iconify/icons-bx/bxs-grid";

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
    &:hover {
      color: ${theme.color.secondary};
    }
  }
  .is-active {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 75%;
      height: 0.1em;
      bottom: -0.5em;
      left: 12.5%;
      background: ${theme.color.secondary};
    }
  }
`;

const StyledMobile = styled.nav`
  .grid-icon {
    border-radius: 50%;
    width: fit-content;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    color: ${theme.color.primary};
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 5px 20px 1px rgba(0, 20, 90, 1);
    margin: 0.2em;
  }
  a,
  svg {
    margin: 1em;
  }
  nav {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 1;
    position: fixed;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: column wrap;
    color: ${theme.color.primary};
  }
`;

const Navigation = ({ locale }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const [menu, setMenu] = useState(false);
  return (
    <>
      {isBigScreen && (
        <Headroom>
          <StyledNavigation className="animate__animated animate__slideInDown">
            <div>
              <Scroll className="name" to="bio" smooth spy>
                Shirin Boomi
              </Scroll>
              <Link activeClassName="is-active" to="/fr">
                FR
              </Link>
              <Link activeClassName="is-active" to="/en">
                EN
              </Link>
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
      )}
      {!isBigScreen && (
        <StyledMobile>
          {!menu && (
            <div className="grid-icon">
              <Icon
                icon={bxsGrid}
                onClick={() => setMenu(!menu)}
                height="1.5em"
              />
            </div>
          )}
          {menu && (
            <nav>
              <Icon
                icon={bxsGrid}
                onClick={() => setMenu(!menu)}
                height="1.5em"
              />
              <Scroll
                to="bio"
                activeClass="is-active"
                onClick={() => setMenu(!menu)}
                spy
              >
                {locale[0]}
              </Scroll>
              <Scroll
                to="about"
                activeClass="is-active"
                onClick={() => setMenu(!menu)}
                spy
              >
                {locale[1]}
              </Scroll>
              <Scroll
                to="whatIDo"
                activeClass="is-active"
                onClick={() => setMenu(!menu)}
                spy
              >
                {locale[2]}
              </Scroll>
              <Scroll
                to="projects"
                activeClass="is-active"
                onClick={() => setMenu(!menu)}
                spy
              >
                {locale[3]}
              </Scroll>
              <Scroll
                to="contact"
                activeClass="is-active"
                onClick={() => setMenu(!menu)}
                spy
              >
                {locale[4]}
              </Scroll>
            </nav>
          )}
        </StyledMobile>
      )}
    </>
  );
};

export default Navigation;
