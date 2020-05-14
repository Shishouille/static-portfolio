import React, { useState } from "react";
import MediaQuery from "react-responsive";

import styled from "styled-components";
import { caligrafik as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import menuIcon from "@iconify/icons-jam/menu";

const StyledHeaderDesktop = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 0;
  border-bottom: 2px solid ${theme.color.dark};
  .caligrafik {
    margin: 0;
    font-weight: bold;
    font-size: 2em;
  }
  h2 {
    font-family: ${theme.fontFamily.title};
  }
  a {
    all: unset;
    margin: 0 3em;
    width: 100%;
    cursor: pointer;
    &:hover {
      text-transform: uppercase;
    }
  }
  .burger-menu {
    margin-left: 1em;
  }
  .cart {
    display: flex;
    p {
      all: unset;
      margin-right: 1em;
    }
  }
`;
const StyledHeaderMobile = styled.nav`
  .caligrafik {
    font-weight: bold;
    font-size: 1.2em;
  }
  .menu-close {
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1em;
    .burger-menu {
      border: 1px solid ${theme.color.dark};
      border-radius: 0.3em;
      padding: 0.3em;
      height: 2em;
      width: 2em;
      svg {
        width: 100%;
        margin: auto;
      }
    }
  }
  .fixed-menu {
    all: unset;
    position: fixed;
    overflow: hidden;
    height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    width: 100vw;
    top: 0;
    left: 0;
    background-color: ${theme.color.primary};
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    span {
      border-radius: 50%;
      border: 1px solid white;
      padding: 0.6em;
      width: 1em;
      height: 1em;
      text-align: center;
      vertical-align: -0.125em;
    }
    .menu-navigation {
      all: unset;
      display: flex;
      flex-direction: column;
      height: 50%;
      justify-content: space-around;
      .menu-item {
        list-style-type: none;
        display: block;
        text-align: center;
      }
    }
  }
`;

const MenuDesktop = () => (
  <StyledHeaderDesktop>
    <div className="burger-menu">
      <p className="caligrafik">caligrafik.</p>
    </div>
    <div className="menu-navigation">
      <a className="menu-item" href="">
        Caricatures
      </a>
      <a className="menu-item" href="">
        Portraits
      </a>
      <a className="menu-item" href="">
        Illustration
      </a>
    </div>
    <div className="cart">
      <p>Account •</p>
      <p>Cart</p>
    </div>
  </StyledHeaderDesktop>
);

const MenuMobile = () => {
  const [menu, isOpened] = useState(false);
  return (
    <StyledHeaderMobile>
      <div className="menu-close">
        <div className="burger-menu" onClick={() => isOpened(!menu)}>
          <InlineIcon icon={menuIcon} />
        </div>
        <div className="caligrafik">
          <p>caligrafik.</p>
        </div>
      </div>
      {menu && (
        <menu className="fixed-menu">
          <div className="caligrafik">
            <p>caligrafik.</p>
          </div>
          <ul className="menu-navigation">
            <li className="menu-item">Caricatures</li>
            <li className="menu-item">Portraits</li>
            <li className="menu-item">Illustration</li>
          </ul>
          <div>Account • Cart</div>
          <span onClick={() => isOpened(false)}>X</span>
        </menu>
      )}
    </StyledHeaderMobile>
  );
};

const Header = () => {
  return (
    <>
      <MediaQuery maxDeviceWidth={768}>
        <MenuMobile />
      </MediaQuery>

      <MediaQuery minDeviceWidth={768}>
        <MenuDesktop />
      </MediaQuery>
    </>
  );
};

export default Header;
