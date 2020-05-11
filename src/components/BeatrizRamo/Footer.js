import React from "react"

import styled from "styled-components"
import { beatrizRamo as theme } from "../../themes"

const StyledFooter = styled.div`
  height: 5vh;
  display: flex;
  div {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${theme.color.secondary};
    margin-right: 0.5em;
  }
  .selected {
    background-color: ${theme.color.primary};
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="selected" />
      <div />
      <div />
    </StyledFooter>
  )
}

export default Footer
