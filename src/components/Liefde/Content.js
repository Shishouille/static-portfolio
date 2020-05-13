import React from "react";
import styled from "styled-components";
import { liefde as theme } from "../../themes";

import main from "../../images/liefde/main.png";

const StyledContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  width: 90%;
  img {
    width: 100%;
    filter: drop-shadow(0 0 0.75rem #E9E9FB);
  }
  .content {
    width: 100%;
    color: ${theme.color.primary};
    margin-bottom: 1em;
    h1 {
        font-family: ${theme.fontFamily.title};
        text-transform: capitalize;
        font-size: 5em;
        position: relative;
        /* &::after {
          content: "";
          position: absolute;
          background: ${theme.color.primary};
          left: 0;
          top: 0;
          width: 2px;
          height: 75px;
          transform: rotate(15deg);
        } */
      }
      button {
        cursor: pointer;
        background: ${theme.color.button};
        color: white;
        font-weight: bold;
        border: none;
        border-radius: .5em;
        padding: .5em 1em;
    }
  }
  @media (min-width: 768px) {
    width: 90%;
    flex-direction: row;
    img {
      width: 50%;
    }
    .content {
      width: 30%;
    }
  }
`;

const Navigation = () => {
  return (
    <StyledContent>
      <div className="content">
        <h1>Do for love</h1>
        <p>The city providing the striking backdrop of love stories.</p>
        <button>Find out</button>
      </div>
      <img src={main} alt="" />
    </StyledContent>
  );
};

export default Navigation;
