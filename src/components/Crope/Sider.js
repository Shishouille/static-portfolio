import React from "react";
import styled, { keyframes } from "styled-components";
import { crope as theme } from "../../themes";

import sider from "../../images/crope/sider.png";

const StyledSider = styled.div`
  width: 10%;
  background: ${theme.color.sider};
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    padding: 1em;
  }
  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 50%;
    a {
      transform: rotate(180deg);
      writing-mode: vertical-rl;
      text-orientation: mixed;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
  @media (max-width: 768px) {
    height: 100%;
    img {
      padding: 0;
      margin: 0.1em;
    }
  }
`;

const Bar = styled.span`
  height: 1px;
  border-radius: 0.3em;
  width: 4em;
  margin-bottom: 3em;
  background: white;
  transform: rotate(90deg);
`;

const Sider = () => {
  return (
    <StyledSider>
      <img src={sider} alt="" />
      <nav>
        <a href="">Behance</a>
        <a href="">Linkedin</a>
        <Bar />
      </nav>
    </StyledSider>
  );
};

export default Sider;
