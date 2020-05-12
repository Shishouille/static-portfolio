import React from "react"
import styled from "styled-components"
import { musicPlayer as theme } from "../../themes"

const StyledTabs = styled.nav`
  background: #1c2541;
  height: 3em;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .tabs-links {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    .selected {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      background: ${theme.color.bg};
      border-top-left-radius: 0.3em;
      border-top-right-radius: 0.3em;
      font-weight: bold;
    }
  }
  a {
    all: unset;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    margin: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
`

const Tabs = () => {
  return (
    <StyledTabs>
      <div className="tabs-links">
        <div className="selected">
          <a href="">Listening</a>
        </div>
        <div>
          <a href="">Library</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
      </div>
      <div>
        <a href="">Profile</a>
      </div>
    </StyledTabs>
  )
}

export default Tabs
