import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navigation from "./Navigation";
import Footer from "./Footer";
import "./layout.css";

const StyledLayout = styled.div`
  font-family: ${theme.fontFamily.text};
  color: ${theme.fontFamily.primary};
  h1,
  h2,
  h3,
  h4 {
    font-family: ${theme.fontFamily.title};
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
