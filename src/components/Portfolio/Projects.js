import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import { Link } from "gatsby";
import { Element } from "react-scroll";

const StyledProjects = styled.div`
  background: ${theme.color.primary};
  color: white;
  padding: 1.5em;
  min-height: 100vh;
  h2 {
    margin: 1em 0;
    font-size: 2.5em;
  }
  .card-group {
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    .card {
    margin: 1em;
    text-align: center;
    background: white;
    width: 25%;
    .design-author {
      color: ${theme.color.primary};
    }
    a {
    display: block;
    color: ${theme.color.secondary};
    margin: .2em 0;
  }
  }

`;

const Projects = ({ locale }) => {
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
              <div className="card">
              <Link to={card.link}>
                {card.title}
              </Link>
              <a className="design-author" href={card.authorUrl}>{card.author}</a>
              </div>
            ))}
          </section>
        </article>
        <article>
          <h3>{locale.extern.title}</h3>
          <p>{locale.extern.subtitle}</p>
          <section className="card-group">
            {locale.extern.cards.map(card => (
              <div className="card">
                <a href={card.url}>{card.title}</a>
              </div>
            ))}
          </section>
        </article>
      </StyledProjects>
    </Element>
  );
};

export default Projects;
