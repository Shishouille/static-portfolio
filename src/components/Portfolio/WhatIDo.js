import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";

import { Icon, InlineIcon } from "@iconify/react";

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
    justify-content: space-around;
    .card {
      min-height: 20em;
      text-align: center;
      border-radius: 0.3em;
      padding: 1.5em 0.5em;
      h3 {
        padding: 1em 0;
      }
      p {
        width: 90%;
        margin: auto;
      }
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
          box-shadow: 0px 10px 15px 5px rgba(0, 20, 90, 1);
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
  @media (max-width: 768px) {
    .cards-display {
      flex-direction: column;
      .card {
        height: auto;
        width: 100%;
        margin: 1em;
      }
    }
  }
`;

const WhatIDo = ({ locale, isVisible }) => {
  return (
    <Element name="whatIDo">
      <StyledWID>
        <article>
          <h2 className="title"> {locale.first}</h2>
          <div className="cards-display">
            {locale.primary.map(card => (
              <section
                className={
                  isVisible ? "card animate__animated animate__pulse" : "card"
                }
              >
                <div className="icons-group">
                  {card.icons.map(icon => (
                    <div className="icon floating">
                      <Icon
                        icon={icon}
                        color={theme.color.primary}
                        height="1.5em"
                      />
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
              <section
                className={
                  isVisible ? "card animate__animated animate__pulse" : "card"
                }
              >
                <div className="icons-group">
                  {card.icons.map(icon => (
                    <div className="icon floating">
                      <Icon
                        icon={icon}
                        color={theme.color.primary}
                        height="1.5em"
                      />
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
