import React from "react";
import styled from "styled-components";
import { caligrafik as theme } from "../../themes";

import { Icon } from "@iconify/react";
import gatsbyIcon from "@iconify/icons-cib/gatsby";
import logoDribbble from "@iconify/icons-ion/logo-dribbble";
import logoTux from "@iconify/icons-ion/logo-tux";

const StyledTrustedClients = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  font-family: ${theme.fontFamily.text};
  color: ${theme.color.dark};
  margin: 3em auto;
  @media (min-width: 768px) {
    p {
      margin: auto 0;
    }
    svg {
      height: 2em;
      width: 2em;
    }
  }
`;

const TrustedClients = () => {
  return (
    <StyledTrustedClients>
      <p>Trusted by clients like</p>
      <Icon icon={gatsbyIcon} color={theme.color.dark} />
      <Icon icon={logoDribbble} color={theme.color.dark} />
      <Icon icon={logoTux} color={theme.color.dark} />
    </StyledTrustedClients>
  );
};

export default TrustedClients;
