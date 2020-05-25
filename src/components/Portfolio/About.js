import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Element } from "react-scroll";

import { Icon, InlineIcon } from "@iconify/react";
import womanStudent from "@iconify/icons-noto/woman-student";
import womanArtist from "@iconify/icons-noto/woman-artist";
import womanTeacher from "@iconify/icons-noto/woman-teacher";

const StyledAbout = styled.article`
  background: ${theme.color.primary};
  overflow-x: hidden;
  min-height: 100vh;
  padding: 2em;
  color: white;
  display: flex;
  align-items: center;
  h2 {
    font-size: 2.5em;
  }
  .about-text {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    section {
      height: 50%;
      padding: 1em 0;
    }
  }
  .about-grid {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    align-items: center;
    text-align: center;
    .hobbies-content {
      margin-top: 2em;
      height: 70vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h4 {
        font-size: 2em;
      }
      p {
        font-size: 3em;
        padding: 1em;
        line-height: 1.5em;
      }
    }
  }
  .icons-group {
    display: flex;
    justify-content: space-around;
    width: 100%;
    cursor: pointer;
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
  .index {
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 0 auto;
  }
  .active {
    opacity: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    h1 {
      font-size: 2em;
    }
    .about-text,
    .about-grid {
      width: 100%;
      margin: 1.5em;
    }
    .hobbies-content {
      height: auto !important;
      h4 {
        font-size: 1em !important;
      }
      p {
        font-size: 1.5em !important;
      }
    }
  }
`;

const StyledBar = styled.div`
  background: white;
  height: 0.5em;
  width: 25%;
  cursor: pointer;
  opacity: 0.5;
`;

const About = ({ locale, isVisible }) => {
  const [topic, setTopic] = useState("studies");
  const [index, setIndex] = useState(0);
  return (
    <Element name="about">
      <StyledAbout>
        <article
          className={
            isVisible
              ? "about-text animate__animated animate__slideInLeft"
              : "about-text"
          }
        >
          <section>
            <h2>{locale.aboutMe.title}</h2>
            {locale.aboutMe.content.map(text => (
              <p>{text}</p>
            ))}
          </section>
          <section>
            <h2>{locale.whyMe.title}</h2>
            {locale.whyMe.content.map(text => (
              <p>{text}</p>
            ))}
          </section>
        </article>
        <article
          className={
            isVisible
              ? "about-grid animate__animated animate__slideInRight"
              : "about-grid"
          }
        >
          <div className="icons-group">
            <div
              className={topic === "studies" ? "icon floating" : "icon"}
              onClick={() => {
                setTopic("studies");
                setIndex(0);
              }}
            >
              <Icon icon={womanStudent} height="1.5em" />
            </div>
            <div
              className={topic === "hobbies" ? "icon floating" : "icon"}
              onClick={() => {
                setTopic("hobbies");
                setIndex(0);
              }}
            >
              <Icon icon={womanArtist} height="1.5em" />
            </div>
            <div
              className={topic === "langs" ? "icon floating" : "icon"}
              onClick={() => {
                setTopic("langs");
                setIndex(0);
              }}
            >
              <Icon icon={womanTeacher} height="1.5em" />
            </div>
          </div>
          <div className="hobbies-content">
            <h4>{locale.life[topic][index].title}</h4>
            <p>{locale.life[topic][index].content}</p>
          </div>
          <nav className="index">
            {locale.life[topic].map((card, thisIndex) => (
              <StyledBar
                onClick={() => setIndex(thisIndex)}
                className={thisIndex === index ? "active" : ""}
              />
            ))}
          </nav>
        </article>
      </StyledAbout>{" "}
    </Element>
  );
};

export default About;
