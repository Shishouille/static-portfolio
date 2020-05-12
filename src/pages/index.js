import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
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
  </Layout>
)

export default IndexPage
