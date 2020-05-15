import React from "react";
import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import cards from "../../images/art-world/cards.png";

const StyledNewsletter = styled.div`
  width: 85%;
  background: ${theme.color.bgDark};
  margin: 2em auto;
  border-radius: 1em;
  display: flex;
  h3 {
    font-size: 3em;
  }
  img {
    width: 50%;
    margin: 0;
  }
  article {
    margin: auto 1.5em;
    input {
      border: none;
    }
    label {
      background: white;
      padding: 0.8em;
      border-radius: 0.2em;
      .button {
        padding: 0.3em 1em;
        cursor: pointer;
        border-radius: 0.2em;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 1em;
    width: 100%;
    img {
      margin: auto;
    }
    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      input {
        margin: 1em;
      }
    }
  }
`;

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <article>
        <h3>Get 20% off!</h3>
        <p>Enter your email address to get your 20% off Discount Code. </p>
        <div>
          <label>
            <input type="text" name="" id="" placeholder="Email" />
            <button type="button" className="button">
              Reveal Code
            </button>
          </label>
        </div>
      </article>
      <img src={cards} alt="" />
    </StyledNewsletter>
  );
};

export default Newsletter;
