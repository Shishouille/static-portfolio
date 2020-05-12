import React from "react"
import { Helmet } from "react-helmet"

import styled from "styled-components"
import { caligrafik as theme } from "../themes"

import Navigation from "../../src/components/Nightingale/Navigation"
import Main from "../../src/components/Nightingale/Main"

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: ${theme.fontFamily.text};
`

const Nightingale = () => (
  <>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Playfair+Display:wght@500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <StyledWrapper>
      <Navigation />
      <Main />
    </StyledWrapper>
  </>
)

export default Nightingale
