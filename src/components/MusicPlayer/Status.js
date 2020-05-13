import React from "react";
import styled, { keyframes } from "styled-components";
import { musicPlayer as theme } from "../../themes";

import { Icon, InlineIcon } from "@iconify/react";
import heartIcon from "@iconify/icons-cil/heart";
import discSharp from "@iconify/icons-ion/disc-sharp";
import menuIcon from "@iconify/icons-ion/menu";
import personFill from "@iconify/icons-bi/person-fill";
import uploadAlt from "@iconify/icons-uil/upload-alt";

const heartBeat = keyframes`
from { 
  transform: scale(.75); 
  }
  20% { 
  transform: scale(1); 
  }
  40% { 
  transform: scale(.75); 
  }
  60% { 
  transform: scale(1); 
  }
  80% { 
  transform: scale(.75); 
  }
  to { 
  transform: scale(.75); 
  }
`;

const StyledStatus = styled.menu`
  all: unset;
  padding: 0.5em 0;
  width: 5%;
  height: 75vh;
  margin: auto;
  display: flex;
  background: ${theme.color.secondary};
  border-radius: 0.5em;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: 2px 2px 10px 5px #090e21;
  .status-top {
    width: 100%;
    display: flex;
    flex-direction: column;
    svg {
      margin: 0.5em auto;
    }
  }
  .status-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    svg {
      margin: 1.5em auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 5%;
    margin: 0.5em auto;
    .status-top,
    .status-bottom {
      flex-direction: row;
      justify-content: space-around;
      svg {
        margin: 0;
      }
    }
    .status-bottom {
      width: 75%;
    }
  }
`;

const Status = () => {
  return (
    <StyledStatus>
      <div className="status-top">
        <Icon icon={menuIcon} color={theme.color.primary} height="1.5em" />
        <Icon icon={personFill} color={theme.color.primary} height="1.5em" />
        <Icon icon={discSharp} color={theme.color.primary} height="1.5em" />
      </div>
      <div className="status-bottom">
        <Icon
          icon={heartIcon}
          className="heartbeat"
          color={theme.color.primary}
          height="2em"
        />
        <Icon icon={uploadAlt} color={theme.color.primary} height="2em" />
      </div>
    </StyledStatus>
  );
};

export default Status;
