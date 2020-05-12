import React from "react"
import styled from "styled-components"
import { japan as theme } from "../../themes"

import { Icon, InlineIcon } from "@iconify/react"
import toggleSwitch from "@iconify/icons-mdi/toggle-switch"
import roundViewColumn from "@iconify/icons-ic/round-view-column"
import pauseFilled from "@iconify/icons-carbon/pause-filled"

import post4 from "../../images/japan/post4.png"

const StyledLang = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  font-size: 2em;
  padding: 1em;
  p {
    align-self: center;
    margin-left: 0.5em;
  }
`

const StyledPost = styled.div`
  padding: 2em;
  button {
    border: none;
    width: 3em;
    margin-right: 0.5em;
  }
  .button-on {
    background: ${theme.color.primary};
  }
  .button-off {
    background: black;
  }
  h3 {
    font-weight: bold;
    font-size: 2em;
  }
  p {
    text-decoration: line-through;
  }
`

const Right = () => {
  return (
    <>
      <StyledLang className="lang">
        <InlineIcon
          icon={toggleSwitch}
          height="1.5em"
          color={theme.color.primary}
        />{" "}
        <p>EN</p>
      </StyledLang>
      <StyledPost className="post">
        <header>
          <button className="button-on">
            <InlineIcon icon={roundViewColumn} color="white" />
          </button>
          <button className="button-off">
            <InlineIcon icon={pauseFilled} vFlip color="white" />
          </button>
        </header>
        <article>
          <h3>postcard</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            eligendi quos laborum libero repellat doloremque perspiciatis ut,
            voluptatibus odio eos cum nesciunt, porro sequi quas saepe, vel
            culpa numquam hic quia natus nulla maxime minima!
          </p>
          <img src={post4} alt="" />
        </article>
      </StyledPost>
    </>
  )
}

export default Right
