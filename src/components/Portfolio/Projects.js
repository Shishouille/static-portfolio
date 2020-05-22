import React from "react";
import { useMediaQuery } from "react-responsive";
import Tilt from "react-parallax-tilt";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Link } from "gatsby";
import { Element } from "react-scroll";
import { Icon, InlineIcon } from "@iconify/react";
import githubFilled from "@iconify/icons-ant-design/github-filled";

const StyledProjects = styled.div`
  background: ${theme.color.primary};
  color: white;
  padding: 1.5em;
  min-height: 100vh;
  h2 {
    margin: 1em 0;
    font-size: 2.5em;
  }
  p {
    margin: 0.5em 0;
  }
  article {
    margin: 0.5em 0;
  }
  .card-group {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    .card-infos {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-tags {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      svg {
        margin: 0 0.5em;
      }
    }
    .card-lang {
      color: ${theme.color.primary};
      text-align: start;
      padding: 0 1em;
    }
    .card {
      margin: 1em;
      border-radius: 0.3em;
      padding-bottom: 1em;
      text-align: center;
      background: white;
      width: 100%;
      box-shadow: 0px 10px 15px 5px rgba(0, 20, 90, 1);
      &:hover {
        font-weight: bold;
      }
      .design-author {
        color: ${theme.color.primary};
      }
      a {
        display: block;
        color: ${theme.color.secondary};
        margin: 0.7em 0;
      }
    }
  }
  @media (max-width: 768px) {
    .card-group {
      flex-direction: column;
      .card {
        height: auto;
        width: 100%;
        margin: 1em;
      }
    }
  }
`;

const Projects = ({ locale, isVisible }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <Element name="projects">
      <StyledProjects>
        <h2>{locale.title}</h2>
        <article>
          <h3>{locale.intern.title}</h3>
          <p>{locale.intern.subtitle}</p>
          <p>{locale.intern.text}</p>
          <section className="card-group">
            {locale.intern.cards.map(card => (
              <Tilt perspective={300} tiltEnable={isBigScreen}>
                <div
                  className={
                    isVisible
                      ? "card animate__animated animate__fadeInUp"
                      : "card"
                  }
                >
                  <p className="card-lang">{card.lang}</p>
                  <Link to={card.link}>{card.title}</Link>
                  <a className="design-author" href={card.authorUrl}>
                    {card.author}
                  </a>
                </div>
              </Tilt>
            ))}
          </section>
        </article>
        <article>
          <h3>{locale.extern.title}</h3>
          <p>{locale.extern.subtitle}</p>
          <section className="card-group">
            {locale.extern.cards.map(card => (
              <Tilt perspective={300} tiltEnable={isBigScreen}>
                <div
                  className={
                    isVisible
                      ? "card animate__animated animate__fadeInUp"
                      : "card"
                  }
                >
                  <div className="card-infos">
                    <p className="card-lang">{card.lang}</p>
                    <div className="card-tags">
                      {card.tags.map(icon => (
                        <Icon
                          icon={icon}
                          color={theme.color.primary}
                          height="1.5em"
                        />
                      ))}
                    </div>
                  </div>

                  <a href={card.github}>
                    <Icon
                      icon={githubFilled}
                      color={theme.color.secondary}
                      height="1.5em"
                    />
                  </a>
                  <a href={card.url}>{card.title}</a>
                </div>
              </Tilt>
            ))}
          </section>
        </article>
      </StyledProjects>
    </Element>
  );
};

export default Projects;
