import React from "react";
import styled from "styled-components";
import { nightingale as theme } from "../../themes";

import { InlineIcon, Icon } from "@iconify/react";
import playSkipBackSharp from "@iconify/icons-ion/play-skip-back-sharp";
import playSkipForwardSharp from "@iconify/icons-ion/play-skip-forward-sharp";
import pauseOutlined from "@iconify/icons-ant-design/pause-outlined";
import shareIcon from "@iconify/icons-entypo/share";

import bird1 from "../../images/nightingale/bird1.png";

const StyledSong = styled.div`
  background: ${theme.color.bgBottom};
  display: flex;
  height: 50%;
  border-bottom-left-radius: 1em;
  justify-content: space-between;
  position: relative;
  z-index: 0;
  img {
    width: 400px;
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 7em;
  }

  .song-description {
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .song-player {
      display: flex;
      width: 40%;
      .stop-button {
        border-radius: 50%;
        border: 2px solid black;
        height: 2em;
        width: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1em;
        justify-self: center;
        margin-bottom: 2em;
        background: ${theme.color.bgBottom};
      }
      .song-buttons {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 2em;
        margin-left: 2em;
        .song-circles {
          display: flex;
          margin: 0 1em;
          .selected {
            background: black;
          }
        }
      }
    }
  }
  .song-share {
    background: ${theme.color.bgRight};
    width: 25%;
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    div {
      border-radius: 50%;
      border: 1px solid white;
      height: 3em;
      width: 3em;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 0.2em;
      }
    }
  }
  .song-title {
    width: 60%;
  }
  .song-time {
    display: flex;
    font-weight: bold;
    text-transform: uppercase;
    span {
      margin: 0 0.5em;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: 50%;
    img {
      width: 30%;
      bottom: 0;
    }
    .song-description {
      width: 100%;
    }
    .song-share {
      width: 100%;
      border-bottom-left-radius: 1em;
    }
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  h1 {
    font-family: ${theme.fontFamily.title};
    font-size: 4em;
    font-weight: 100;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
    }
  }
`;

const Circle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin: 0 0.1em;
  background: lightgrey;
`;

const StyledBird = styled.div`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: 30%;
  border-bottom: 2px solid grey;
`;

const Song = () => {
  return (
    <StyledSong>
      <img src={bird1} alt="" />
      <StyledBird />
      <div className="song-description">
        <div className="song-player">
          <div className="song-buttons">
            <InlineIcon icon={playSkipBackSharp} height="0.7em" width="0.7em" />
            <div className="song-circles">
              <Circle />
              <Circle className="selected" />
              <Circle />
              <Circle />
              <Circle />
            </div>
            <InlineIcon
              icon={playSkipForwardSharp}
              height="0.7em"
              width="0.7em"
            />
          </div>
          <div className="stop-button">
            <Icon icon={pauseOutlined} />
          </div>
        </div>
        <div className="song-title">
          <StyledTitle>
            <h1>The song of the nightingales</h1>
          </StyledTitle>
          <div className="song-time">
            <p>Birds song #1 </p>
            <span> ⎼⎼⎼⎼ </span>
            <p>1:22 / 3:33</p>
          </div>
        </div>
      </div>
      <div className="song-share">
        <div>
          <Icon icon={shareIcon} color="white" height="1.5em" width="1.5em" />
        </div>
      </div>
    </StyledSong>
  );
};

export default Song;
