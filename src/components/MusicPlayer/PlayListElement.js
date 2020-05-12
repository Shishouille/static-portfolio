import React from "react";

import { Icon, InlineIcon } from "@iconify/react";
import sharpShortText from "@iconify/icons-ic/sharp-short-text";
import heartIcon from "@iconify/icons-cil/heart";
import bxsHeart from "@iconify/icons-bx/bxs-heart";

const PlayListElement = ({ title, artist, album, cover, favorite }) => {
  return (
    <div className="waiting-list-item">
      <div className="waiting-list-item--display">
        <Icon icon={sharpShortText} height="1.5em" />
        <img src={cover} alt="" />
        <div>
          <p className="song-title">{title}</p>
          <p>
            {artist} <strong>{album}</strong>
          </p>
        </div>
      </div>
      <div className="waiting-list-item--display">
        {favorite ? (
          <Icon icon={bxsHeart} height="1.5em" />
        ) : (
          <Icon icon={heartIcon} height="1.5em" />
        )}
        <p>3:22</p>
      </div>
    </div>
  );
};

export default PlayListElement;
