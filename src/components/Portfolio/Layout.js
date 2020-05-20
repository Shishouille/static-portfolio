import React from "react";
import styled, { keyframes } from "styled-components";
import { portfolio as theme } from "../../themes";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navigation from "./Navigation";
import Footer from "./Footer";
import "./layout.css";

const floating = keyframes`
from { 
  transform: translate(0,  0px); 
  }
65% { 
  transform: translate(0px, 6px); 
    }
to { 
  transform: translate(0px, 0px); 
  }`;

const slideIn = keyframes`
from { 
  transform: translate(0,  -1em); 
  }
65% { 
  transform: translate(0, -.5em); 
    }
to { 
  transform: translate(0, 0); 
  }`;

const slideOut = keyframes`
from { 
  transform: translate(0,  0); 
  }
65% { 
  transform: translate(0, -.5em); 
    }
to { 
  transform: translate(0, -1em); 
  }`;

const StyledLayout = styled.div`
  font-family: ${theme.fontFamily.text};
  color: ${theme.fontFamily.primary};
  h1,
  h2,
  h3,
  h4 {
    font-family: ${theme.fontFamily.title};
  }
  .in {
    animation-name: ${slideIn};
    animation-duration: 1s;
    animation-timing-function: ease;
  }
  .out {
    animation-name: ${slideOut};
    animation-duration: 1s;
    animation-timing-function: ease;
  }
  .floating {
    animation-name: ${floating};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
`;

const Layout = ({ children, locale }) => {
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
      <Navigation locale={locale} />
      <main>{children}</main>
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
