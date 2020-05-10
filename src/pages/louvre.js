import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import styled from "styled-components";
import { louvre as theme } from '../themes';

import Content from '../../src/components/Louvre/Content';
import Painting from '../../src/components/Louvre/Painting';

const StyledWrapper = styled.div`
  font-family: ${theme.fontFamily.text};
  display: flex;
  flex-direction: column;
  #painting {
    width: 95%;
    margin: 1em auto;
    position: relative;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    max-height: 100vh;
  }
`;

const Louvre = ({ data }) => {
  return(
  <>
    <Helmet> 
      <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nanum+Myeongjo:wght@400;700&display=swap" rel="stylesheet" />
    </Helmet>
    <StyledWrapper>
        <Content />
        <Painting fluid={data.file.childImageSharp.fluid} />
    </StyledWrapper>
  </>
);};


export const query = graphql`
  query {
      file(relativePath: {eq: "louvre/rdlm.jpg"}) {
        childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default Louvre;
