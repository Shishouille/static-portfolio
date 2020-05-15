import React from "react";
import styled from "styled-components";
import { artWorld as theme } from "../../themes";

import paint13 from "../../images/art-world/paint13.png";
import paint14 from "../../images/art-world/paint14.png";
import paint15 from "../../images/art-world/paint15.png";
import paint16 from "../../images/art-world/paint16.png";

const StyledFollowUs = styled.section`
  text-align: center;
  h3 {
    font-size: 2.5em;
    margin: 1em 0;
    font-weight: 400;
  }
  .painting {
    background: ${theme.color.bgPaint};
    padding: 1em;
    margin: 0 1em;
    border-radius: 0.4em;
    img {
      height: 100%;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.14),
        0 20px 20px rgba(0, 0, 0, 0.073), 0 30px 30px rgba(0, 0, 0, 0.048);
    }
  }
  .paintings {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .paintings {
      flex-direction: column;
      .painting {
        margin: 1em 0;
      }
    }
  }
`;

const Painting = ({ img }) => (
  <div className="painting">
    <img src={img} alt="" />
  </div>
);

const FollowUs = () => {
  return (
    <StyledFollowUs>
      <h3>Follow us on Instagram</h3>
      <div className="paintings">
        <Painting img={paint13} />
        <Painting img={paint14} />
        <Painting img={paint15} />
        <Painting img={paint16} />
      </div>
    </StyledFollowUs>
  );
};

export default FollowUs;
