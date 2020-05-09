import React from 'react';

import portrait1 from '../../images/caligrafik/portrait1.png';
import portrait2 from '../../images/caligrafik/portrait2.png';
import portrait3 from '../../images/caligrafik/portrait3.png';

import styled from "styled-components";
import { caligrafik as theme } from '../../themes';

import { Icon, InlineIcon } from '@iconify/react';
import arrowRight from '@iconify/icons-cil/arrow-right';


const StyledPortrait = styled.div`
  display: flex;
  flex-direction: column;
  .switch {
    order: 2;
  }
  .portrait-img {
    position: relative;
    width: 100%;
    svg {
      position: absolute;
      bottom: 3em;
      right: 2em;
    }
  }
  .portrait-description {
    margin-left: .4em;
    h3 {
      font-family: ${theme.fontFamily.title};
      font-weight: 100;
      margin-bottom: .5em;
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
    <div className={`portrait-img ${order && 'switch' }`}>
    <img src={image} alt=""/>
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
      <Portrait title="Portraiture" subtitle="from USD 209" image={portrait1} arrow />
      <Portrait title="Caricatures" subtitle="from USD 209" image={portrait2} order />
      <Portrait title="Illustrations" subtitle="on demand" image={portrait3} />
    </StyledPortraitCategory>
  )
}

export default PortraitCategory;
