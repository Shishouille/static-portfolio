import React from "react"
import styled from "styled-components"
import { musicPlayer as theme } from "../../themes"

import Tabs from "./Tabs"
import Status from "./Status"

const StyledLayout = styled.div`
  min-height: 100vh;
  color: ${theme.color.primary};
  font-family: ${theme.fontFamily.text};
  main {
    width: 100%;
    display: flex;
    min-height: 98vh;
    background-color: ${theme.color.bg};
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Tabs />
      <main>
        <Status />
        {children}
      </main>
    </StyledLayout>
  )
}

export default Layout
