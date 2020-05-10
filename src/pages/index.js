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
    <Link to="/caligrafik">Caligrafik : Design from <a href="">@Calin Balea</a></Link>
    <Link to="/louvre">Theodore Géricault - Le Louvre : Design from <a href="">@Adrien Louis Constant</a></Link>
  </Layout>
)

export default IndexPage
