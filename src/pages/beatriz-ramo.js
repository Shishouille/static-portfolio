import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

import styled from "styled-components";

import Layout from "../../src/components/BeatrizRamo/Layout";
import Content from "../../src/components/BeatrizRamo/Content";

const StyledBody = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  cursor: none;
`;

const StyledCursor = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1.5px solid #ece9eb;
  position: absolute;
  z-index: 10;
  top: ${props => props.top};
  left: ${props => props.left};
`;

const BeatrizRamo = () => {
  const [top, changeTop] = useState();
  const [left, changeLeft] = useState();

  const cursorHandler = event => {
    changeTop(`${event.pageY - 10}px`);
    changeLeft(`${event.pageX - 10}px`);
  };

  const isDesktop = useMediaQuery({ query: "(min-device-width: 1024px)" });
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Asap&family=Gotu&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <StyledBody onMouseMove={cursorHandler}>
        {isDesktop && <StyledCursor left={left} top={top} className="cursor" />}
        <Layout>
          <Content />
        </Layout>
      </StyledBody>
    </>
  );
};

export default BeatrizRamo;
