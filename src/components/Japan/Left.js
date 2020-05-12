import React from "react"
import styled from "styled-components"
import { japan as theme } from "../../themes"

import { Icon } from "@iconify/react"
import gridThreeUp from "@iconify/icons-oi/grid-three-up"

import post1 from "../../images/japan/post1.png"
import post7 from "../../images/japan/post7.png"

const StyledMenu = styled.div`
  padding: 1em;
`

const StyledNumber = styled.div`
  font-size: 10em;
  font-weight: 900;
  font-family: ${theme.fontFamily.title};
  text-align: end;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  img {
    height: 50%;
  }
`
const StyledText = styled.div`
  position: relative;
  p {
    height: 40%;
    padding: 3em 4em;
  }
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background: ${theme.color.primary};
    top: 1.5em;
    left: 4em;
  }
  &::before {
    content: "";
    position: absolute;
    height: 25%;
    width: 2px;
    background: black;
    top: 1.5em;
    left: 2em;
  }
`
const StyledMail = styled.div`
  padding: 2em 4em;
  font-weight: bold;
`

const Left = () => {
  return (
    <>
      <StyledMenu className="menu-icon">
        <Icon icon={gridThreeUp} width="2em" />
      </StyledMenu>
      <StyledNumber className="number">
        <img src={post7} alt="" /> <p>19</p>
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
