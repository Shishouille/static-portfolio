import React from "react";
import { Helmet } from "react-helmet";

import styled, { keyframes } from "styled-components";
import { artWorld as theme } from "../themes";

import Navigation from "../../src/components/ArtWorld/Navigation";
import Header from "../../src/components/ArtWorld/Header";
import Paintings from "../../src/components/ArtWorld/Paintings";
import Newsletter from "../../src/components/ArtWorld/Newsletter";
import Testimonies from "../../src/components/ArtWorld/Testimonies";
import FollowUs from "../../src/components/ArtWorld/FollowUs";
import Footer from "../../src/components/ArtWorld/Footer";

const turningStar = keyframes`
from { 
    transform: rotate(0);
  }
  50% { 
    transform: rotate(360deg);
  }
  70% {
    transform: scale(1); 
  }
  to { 
    transform: scale(.6); 
  }
`;

const turnLeft = keyframes`
from { 
    transform: translateX(0);
  }
  50% { 
    transform: translateX(.5em);
  }
  to { 
    transform: translateX(0);
  }
`;

const turnRight = keyframes`
from { 
    transform: translateX(0);
  }
  50% { 
    transform: translateX(-.5em);
  }
  to { 
    transform: translateX(0);
  }
`;

const StyledWrapper = styled.div`
  font-family: ${theme.fontFamily.text};
  min-height: 100vh;
  .bg-header {
    background: ${theme.color.bgDark};
    padding: 1em 1.5em;
  }
  .turning-star {
    &:hover {
      animation-name: ${turningStar};
      animation-duration: 1s;
      animation-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
  }
  .arrow-left {
    &:hover {
      animation-name: ${turnLeft};
      animation-duration: 0.5s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
  }
  .arrow-right {
    &:hover {
      animation-name: ${turnRight};
      animation-duration: 0.5s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
  }
  .button {
    background: ${theme.color.primary};
    border-radius: 0.3em;
    color: white;
    border: none;
    padding: 1em;
    font-weight: bold;
    text-transform: capitalize;
    margin-left: 1em;
  }
  .button--secondary {
    background: white;
    color: ${theme.color.primary};
  }
  @media (max-width: 768px) {
    padding: 0.5em;
  }
`;

const Calligrafik = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledWrapper>
        <div className="bg-header">
          <Navigation />
          <Header />
        </div>
        <Paintings />
        <Newsletter />
        <Testimonies />
        <FollowUs />
        <Footer />
      </StyledWrapper>
    </>
  );
};

export default Calligrafik;
