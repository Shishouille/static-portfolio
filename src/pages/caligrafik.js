import React from "react";
import { Helmet } from "react-helmet"

import styled from "styled-components";
import { caligrafik as theme } from '../themes';

import Header from '../../src/components/Caligrafik/Header';
import MainTitle from '../../src/components/Caligrafik/MainTitle';
import PortraitCategory from '../../src/components/Caligrafik/PortraitCategory';
import TrustedClients from '../../src/components/Caligrafik/TrustedClients';
import BrandResume from '../../src/components/Caligrafik/BrandResume';
import BrandDescription from '../../src/components/Caligrafik/BrandDescription';
import HowItWorks from '../../src/components/Caligrafik/HowItWorks';
import Order from '../../src/components/Caligrafik/Order';
import Newsletter from '../../src/components/Caligrafik/Newsletter';
import Footer from '../../src/components/Caligrafik/Footer';

const StyledWrapper = styled.div`
  position: relative;
  z-index: 0;
  .bg-main {
    background-color: ${theme.color.primary};
  }
`;

const Calligrafik = () => (
  <>
    <Helmet> 
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
    </Helmet>
    <StyledWrapper>
      <div className="bg-main">
        <Header />
        <MainTitle />
        <PortraitCategory /> 
        <TrustedClients />
        <BrandResume />
        <BrandDescription />
        <HowItWorks />
      </div>
      <Order />
      <Newsletter />
      <Footer />
    </StyledWrapper>
  </>
)

export default Calligrafik;
