import React from "react";

import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import arrowLeftAlt2 from "@iconify/icons-dashicons/arrow-left-alt2";
import arrowRightAlt2 from "@iconify/icons-dashicons/arrow-right-alt2";
import fullstarIcon from "@iconify/icons-whh/fullstar";
import emptystarIcon from "@iconify/icons-whh/emptystar";

import avatar from "../../images/art-world/avatar.png";

const StyledTestimonies = styled.article`
  width: 90%;
  margin: auto;
  padding-bottom: 1em;
  svg {
    margin-left: 0.5em;
    margin-bottom: 1em;
  }
  .carroussel {
    display: flex;
    align-items: center;
    section {
      background: ${theme.color.bgWhite};
      text-align: center;
      width: 80%;
      margin: auto;
      border-radius: 0.3em;
    }
    img {
      margin: 0;
      clip-path: circle();
    }
    .author,
    .place {
      margin: 0;
    }
    .author {
      font-weight: bold;
    }
    .place {
      padding-bottom: 1em;
    }
  }
  .testimony {
    width: 80%;
    margin: 1em auto;
    font-size: 1.5em;
    line-height: 1.5em;
  }
  @media (max-width: 768px) {
    .testimony {
      font-size: 0.8em;
    }
  }
`;

const Testimonies = () => {
  return (
    <StyledTestimonies>
      <h3>What are people saying about us</h3>
      <div className="carroussel">
        <Icon icon={arrowLeftAlt2} width="2em" className="arrow-left" />
        <section>
          <p className="testimony">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            heremodel text,
          </p>
          <div>
            <Icon
              icon={fullstarIcon}
              className="turning-star"
              color={theme.color.primary}
            />
            <Icon
              icon={fullstarIcon}
              className="turning-star"
              color={theme.color.primary}
            />
            <Icon
              icon={fullstarIcon}
              className="turning-star"
              color={theme.color.primary}
            />
            <Icon
              icon={fullstarIcon}
              className="turning-star"
              color={theme.color.primary}
            />
            <Icon icon={emptystarIcon} color={theme.color.primary} />
          </div>
          <img src={avatar} alt="" />
          <p className="author">Divan Raj</p>
          <p className="place">Bangalore, India</p>
        </section>
        <Icon icon={arrowRightAlt2} width="2em" className="arrow-right" />
      </div>
    </StyledTestimonies>
  );
};

export default Testimonies;
