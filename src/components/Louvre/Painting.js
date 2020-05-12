import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { louvre as theme } from "../../themes";

import rdlm from "../../images/louvre/rdlm.jpg";
import Img from "gatsby-image";

const StyledPainting = styled.div`
  @media (min-width: 1024px) {
    width: 45%;
    height: 170vh;
    z-index: 1;
    .painting {
      min-height: 100%;
      min-width: 1024px;
      width: 100%;
      height: auto;
    }
  }
`;

const Painting = ({ fluid }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <>
      {isBigScreen && (
        <StyledPainting>
          <Img className="painting" fluid={fluid} />
        </StyledPainting>
      )}
      {!isBigScreen && <img id="painting" src={rdlm} />}
    </>
  );
};

export default Painting;
