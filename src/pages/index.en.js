import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Portfolio/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio - Home" />
    <h1>Hello World</h1>
    <Link to="/caligrafik">
      Caligrafik : Design from <a href="">@Calin Balea</a>
    </Link>
    <Link to="/louvre">
      Theodore Géricault - Le Louvre : Design from{" "}
      <a href="">@Adrien Louis Constant</a>
    </Link>
    <Link to="/beatriz-ramo">
      Beatriz Ramo Portfolio <a href="">@Anastasia</a>
    </Link>
    <Link to="/nightingale">
      The song of the nightingales <a href="">@Thomas Monavon</a>
    </Link>
    <Link to="/chatbox">
      Chatbot Service Concept <a href="">@Ankur Tripathi</a>
    </Link>
    <Link to="/japan">
      Japanese Layering <a href="">@nuzarim</a>
    </Link>
    <Link to="/music-player">
      Music Player <a href="">@Maksym</a>
    </Link>
    <Link to="/liefde">
      Liefde City Tribute <a href="">@Rachelizmarvel</a>
    </Link>
    <Link to="/pawfect">
      Pawfect <a href="">@Ishaan Kumar</a>
    </Link>
    <Link to="/art-world">
      Art World <a href="">@Zihad Islam</a>
    </Link>
    <Link to="/crope">
      Craft Design Solutions <a href="">@Katerina</a>
    </Link>
  </Layout>
);

export default IndexPage;
