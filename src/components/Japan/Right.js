import React from "react"
import styled from "styled-components"
import { japan as theme } from "../../themes"

import { Icon, InlineIcon } from "@iconify/react"
import toggleSwitch from "@iconify/icons-mdi/toggle-switch"
import roundViewColumn from "@iconify/icons-ic/round-view-column"
import pauseFilled from "@iconify/icons-carbon/pause-filled"

import post4 from "../../images/japan/post4.png"

const StyledLang = styled.div`

`

const StyledPost = styled.div`

`

const Right = () => {
  return (
    <>
      <StyledLang className="lang">
        <Icon icon={toggleSwitch} color={theme.color.primary} /> <p>EN</p>
      </StyledLang>
      <StyledPost className="post">
        <header>
          <button className="button-on">
            <Icon icon={roundViewColumn} color="white" />
          </button>
          <button className="button-off">
            <Icon icon={pauseFilled} vFlip color="white" />
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
