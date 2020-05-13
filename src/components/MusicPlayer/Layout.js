import React from "react";
import styled, { keyframes } from "styled-components";
import { musicPlayer as theme } from "../../themes";

import Tabs from "./Tabs";
import Status from "./Status";

const heartBeat = keyframes`
from { 
  transform: scale(.75); 
  }
  20% { 
  transform: scale(1); 
  }
  40% { 
  transform: scale(.75); 
  }
  60% { 
  transform: scale(1); 
  }
  80% { 
  transform: scale(.75); 
  }
  to { 
  transform: scale(.75); 
  }
`;

const StyledLayout = styled.div`
  min-height: 100vh;
  color: ${theme.color.primary};
  font-family: ${theme.fontFamily.text};
  background: radial-gradient(
    circle,
    rgba(11, 18, 59, 1) 10%,
    rgba(9, 14, 33, 1) 90%
  );
  .heartbeat {
    &:hover,
    &:focus {
      animation-name: ${heartBeat};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
  }
  svg {
    cursor: pointer;
  }
  main {
    width: 100%;
    display: flex;
    min-height: 98vh;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Tabs />
      <main>
        <Status />
        {children}
      </main>
    </StyledLayout>
  );
};

export default Layout;
