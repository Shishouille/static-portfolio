import React from 'react'
import styled from "styled-components";
import { nightingale as theme } from '../../themes';

import { InlineIcon } from '@iconify/react';
import controlsPlay from '@iconify/icons-dashicons/controls-play';


import bird2 from '../../images/nightingale/bird2.png';

const StyledCredits = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  .credits {
    width: 75%;
    background: ${theme.color.bgTop};
    display: flex;
    justify-content: space-around;
    border-top-left-radius: 1em;
    font-size: .8em;
    .credit-title {
      margin-top: 2em;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: .1em;
    }
    .credit-name {
    }
  }
  .player {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    background-image: url(${bird2});
    background-position: center;
    padding: 1em;
    .time {
      text-align: end;
    }
    .player-song-name {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .player-text {
        p {
          margin: 0;
        }
      }
      .player-action {
        text-transform: uppercase;
        font-weight: bold;
      }
      .play-button {
        border-radius: 50%;
        border: 1px solid white;
        height: 3em;
        width: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
        margin-left: .2em;
        }
      }
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height:50%;
    .credits {
      width: 100%;
      height: 50%;
    }
    .player {
      width: 100%;
      height: 50%;
      background-size: cover;
    }
  }
`;

const Credits = () => {
  return (
    <StyledCredits>
      <div className="credits">
        <div>
          <p className="credit-title">Registered by</p>
          <p className="credit-name">Gordon Hamels</p>
        </div>
        <div>
          <p className="credit-title">Production</p>
          <p className="credit-name">CUICUI Studio Inc.</p>
        </div>
        <div>
          <p className="credit-title">Album</p>
          <p className="credit-name">Our bird friends</p>
        </div>
      </div>
      <div className="player">
        <p className="time">0:00 / 2:18</p>
        <div className="player-song-name">
          <div className="player-text">
            <p className="player-action">Let's play</p>
            <p>Birds video compilation</p>
          </div>
          <div className="play-button">
            <InlineIcon icon={controlsPlay} width="1.5em" height="1.5em" />
          </div>
        </div>
      </div>
    </StyledCredits>
  )
}

export default Credits
