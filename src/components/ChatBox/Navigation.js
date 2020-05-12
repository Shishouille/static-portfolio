import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import { chatBox as theme } from "../../themes"

import { Icon } from "@iconify/react"
import twotoneShortText from "@iconify/icons-ic/twotone-short-text"
import searchOutline from "@iconify/icons-eva/search-outline"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
  menu {
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 80%;
    a {
      all: unset;
      letter-spacing: 0.2em;
      position: relative;
      width: 100%;
      text-transform: uppercase;
      font-size: 0.8em;
      color: ${theme.color.primary};
      cursor: pointer;
      &:hover {
        color: white;
        &::after {
          content: "";
          text-align: center;
          position: absolute;
          width: 15%;
          height: 3px;
          border-radius: 3em;
          background: ${theme.color.primary};
          left: 42%;
          top: 3em;
        }
      }
    }
  }

  .phone-menu {
    position: fixed;
    transition: all 0.5s ease;
    z-index: 5;
    background: ${theme.color.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    left: 0;
    top: 0;
    padding: 0;
    margin: 0;
    width: 40%;
    height: 100vh;
    a {
      padding: 1em;
    }
    .cancel {
      color: white;
    }
  }
  .hidden {
    display: none;
  }
`

const Navigation = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" })
  const [isOpen, open] = useState(false)
  return (
    <StyledNavigation>
      {isBigScreen && (
        <>
          <Icon icon={twotoneShortText} hFlip color="white" width="1.2em" />
          <menu>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Sign in</a>
          </menu>
        </>
      )}
      {!isBigScreen && (
        <>
          <Icon
            icon={twotoneShortText}
            onClick={() => open(!isOpen)}
            hFlip={!isOpen}
            color="white"
            width="1.2em"
          />
          <menu className={`phone-menu ${isOpen ? "" : "hidden"}`}>
            <a href="#" className="cancel" onClick={() => open(!isOpen)}>
              Back
            </a>
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
            <a href="">Sign in</a>
          </menu>
        </>
      )}
      <Icon icon={searchOutline} color="white" width="1.2em" />
    </StyledNavigation>
  )
}

export default Navigation
