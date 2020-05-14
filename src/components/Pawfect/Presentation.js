import React from "react";
import styled from "styled-components";
import { pawfect as theme } from "../../themes";

import Navigation from "./Navigation";

import { Icon, InlineIcon } from "@iconify/react";
import worldIcon from "@iconify/icons-jam/world";
import instagramIcon from "@iconify/icons-fa-brands/instagram";
import facebookOutlined from "@iconify/icons-ant-design/facebook-outlined";
import locationIcon from "@iconify/icons-carbon/location";
import dogIcon from "@iconify/icons-mdi/dog";

import dog from "../../images/pawfect/dog.png";
import bg from "../../images/pawfect/bg.png";

const StyledPresentation = styled.div`
  display: flex;
  background: ${theme.color.primary};
  .dog {
    width: 40%;
    margin: 0;
  }
  .main {
    width: 60%;
    padding: 2em 6em;
    position: relative;
    z-index: 1;
    main {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
    }
    h1 {
      font-weight: bold;
      margin: 0.5em 0;
      font-size: 4em;
      color: white;
    }
    h2 {
      color: ${theme.color.secondary};
      font-size: 2em;
      position: relative;
      width: fit-content;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        background: white;
        bottom: -0.5em;
      }
    }
    p {
      color: white;
    }
    .links {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2em 0;
      svg {
        margin: -0.2em 0;
      }
      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  .bg-main {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 50%;
    margin: 0;
  }
  .socials {
    display: flex;
    width: 25%;
    justify-content: space-between;
    padding: 1em 0;
    .icon-bg {
      border-radius: 50%;
      background: ${theme.color.secondary};
      width: 2em;
      height: 2em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    .dog {
      clip-path: circle();
      text-align: center;
      margin: auto;
    }
    #links {
      width: 100%;
    }
    .main {
      width: 100%;
      padding: 0.5em;
      p {
        padding: 1em 0;
      }
    }
    .socials {
      width: 50%;
    }
  }
`;

const Presentation = () => {
  return (
    <StyledPresentation>
      <img className="dog" src={dog} alt="" />
      <div className="main">
        <Navigation />
        <main>
          <img className="bg-main" src={bg} alt="" />
          <h1>pawfect.</h1>
          <h2>Adopt</h2>
          <h2>Don't Shop.</h2>
          <p>
            Adoption is better and more efficient. In one hand, your money is
            saved, and in the other, an animal gets a home to live. Don't
            hesitate and adopt a pet today !
          </p>
          <div className="links" id="links">
            <a href="">
              {" "}
              <Icon icon={locationIcon} color="white" height="1.5em" /> Nearest
              Shelter
            </a>
            <a href="">
              {" "}
              <Icon icon={dogIcon} color="white" height="1.5em" /> Adopt Now
            </a>
          </div>
          <div className="socials">
            <div className="icon-bg">
              <Icon icon={worldIcon} color="white" />
            </div>
            <div className="icon-bg">
              <Icon icon={instagramIcon} color="white" />
            </div>
            <div className="icon-bg">
              <Icon icon={facebookOutlined} color="white" />
            </div>
          </div>
        </main>
      </div>
    </StyledPresentation>
  );
};

export default Presentation;
