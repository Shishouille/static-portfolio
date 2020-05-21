import React from "react";
import { useMediaQuery } from "react-responsive";
import styled, { keyframes } from "styled-components";
import { crope as theme } from "../../themes";

import logo from "../../images/crope/logo.png";

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin: auto;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a,
    p {
      margin: 1em;
    }
    a {
      color: white;
      text-decoration: none;
      &:hover {
        font-weight: bold;
      }
    }
    img {
      margin: auto;
      padding-right: 1em;
    }
  }
  .nav-quote {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5em;
    border: 2px solid ${theme.color.primary};
    p {
      margin: 0.3em 1.5em;
    }
  }
`;

const Navigation = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <StyledNavigation>
      <div className="nav">
        <img src={logo} alt="" />
        {isBigScreen && (
          <>
            <a href="">Services</a>
            <a href="">Cases</a>
            <a href="">Contact us</a>
          </>
        )}
      </div>
      {isBigScreen && (
        <div className="nav">
          <p>+1 845 621 78 49</p>
          <div className="nav-quote">
            <p>Get a quote</p>
          </div>
        </div>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
