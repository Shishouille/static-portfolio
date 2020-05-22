import React from "react";

import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import fullstarIcon from "@iconify/icons-whh/fullstar";
import emptystarIcon from "@iconify/icons-whh/emptystar";

import paint12 from "../../images/art-world/paint12.png";
import paint10 from "../../images/art-world/paint10.png";
import paint11 from "../../images/art-world/paint11.png";
import paint7 from "../../images/art-world/paint7.png";

import paint8 from "../../images/art-world/paint8.png";
import paint5 from "../../images/art-world/paint5.png";
import paint6 from "../../images/art-world/paint6.png";
import paint9 from "../../images/art-world/paint9.png";

const StyledPaintings = styled.div`
  .paintings {
    display: flex;
    justify-content: space-between;
  }
  .category {
    width: 90%;
    margin: 1em auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin: 0;
      font-weight: 500;
      font-size: 1.5em;
    }
    a {
      color: grey;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media (max-width: 768px) {
    .paintings {
      flex-direction: column;
    }
  }
`;

const StyledPainting = styled.section`
  cursor: pointer;
  text-align: center;
  width: 25%;
  margin: 0 0.5em;
  p {
    margin: 0.5em 0;
  }
  svg {
    cursor: pointer;
    margin-left: 0.5em;
  }
  img {
    width: 60%;
    margin: auto;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.14),
      0 20px 20px rgba(0, 0, 0, 0.073), 0 30px 30px rgba(0, 0, 0, 0.048);
    border: 3px solid ${theme.color.primary};
  }
  .price {
    font-weight: bold;
    color: ${theme.color.primary};
  }
  .review {
    font-size: 0.9em;
  }
  .title {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.5em;
  }
  .img-wrapper {
    background: ${theme.color.bgPaint};
    padding-top: 1em;
    padding-bottom: 1em;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 1em auto;
  }
`;

const Painting = ({ title, image, price }) => (
  <StyledPainting>
    <div className="img-wrapper">
      <img src={image} alt="" />
    </div>
    <div>
      <p className="title">{title}</p>
      <p>9 - Limited Edition Art Print</p>
      <div>
        <Icon
          icon={fullstarIcon}
          color={theme.color.primary}
          className="turning-star"
        />
        <Icon
          icon={fullstarIcon}
          color={theme.color.primary}
          className="turning-star"
        />
        <Icon
          icon={fullstarIcon}
          color={theme.color.primary}
          className="turning-star"
        />
        <Icon
          icon={fullstarIcon}
          color={theme.color.primary}
          className="turning-star"
        />
        <Icon icon={emptystarIcon} color={theme.color.primary} />
        <p className="review">(200+ reviewer)</p>
      </div>
      <p className="price">From ${price}</p>
    </div>
  </StyledPainting>
);

const Paintings = () => {
  return (
    <StyledPaintings>
      <section>
        <div className="category">
          <h3>Trending</h3>
          <a href="">See all > </a>
        </div>
        <div className="paintings">
          <Painting title="Close Horizon" image={paint7} price="40.00" />
          <Painting title="Close Horizon" image={paint12} price="50.00" />
          <Painting title="Venice" image={paint11} price="30.00" />
          <Painting title="New York" image={paint10} price="60.00" />
        </div>
      </section>
      <section>
        <div className="category">
          <h3>Popular</h3>
          <a href="">See all > </a>
        </div>
        <div className="paintings">
          <Painting title="Close Horizon" image={paint8} price="30.00" />
          <Painting title="Close Horizon" image={paint5} price="30.00" />
          <Painting title="Venice" image={paint6} price="30.00" />
          <Painting title="Bangladesh" image={paint9} price="30.00" />
        </div>
      </section>
    </StyledPaintings>
  );
};

export default Paintings;
