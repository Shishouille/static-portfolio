import React from "react";
import { Link } from "gatsby";

import locale from "../i18n/locale.fr";

import Layout from "../components/Portfolio/Layout";
import Bio from "../components/Portfolio/Bio";
import About from "../components/Portfolio/About";
import WhatIDo from "../components/Portfolio/WhatIDo";
import Projects from "../components/Portfolio/Projects";
import ContactForm from "../components/Portfolio/ContactForm";

import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio - Accueil" />
    <Bio locale={locale.bio} />
    <About locale={locale.about} />
    <WhatIDo locale={locale.whatIDo} />
    <Projects locale={locale.projects} />
    <ContactForm locale={locale.contactForm} />
  </Layout>
);

export default IndexPage;
