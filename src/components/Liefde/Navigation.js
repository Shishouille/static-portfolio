import React, { useState } from "react";
import MediaQuery from "react-responsive";

import { Icon } from "@iconify/react";
import roundMenu from "@iconify/icons-ic/round-menu";

import styled from "styled-components";
import { liefde as theme } from "../../themes";

import logo from "../../images/liefde/logo.png";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  img {
    cursor: pointer;
    margin: 0;
  }
  .active {
    position: relative;
    color: ${theme.color.primary};
    font-weight: bold;
    &::after {
      content: "";
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      right: -0.5em;
      top: 0.15em;
      background: #6a90e5;
    }
  }
  a {
    all: unset;
    cursor: pointer;
    color: ${theme.color.secondary};
    &:hover {
      color: ${theme.color.primary};
    }
  }
  .menu-desktop {
    width: 70%;
    display: flex;
    justify-content: space-around;
  }
  .menu-hidden {
    border-radius: 50%;
    background: ${theme.color.primary};
    width: 3em;
    height: 3em;
    padding: 0.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .menu-showed {
    position: fixed;
    text-align: end;
    padding: 2em 1.75em;
    height: 55%;
    border-bottom-left-radius: 25%;
    border-bottom-right-radius: 25%;
    nav {
      clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      a {
        margin: 0.8em;
      }
    }
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    background: ${theme.color.bg};
  }
`;

const Navigation = () => {
  const [isOpen, open] = useState(false);
  return (
    <StyledNavigation>
      <img src={logo} alt="" />
      <MediaQuery minDeviceWidth={768}>
        <div className="menu-desktop">
          <a href="" className="active">
            Home
          </a>
          <a href="">Product</a>
          <a href="">About us</a>
          <a href="">Log in</a>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={768}>
        <div className="menu-hidden">
          <Icon
            icon={roundMenu}
            color="white"
            height="1.5em"
            onClick={() => open(!isOpen)}
          />
        </div>
        {isOpen && (
          <div className="menu-showed">
            <Icon
              icon={roundMenu}
              color={theme.color.primary}
              height="1.5em"
              onClick={() => open(!isOpen)}
            />
            <nav>
              <a href="" className="active">
                Home
              </a>
              <a href="">Product</a>
              <a href="">About us</a>
              <a href="">Log in</a>
            </nav>
          </div>
        )}
      </MediaQuery>
    </StyledNavigation>
  );
};

export default Navigation;
