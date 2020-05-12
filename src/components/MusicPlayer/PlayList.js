import React from "react"
import styled from "styled-components"
import { musicPlayer as theme } from "../../themes"

import { Icon, InlineIcon } from "@iconify/react"
import sharpShortText from "@iconify/icons-ic/sharp-short-text"
import heartIcon from "@iconify/icons-cil/heart"

import PlayListElement from "./PlayListElement"

import music1 from "../../images/music-player/music1.png"
import music2 from "../../images/music-player/music2.png"
import music3 from "../../images/music-player/music3.png"

const StyledPlayList = styled.div`
  width: 50%;
  text-align: center;
  h2 {
    text-transform: uppercase;
    margin-top: 1em;
    color: ${theme.color.secondary};
  }
  .waiting-list {
    background-image: linear-gradient(
      to top,
      transparent,
      ${theme.color.secondary}
    );
    border-top-left-radius: 0.3em;
    height: 90%;
    padding: 1em;
    overflow-y: auto;
    .waiting-list-item {
      display: flex;
      width: 100%;
      justify-content: space-between;
      .waiting-list-item--display {
        display: flex;
        align-items: center;
        .song-title {
          font-weight: bold;
          letter-spacing: 0.1em;
        }
        svg,
        img,
        p {
          margin: 1em;
        }
        p {
          text-align: start;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const PlayList = () => {
  return (
    <StyledPlayList>
      <h2>Waiting List</h2>
      <div className="waiting-list">
        <PlayListElement
          title="Will He"
          artist="Joji"
          album="In Tongues"
          cover={music1}
        />
        <PlayListElement
          title="Bitter Fuck"
          artist="Joji"
          album="In Tongues"
          cover={music1}
          favorite
        />
        <PlayListElement
          title="I Don't Wanna Waste M..."
          artist="Joji"
          album="In Tongues"
          cover={music1}
        />
        <PlayListElement
          title="Run"
          artist="Joji"
          album="Run"
          cover={music3}
          favorite
        />
        <PlayListElement
          title="SLOW DANCING IN THE D..."
          artist="Joji"
          album="BALLADS 1"
          cover={music2}
        />
        <PlayListElement
          title="CAN'T GET OVER YOU"
          artist="Joji"
          album="BALLADS 1"
          cover={music2}
        />
      </div>
    </StyledPlayList>
  )
}

export default PlayList
