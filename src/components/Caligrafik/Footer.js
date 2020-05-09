import React from 'react';

import styled from "styled-components";
import { caligrafik as theme } from '../../themes';

import { Icon } from '@iconify/react';
import arrowDownAlt2 from '@iconify/icons-dashicons/arrow-down-alt2';



const StyledFooter = styled.footer`
  h5, li {
    font-family: ${theme.fontFamily.text};
  }
  h5 {
    color: ${theme.color.dark};
  }
  text-align: center;
  padding-bottom: 3em;
  ul {
    all: unset;
    list-style: none;
  }
  div {
    padding-bottom: 1em;
  }
  .caligrafik {
    font-weight: bold;
    font-size: 1.2em;
    width: 100%;
    padding: 1em 0;
  }
  background-color: ${theme.color.primary};
  @media (min-width: 768px) { 
    display: flex;
    justify-content: space-evenly;
    text-align: start;
    position: relative;
    &::after {
      position: absolute;
      content: " ";
      width: 3em;
      height: 3em;
      right: 1em;
      bottom: 1.5em;
      border-radius: 50%;
      background-color: black;
    }
    .caligrafik {
      width: auto;
    }
    div {
      padding: 1em 0;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="caligrafik">
        caligrafik.
      </div>
      <div>
        <h5>Useful</h5>
        <ul>
          <li>Privacy Policy</li>
          <li>Shipping and Returns</li>
          <li>Terms and Conditions</li>
          <li>Size chart</li>
          <li>Track Order</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h5>Social</h5>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h5>USD <Icon icon={arrowDownAlt2} color="black" /></h5>
        <h5>inches <Icon icon={arrowDownAlt2} color="black" /></h5>
      </div>
    </StyledFooter>
  )
}

export default Footer;