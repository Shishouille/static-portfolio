import React from "react"
import styled from "styled-components"
import { japan as theme } from "../../themes"

import { Icon } from "@iconify/react"
import gridThreeUp from "@iconify/icons-oi/grid-three-up"

import post1 from "../../images/japan/post1.png"

const StyledMenu = styled.div`
`

const StyledNumber = styled.div`
  font-size: 5em;
`
const StyledText = styled.div`
  p {
    height: 40%;
  }
`
const StyledMail = styled.div`
  font-weight: bold;
`

const Left = () => {
  return (
    <>
      <StyledMenu className="menu-icon">
        <Icon icon={gridThreeUp} />
      </StyledMenu>
      <StyledNumber className="number">
      <p>19</p>
        </StyledNumber>
      <StyledText className="text">
        <p>Discover Japan like you never had, during the "Hanahi" season.</p>
      </StyledText>
      <StyledMail className="mail">
        <img src={post1} alt="" />
        <p>nuzarim.erkinbekov@gmail.com</p>
      </StyledMail>
    </>
  )
}

export default Left
