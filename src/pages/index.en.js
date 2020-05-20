import React from "react";
import TrackVisibility from 'react-on-screen';
import { Link } from "gatsby";

import locale from "../i18n/locale.en";

import Layout from "../components/Portfolio/Layout";
import Bio from "../components/Portfolio/Bio";
import About from "../components/Portfolio/About";
import WhatIDo from "../components/Portfolio/WhatIDo";
import Projects from "../components/Portfolio/Projects";
import ContactForm from "../components/Portfolio/ContactForm";

import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout locale={locale.navigation}>
    <SEO title="Shirin Boomi - Front-end Developper" />
    <Bio locale={locale.bio} />
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

export default IndexPage;
