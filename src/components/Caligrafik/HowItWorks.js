import React from "react";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";
import { caligrafik as theme } from "../../themes";

import { Icon } from "@iconify/react";
import checkmarkOutline from "@iconify/icons-carbon/checkmark-outline";
import arrowRight from "@iconify/icons-cil/arrow-right";
import arrowDown from "@iconify/icons-bi/arrow-down";

import description2 from "../../images/caligrafik/description2.png";
import beforepic from "../../images/caligrafik/beforepic.png";
import afterpic from "../../images/caligrafik/afterpic.png";
import grid1 from "../../images/caligrafik/grid1.png";
import grid2 from "../../images/caligrafik/grid2.png";
import grid3 from "../../images/caligrafik/grid3.png";

const StyledHowItWorks = styled.article`
  h5,
  p {
    font-family: ${theme.fontFamily.text};
    margin-left: 0.5em;
  }
  h2,
  h3 {
    font-family: ${theme.fontFamily.title};
    margin-left: 0.5em;
  }
  .absolute {
    height: 65vh;
  }
  section {
    margin: 2em 0;
  }
  .before-after {
    text-align: end;
    font-size: 1.2em;
    p {
      margin-right: 0.5em;
    }
  }
  .absolute-description {
    position: relative;
    .pic-description {
      position: absolute;
      background-color: white;
      padding-top: 1em;
      z-index: 2;
      border-radius: 0.3em;
      box-shadow: -10px 10px 112px -39px rgba(131, 131, 131, 0.75);
      width: 10em;
      height: fit-content;
      left: calc((100% - 10em) / 2);
      top: calc((100% - 10em) / 2);
      div {
        width: 100%;
        margin: auto;
        text-align: center;
      }
      .order-description {
        line-height: 0.2em;
      }
      svg {
        width: 3em;
        height: 3em;
      }
    }
  }

  .how-it-works-part {
    min-height: 90vh;
    img {
      width: 100%;
    }
    .arrow {
      width: 3em;
      height: 3em;
      margin: 1em auto;
    }
  }

  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
    h2 {
      margin: 2em;
    }
    .how-it-works-part {
      margin: 5em auto;
      width: 70%;
      .before-after {
        display: flex;
        height: 95vh;
        div {
          img {
            padding: 0 1em;
          }
          p {
            padding: 0 0.5em;
          }
        }
        svg {
          align-self: center;
          height: 3em;
          width: 3em;
        }
        .after {
          align-self: flex-end;
        }
      }
    }
    .order {
      position: relative;
    }
    .absolute {
      height: 90vh;
    }
    #order-received {
      left: -2em;
    }
    #order-description {
      text-align: start;
      line-height: 0.2em;
    }
  }
`;

const BubbleList = styled.div`
  border-radius: 50%;
  border: 1px solid ${theme.color.dark};
  text-align: center;
  margin: auto;
  width: 5em;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  font-family: ${theme.fontFamily.text};
  font-weight: bold;
  @media (min-width: 768px) {
    position: absolute;
    left: -6em;
    top: -2em;
  }
`;

const PicGrid = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 2fr 0.5fr;
  grid-template-rows: 0.2fr 1fr 1fr;
  gap: 0.5em;
  grid-template-areas: "A . . " "A B B" "A B B" "A C . ";
  .B {
    grid-area: B;
  }

  .C {
    grid-area: C;
  }

  .A {
    grid-area: A;
  }
  grid-gap: 0.5em;
`;
const HowItWorks = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <StyledHowItWorks>
      <h2>How it works</h2>
      {/* PART 1 */}
      <div className="how-it-works-part">
        <article className="absolute">
          <section className="order">
            <BubbleList>
              <span>1</span>
            </BubbleList>
            <h3>Place your order</h3>
            <p>
              Fill out our short form to place your order (for caricatures and
              portraits) or quote request (for illustrations. We'll review your
              request and get back to you shortly.
            </p>
          </section>
          <section className="absolute-description">
            <img src={description2} alt="" />
            <div className="pic-description" id="order-received">
              <div data-aos="fade-up">
                <Icon icon={checkmarkOutline} />
                <p>Order received</p>
              </div>
              <div className="order-description" id="order-description">
                <p>caricature</p>
                <p>1 character</p>
                <p>canvas, 30x40cm</p>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* PART 2 */}
      <div className="how-it-works-part">
        <article>
          <section className="order">
            <BubbleList>
              <span>2</span>
            </BubbleList>
            <h3>Approve the sketch</h3>
            <p>
              After confirming your order, we'll get to work. To make sure
              you'll be happy with the final artwork, we'll email you a sketch
              to review and share feedback.
            </p>
          </section>
          <section className="before-after">
            <div>
              <img src={beforepic} alt="" />
              <div>
                <p>sketch</p>
              </div>
            </div>
            {isBigScreen && <Icon icon={arrowRight} />}
            {!isBigScreen && (
              <BubbleList className="arrow">
                <Icon icon={arrowDown} />
              </BubbleList>
            )}
            <div className="after">
              <img src={afterpic} alt="" />
              <div>
                <p>final</p>
              </div>
            </div>
          </section>
        </article>
      </div>

      {/* PART 3 */}
      <div className="how-it-works-part">
        <article>
          <section className="order">
            <BubbleList>
              <span>3</span>
            </BubbleList>
            <h3>Get the goods</h3>
            <p>
              Finally, after implementing your feedback we put on the finishing
              touches, package up the artwork, and ship it to you. Depending on
              your location and prokect specifications, you'll receive it in the
              next 3-14 days.
            </p>
          </section>
          <section>
            <PicGrid>
              <img src={grid1} alt="" className="A" />
              <img src={grid2} alt="" className="B" />
              <img src={grid3} alt="" className="C" />
            </PicGrid>
          </section>
        </article>
      </div>
    </StyledHowItWorks>
  );
};

export default HowItWorks;
