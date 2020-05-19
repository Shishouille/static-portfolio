import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";

const StyledWID = styled.div`
  .cards-display {
    display: flex;
    align-items: center;
    justify-content: center;
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
          <h2>{locale.first}</h2>
          <div className="cards-display">
            {locale.primary.map(card => (
              <section>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </section>
            ))}
          </div>
        </article>
        <article>
          <h3>{locale.second}</h3>
          <div className="cards-display">
            {locale.secondary.map(card => (
              <section>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </section>
            ))}
          </div>
        </article>
      </StyledWID>{" "}
    </Element>
  );
};

export default WhatIDo;
