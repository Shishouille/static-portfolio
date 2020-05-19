import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";

import { Icon, InlineIcon } from '@iconify/react';


const StyledWID = styled.div`
  color: ${theme.color.primary};
  min-height: 100vh;
  h2,
  h3 {
    margin: 1em;
  }
  .title {
    font-size: 2.5em;
  }
  .cards-display {
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      height: 20em;
      text-align: center;
      padding: 1.5em 0.5em;
      .icons-group {
        display: flex;
        justify-content: space-evenly;
        .icon {
        border-radius: 50%;
        background: white;
        width: 3em;
        height: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      }

    }
  }
  section {
    background: ${theme.color.primary};
    color: white;
    width: 30%;
    margin: 1em;
  }
`;

const WhatIDo = ({ locale }) => {
  return (
    <Element name="whatIDo">
      <StyledWID>
        <article>
          <h2 className="title"> {locale.first}</h2>
          <div className="cards-display">
            {locale.primary.map(card => (
              <section className="card">
                <div className="icons-group">
                  {card.icons.map((icon) => (
                    <div className="icon">
                      <Icon icon={icon} color={theme.color.primary} height="1.5em" />
                    </div>
                  ))}
                </div>
                <h3>{card.title}</h3>
                <div>
                  <p>{card.content}</p>
                </div>
              </section>
            ))}
          </div>
        </article>
        <article>
          <h3 className="title">{locale.second}</h3>
          <div className="cards-display">
            {locale.secondary.map(card => (
              <section className="card">
                <div className="icons-group">
                  {card.icons.map((icon) => (
                    <div className="icon">
                      <Icon icon={icon} color={theme.color.primary} height="1.5em" />
                    </div>
                  ))}
                </div>
                <h3>{card.title}</h3>
                <div>
                  <p>{card.content}</p>
                </div>
              </section>
            ))}
          </div>
        </article>
      </StyledWID>{" "}
    </Element>
  );
};

export default WhatIDo;
