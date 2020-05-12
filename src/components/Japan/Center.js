import React from "react"
import styled from "styled-components"
import { japan as theme } from "../../themes"

import { Icon } from "@iconify/react"
import baselineMouse from "@iconify/icons-ic/baseline-mouse"

import post2 from "../../images/japan/post2.png"
import post3 from "../../images/japan/post3.png"
import post5 from "../../images/japan/post5.png"

const StyledTitle = styled.div`
  margin: auto;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    text-transform: lowercase;
    text-align: center;
  }
`

const StyledJapan = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    top: 20%;
    left: 25%;
    background: ${theme.color.primary};
    width: 55%;
    padding-top: 55%;
    z-index: -5;
  }
  img {
    position: absolute;
  }
  .cherry {
    left: -14em;
    bottom: 0;
  }
  .lamp {
    left: 5em;
    top: 2em;
    z-index: -1;
  }
  .post1 {
    left: 5em;
    bottom: 0;
    z-index: -1;
  }
  .post2 {
    right: 5em;
    top: 1em;
    z-index: -1;
  }
  main {
    display: flex;
    border: none;
    flex-direction: column;
    text-align: center;
    width: 15%;
    margin: auto;
    margin-top: 1em;
    position: relative;
    z-index: 3;
    h1 {
      text-transform: uppercase;
      font-family: ${theme.fontFamily.text};
      font-size: 5em;
      margin-bottom: 0.5em;
    }
    svg {
      margin: auto;
    }
  }
  p {
    text-align: end;
    font-weight: bold;
    margin-right: 1em;
  }
`

const Center = () => {
  return (
    <>
      <StyledTitle className="title">
        <h2>malfiksas</h2>
      </StyledTitle>
      <StyledJapan className="japan">
        <img src={post2} alt="" className="cherry" />
        <img src={post3} alt="" className="lamp" />
        <img src={post5} alt="" className="post1" />
        <img src={post5} alt="" className="post2" />
        <main>
          <h1>Japan</h1>
          <Icon icon={baselineMouse} />
        </main>
        <p>Q&A</p>
      </StyledJapan>
    </>
  )
}

export default Center
