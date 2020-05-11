import React from "react"

import styled from "styled-components"
import { nightingale as theme } from "../../themes"

import Song from "./Song"
import Credits from "./Credits"

// import bird1 from '../../images/nightingale/bird1.png';

const StyledMain = styled.main`
  width: 100%;
  background: black;
`

const Main = () => {
  return (
    <StyledMain>
      <Credits />
      <Song />
    </StyledMain>
  )
}

export default Main
