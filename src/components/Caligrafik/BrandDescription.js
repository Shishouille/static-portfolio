import React from "react";
import styled from "styled-components";
import { caligrafik as theme } from "../../themes";

import description from "../../images/caligrafik/description.png";

const StyledBrandResume = styled.article`
  h5,
  p {
    font-family: ${theme.fontFamily.text};
    font-weight: normal;
  }
  h2 {
    font-family: ${theme.fontFamily.title};
  }
  .brand-picture {
    width: 100%;
  }
  .brand-description {
    margin-left: 0.5em;
  }
  @media (min-width: 768px) {
    width: 85%;
    margin: auto;
    display: flex;
    justify-content: center;
    h2 {
      font-weight: 100;
      line-height: 1.5em;
      font-size: 2em;
    }
    img {
      width: 100%;
    }
    .brand-description {
      width: 100%;
      padding-left: 3em;
    }
  }
`;
const BrandResume = () => {
  return (
    <StyledBrandResume>
      <div className="brand-picture">
        <img src={description} alt="" />
      </div>
      <div className="brand-description">
        <h5>Make it match</h5>
        <h2>
          Our artists can customize the artwork to fit the style and color
          palette of the space it will be displayed in
        </h2>
        <p>A perfect gift</p>
        <p>In all shapes and sizes</p>
      </div>
    </StyledBrandResume>
  );
};

export default BrandResume;
