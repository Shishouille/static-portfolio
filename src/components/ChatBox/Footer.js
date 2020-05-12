import React from "react"

import styled from "styled-components"
import { chatBox as theme } from "../../themes"

import { Icon } from "@iconify/react"
import googleOutlined from "@iconify/icons-ant-design/google-outlined"
import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined"
import facebookAlt from "@iconify/icons-dashicons/facebook-alt"

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 1em;
  svg {
    display: block;
    margin: 1em 0;
    cursor: pointer;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Icon icon={googleOutlined} color={theme.color.primary} />
      <Icon icon={twitterOutlined} color={theme.color.primary} />
      <Icon icon={facebookAlt} color={theme.color.primary} />
    </StyledFooter>
  )
}

export default Footer
