import React from "react";
import { Link } from "gatsby";
import { Element } from "react-scroll";

const Projects = ({ locale }) => {
  return (
    <div id="projects">
      <Element name="projects">
        <h2>{locale.title}</h2>
        <article>
          <h3>{locale.intern.title}</h3>
          <p>{locale.intern.subtitle}</p>
          <p>{locale.intern.text}</p>
          <section>
            {locale.intern.cards.map(card => (
              <Link to={card.link}>
                {card.title}
                <a href={card.authorUrl}>{card.author}</a>
              </Link>
            ))}
          </section>
        </article>
        <article>
          <h3>{locale.extern.title}</h3>
          <p>{locale.extern.subtitle}</p>
          <div>
            {locale.extern.cards.map(card => (
              <section>
                <a href={card.url}>{card.title}</a>
              </section>
            ))}
          </div>
        </article>
      </Element>
    </div>
  );
};

export default Projects;
