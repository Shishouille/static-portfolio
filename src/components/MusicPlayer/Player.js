import React from "react";
import styled from "styled-components";
import { musicPlayer as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import playSkipForwardCircle from "@iconify/icons-ion/play-skip-forward-circle";
import playSkipBackCircle from "@iconify/icons-ion/play-skip-back-circle";
import roundPlayCircleFilled from "@iconify/icons-ic/round-play-circle-filled";

import music4 from "../../images/music-player/music4.png";

const StyledPlayer = styled.div`
  width: 35%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    color: #374263;
    text-transform: uppercase;
    padding-top: 0.5em;
  }
  h2 {
    margin-bottom: 0.5em;
    font-weight: 500;
  }
  img {
    box-shadow: 1px 2px 154px 50px ${theme.color.secondary};
  }
  .player-time {
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-between;
    position: relative;
    &::before {
      height: 2px;
      position: absolute;
      width: 100%;
      content: "";
      background: ${theme.color.secondary};
      top: -0.5em;
    }
    &::after {
      height: 2px;
      position: absolute;
      width: 4em;
      content: "";
      background: ${theme.color.primary};
      top: -0.5em;
    }
    .time-start {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        background: ${theme.color.primary};
        top: -1em;
        left: 3.4em;
      }
    }
  }
  .player-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin: auto;
    svg {
      background: ${theme.color.primary};
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Player = ({ children }) => {
  return (
    <StyledPlayer>
      <h1>Playing</h1>
      <img src={music4} alt="" />
      <h2>Gimme Love</h2>
      <p>
        FROM: <strong>Joji</strong>
      </p>
      <div className="player-time">
        <p className="time-start">1:03</p>
        <p>3:34</p>
      </div>
      <div className="player-buttons">
        <div>
          <Icon
            icon={playSkipBackCircle}
            width="4em"
            color={theme.color.secondary}
          />
        </div>
        <div>
          <Icon
            icon={roundPlayCircleFilled}
            width="5em"
            color={theme.color.secondary}
          />
        </div>
        <div>
          <Icon
            icon={playSkipForwardCircle}
            width="4em"
            color={theme.color.secondary}
          />
        </div>
      </div>
    </StyledPlayer>
  );
};

export default Player;
