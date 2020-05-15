import React from "react";
import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import logo from "../../images/art-world/logo.png";

const StyledFooter = styled.footer`
  padding-top: 10em;
  width: 95%;
  margin: auto;
  .address {
    p {
      margin: 0;
    }
  }
  ul {
    list-style: none;
  }
  .lists {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .list-title {
    font-weight: bold;
    padding-bottom: 0.5em;
  }
  .copyright {
    display: flex;
    justify-content: space-between;
    padding-top: 3em;
  }
  .newsletter {
    input {
      width: 100%;
      padding: 1em 0.5em;
      border-radius: 0.3em;
      border: 2px solid ${theme.color.bgWhite};
    }
    .button {
      margin: 0.5em 0;
      padding: 0.5em 1.5em;
    }
  }
  @media (max-width: 768px) {
    .lists {
      flex-direction: column;
      width: 100%;
      ul {
        width: 100%;
        margin: 1em 0;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="lists">
        <div>
          <img src={logo} alt="" />
          <p>(310) 862-4540</p>
          <p>info@artworld.org</p>
          <div className="address">
            <p>8605 Santa Monica Blvd Ste. 22760</p>
            <p>Los Angeles, CA 90069</p>
          </div>
        </div>
        <div>
          <ul>
            <li className="list-title">Side Menu</li>
            <li>Home</li>
            <li>Shop</li>
            <li>Faq</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="list-title">Follow us</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Pinterest</li>
          </ul>
        </div>
        <div className="newsletter">
          <p className="list-title">Newsletter</p>
          <p>Sign up for the latest news and offers</p>
          <input type="text" placeholder="Your email" />
          <button type="button" className="button">
            Subscribe
          </button>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2020, Art World. Powered by Shopify</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
