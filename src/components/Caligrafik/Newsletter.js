import React from "react"
import styled from "styled-components"
import { caligrafik as theme } from "../../themes"

const StyledNewsletter = styled.div`
  margin-left: 0.5em;
  margin-top: 2em;
  h2 {
    font-family: ${theme.fontFamily.title};
    font-weight: lighter;
    margin-bottom: 0.5em;
  }
  p {
    font-family: ${theme.fontFamily.text};
    color: ${theme.color.dark};
  }
  button,
  input {
    padding: 0.5em;
    font-family: ${theme.fontFamily.text};
  }
  button {
    margin-left: 0.5em;
    background-color: black;
    color: white;
    border: none;
  }
  input {
    border: 1px solid ${theme.color.dark};
    &::placeholder {
      color: ${theme.color.dark};
      font-family: ${theme.fontFamily.text};
    }
  }
  a {
    all: unset;
    text-decoration: underline;
    color: black;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    width: 70%;
    margin: 2em auto;
    div {
      width: 100%;
      margin: auto;
      button,
      input {
        padding: 2em;
      }
      input {
        width: 65%;
        &::placeholder {
          font-size: 1.3em;
        }
      }
    }
  }
`

const Newsletter = () => {
  return (
    <StyledNewsletter>
      <h2>Get 10% off your first order</h2>
      <p>
        Subscribe to our newsletter to hear about the latest news, promotions
        and more.
      </p>
      <div>
        <input type="text" placeholder="Your email..." />
        <button type="button"> Subscribe </button>
      </div>
      <p>
        By signing up to our newsletter you are agreeing to our{" "}
        <a href="">Privacy Policy</a>
      </p>
    </StyledNewsletter>
  )
}

export default Newsletter
