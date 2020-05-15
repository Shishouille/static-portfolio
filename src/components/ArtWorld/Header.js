import React from "react";
import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import paint1 from "../../images/art-world/paint1.png";
import paint2 from "../../images/art-world/paint2.png";
import paint3 from "../../images/art-world/paint3.png";
import paint4 from "../../images/art-world/paint4.png";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header {
    width: 40%;
  }
  h1 {
    font-size: 3em;
  }
  .paints {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60%;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      right: 25%;
      top: 25%;
      width: 50%;
      padding-top: 50%;
      background: ${theme.color.bgWhite};
    }
    img {
      border: 2px solid black;
    }
    .header-img--lg {
      height: 50%;
      margin: 0.6em;
    }
    .header-img--md {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        height: 25%;
        margin: auto;
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .header {
      width: 100%;
      text-align: center;
    }
    .paints {
      width: 100%;
      flex-direction: column;
    }
    .buttons-display {
      display: flex;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <h1>Welcome to The art world!</h1>
        <p>Here, you can shop art prints and original paintings.</p>
        <div className="buttons-display">
          <button type="button" className="button">
            Get start now
          </button>
          <button type="button" className="button button--secondary">
            View Products
          </button>
        </div>
      </div>
      <div className="paints">
        <img src={paint1} alt="" className="header-img--lg" />
        <div className="header-img--md">
          <img src={paint2} alt="" />
          <img src={paint3} alt="" />
        </div>
        <img src={paint4} alt="" className="header-img--lg" />
      </div>
    </StyledHeader>
  );
};

export default Header;
