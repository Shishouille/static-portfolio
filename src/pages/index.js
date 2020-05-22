import React from "react";
import TrackVisibility from "react-on-screen";
import { graphql } from "gatsby";
import locale from "../i18n/locale.fr";

import Layout from "../components/Portfolio/Layout";
import Bio from "../components/Portfolio/Bio";
import About from "../components/Portfolio/About";
import WhatIDo from "../components/Portfolio/WhatIDo";
import Projects from "../components/Portfolio/Projects";
import ContactForm from "../components/Portfolio/ContactForm";

import SEO from "../components/seo";

const IndexPage = ({ data }) => (
  <Layout locale={locale.navigation}>
    <SEO title="Shirin Boomi - Développeur front-end" />
    <Bio locale={locale.bio} fluid={data.file.childImageSharp.fluid} />
    <TrackVisibility partialVisibility>
      <About locale={locale.about} />
    </TrackVisibility>
    <TrackVisibility partialVisibility>
      <WhatIDo locale={locale.whatIDo} />
    </TrackVisibility>
    <TrackVisibility partialVisibility>
      <Projects locale={locale.projects} />
    </TrackVisibility>
    <TrackVisibility partialVisibility>
      <ContactForm locale={locale.contactForm} />
    </TrackVisibility>
  </Layout>
);

export const query = graphql`
  query {
    file(relativePath: { eq: "portfolio/avatar.jpeg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

export default IndexPage;
