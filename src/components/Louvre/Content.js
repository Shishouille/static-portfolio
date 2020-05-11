import React from 'react';
import styled from "styled-components";
import { useMediaQuery } from 'react-responsive';
import { louvre as theme } from '../../themes';

import { Icon } from '@iconify/react';
import alignCenter from '@iconify/icons-jam/align-center';

import logo from '../../images/louvre/logo.png';
import gericault from '../../images/louvre/gericault.svg';

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  .nav {
    align-self: center;
    margin: auto 1em;
  }
  h1 {
    font-family: ${theme.fontFamily.title};
    font-size: 4em;
    font-weight: lighter;
    text-transform: uppercase;
  }
  .title {
    height: 12em;
    width: 12em;
    margin: auto;
  }
  legend {
    all: unset;
    font-style: italic;
    margin-bottom: 1em;
  }
  .logo {
    text-align: center;
  }
  footer {
    text-align: end;
    p {
      position: relative;
      width: 90%;
      text-transform: uppercase;
      font-weight: bold;
      font-size: .8em;
      &::before {
        content: " ";
        position: absolute;
        width: 9.2em;
        height: 100%;
        border-bottom: 2px solid black;
      }
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        bottom: -38%;
        right: -2%;
        border-style: solid;
        border-width: 10px 25px 0 0;
        border-color: #000000 transparent transparent transparent;
      }
    }
  }
  @media (min-width: 1024px) {
    width: 40%;
    .title {
      position: absolute;
      z-index: 4;
      width: 40em;
      height: 20em;
      top: 5.5em;
      mix-blend-mode: screen;
      left: 4em;
    }
    h1 {
    display: block;
    visibility: hidden;
    font-size: 5em;
    margin-bottom: 2em;
    }
    article {
      width: 70%;
    }
  }
`;

const Content = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <StyledMain>
      <div className="nav">
        <Icon icon={alignCenter} width="2em" height="2em" />
      </div>
      <div>
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <div>
          {isBigScreen && <img className="title" src={gericault} alt=""/>}
          <h1>Theodore Gericault</h1>
          <legend>Rouen, 1791 - Paris, 1824</legend>
        </div>
        <article>
          <p>
            Incarnation de l'artiste romantique, il a eu une vie courte et tourmentée, qui a donné naissance à de nombreux mythes. Son oeuvre la plus célèbre est le Radeau de la Méduse (1818-1819).
          </p>
          <p>
            Il est également connu pour sa passion pour les chevaux, à l'écurie ou en action sur les champs de bataille napoléoniens, outre ses peintures à l'huile, Géricault réalise des lithographies, des sculptures, rares mais remarquables, et des centaines de dessins.
          </p>
        </article>
        <footer>
          <p>En savoir plus</p> 
        </footer>
      </div>
    </StyledMain>
  )
}

export default Content;
