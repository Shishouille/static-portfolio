import React from "react";
import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import logo from "../../images/art-world/logo.png";

const StyledNavigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  a {
    color: grey;
    text-decoration: none;
    margin-right: 2em;
  }
  .active {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 0.3em;
  }
`;

const Navigation = () => (
  <StyledNavigation>
    <div>
      <img src={logo} alt="" />
    </div>
    <div>
      <a href="" className="active">
        Home
      </a>
      <a href="">Shop</a>
      <a href="">About</a>
      <a href="">Review</a>
      <a href="">Blog</a>
      <a href="">Contact</a>
      <button type="button" className="button">
        Get Started
      </button>
    </div>
  </StyledNavigation>
);

export default Navigation;
