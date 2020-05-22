import React from "react";

import portrait1 from "../../images/caligrafik/portrait1.png";
import portrait2 from "../../images/caligrafik/portrait2.png";
import portrait3 from "../../images/caligrafik/portrait3.png";

import styled, { keyframes } from "styled-components";
import { caligrafik as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import arrowRight from "@iconify/icons-cil/arrow-right";

const translateLeft = keyframes`
from { 
  transform: translate(0,  0); 
  }
50% { 
transform: translate(1em, 0); 
}
to { 
transform: translate(0, 0); 
}
`;

const zoomIn = keyframes`
  from { 
  transform: scale(1,  1); 
  }
  50% {
    transform: scale(1.1, 1.1); 
  }
  to { 
  transform: scale(1, 1); 
  }
`;

const contrast = keyframes`
  from { 
    filter: contrast(100%);
  }
  50% {
    filter: contrast(120%);
  }
  to { 
    filter: contrast(100%);
  }
`;

const StyledPortrait = styled.div`
  display: flex;
  flex-direction: column;
  .switch {
    order: 2;
  }
  .portrait-img {
    position: relative;
    width: 100%;
    img {
      cursor: pointer;
      &:hover {
        animation: ${contrast} .5s ease-in-out;
      }
    }
    svg {
      position: absolute;
      cursor: pointer;
      bottom: 3em;
      right: 2em;
      &:hover {
        animation-name: ${translateLeft};
        animation-duration: 1s;
      }
    }
  }
  .portrait-description {
    margin-left: 0.4em;
    h3 {
      font-family: ${theme.fontFamily.title};
      font-weight: 100;
      margin-bottom: 0.5em;
    }
    p {
      color: ${theme.color.dark};
      font-family: ${theme.fontFamily.text};
    }
  }
  @media (min-width: 768px) {
    width: 25%;
    margin: 1em 2em;
  }
`;
const StyledPortraitCategory = styled.section`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Portrait = ({ title, subtitle, image, arrow, order }) => (
  <StyledPortrait>
    <div className={`portrait-img ${order && "switch"}`}>
      <img src={image} alt="" />
      {arrow && <Icon icon={arrowRight} color="white" />}
    </div>
    <div className="portrait-description">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </StyledPortrait>
);

const PortraitCategory = () => {
  return (
    <StyledPortraitCategory>
      <Portrait
        title="Portraiture"
        subtitle="from USD 209"
        image={portrait1}
        arrow
      />
      <Portrait
        title="Caricatures"
        subtitle="from USD 209"
        image={portrait2}
        order
      />
      <Portrait title="Illustrations" subtitle="on demand" image={portrait3} />
    </StyledPortraitCategory>
  );
};

export default PortraitCategory;
