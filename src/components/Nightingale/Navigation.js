import React from "react"

import { Icon } from "@iconify/react"
import threeDotsVertical from "@iconify/icons-bi/three-dots-vertical"
import roundShortText from "@iconify/icons-ic/round-short-text"

import styled from "styled-components"
import { nightingale as theme } from "../../themes"

const StyledNav = styled.nav`
  width: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: black;
  padding: 0.5em 0;
  @media (max-width: 768px) {
    width: 5%;
  }
`

const Navigation = () => {
  return (
    <StyledNav>
      <Icon icon={roundShortText} color="white" />
      <Icon icon={threeDotsVertical} color="white" />
    </StyledNav>
  )
}

export default Navigation
