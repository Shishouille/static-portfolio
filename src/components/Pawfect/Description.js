import React from "react";
import styled from "styled-components";
import { pawfect as theme } from "../../themes";

import bg2 from "../../images/pawfect/bg2.png";
import list1 from "../../images/pawfect/list1.png";
import list2 from "../../images/pawfect/list2.png";
import list3 from "../../images/pawfect/list3.png";

const StyledCard = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 0.3em;
  background: white;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.14), 0 20px 20px rgba(0, 0, 0, 0.073),
    0 30px 30px rgba(0, 0, 0, 0.048);
  margin-left: 2em;
  img {
    width: 100%;
    height: 50%;
    margin: 0;
    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
  }
  div {
    background: ${theme.color.secondary};
    border-radius: 0.3em;
    width: 100%;
    height: 50%;
    padding: 1em;
    p {
      color: white;
      font-size: 0.8em;
    }
    a {
      color: ${theme.color.primary};
      font-weight: bold;
      font-size: 0.8em;
      text-decoration: none;
    }
  }
`;

const StyledDescription = styled.div`
  padding-top: 3em;
  padding-left: 3em;
  padding-bottom: 3em;
  padding-right: 1em;
  position: relative;
  z-index: 1;
  article {
    display: flex;
  }
  .description {
    width: 50%;
    .description-title {
      display: flex;
      align-items: center;
    }
    h2 {
      color: ${theme.color.secondary};
      font-weight: bold;
      padding-right: 3em;
      font-size: 2em;
      position: relative;
      width: fit-content;
      &::before {
        content: "";
        position: absolute;
        width: 75%;
        height: 5px;
        background: ${theme.color.primary};
        bottom: -0.5em;
      }
    }
    span {
      color: ${theme.color.primary};
      font-size: 9em;
      padding-bottom: 0.3em;
    }
    p {
      color: grey;
      letter-spacing: 0.1em;
    }
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    width: 50%;
  }
  .footer-bg {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    margin: 0;
    background: ${theme.color.secondary};
  }
  @media (max-width: 768px) {
    padding: 0.5em;
    article {
      flex-direction: column;
      .description,
      .cards {
        width: 100%;
      }
      .description {
        padding-top: 1em;
      }
      .description-title {
        h2 {
          padding-right: 0.5em;
        }
      }
    }
  }
`;

const Card = ({ description, image }) => (
  <StyledCard>
    <img src={image} alt="" />
    <div>
      <p>{description}</p>
      <a href="">Know More →</a>
    </div>
  </StyledCard>
);

const Description = () => {
  return (
    <StyledDescription>
      <article>
        <section className="description">
          <div className="description-title">
            <h2>Our Pets</h2> <span>···</span>
          </div>
          <p>
            Our data says that almost 30 - 35 pets come to us monthly. These
            pets include dogs, cats, hamster, rabbits and even monkeys! Each pet
            is first cleaned and taken care of. Malnourished pets are first
            brought to a state of stability. Our experts then vaccinate them in
            case of any diseases like rabies or allergies. Our pets are taken
            care of in a very friendly environment which inculcates the same
            emotions in them!
          </p>
        </section>
        <section className="cards">
          <Card description="Cleaned, sanitized, bug-free" image={list1} />
          <Card description="Vaccinated pets, disease-free" image={list2} />
          <Card
            description="Friendly, lovable and trustworthy!"
            image={list3}
          />
        </section>
      </article>
      <img className="footer-bg" src={bg2} alt="" />
    </StyledDescription>
  );
};

export default Description;
