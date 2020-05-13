import React from "react";

import { Icon, InlineIcon } from "@iconify/react";
import sharpShortText from "@iconify/icons-ic/sharp-short-text";
import heartIcon from "@iconify/icons-cil/heart";
import bxsHeart from "@iconify/icons-bx/bxs-heart";
import roundPlayCircleFilled from "@iconify/icons-ic/round-play-circle-filled";

const PlayListElement = ({ title, artist, album, cover, favorite }) => {
  return (
    <div className="waiting-list-item">
      <div className="waiting-list-item--display">
        <Icon icon={sharpShortText} height="1.5em" />
        <div className="cover-play">
          <img src={cover} alt="" />
          <div className="hidden-play">
            <Icon icon={roundPlayCircleFilled} height="1.5em" />
          </div>
        </div>
        <div>
          <p className="song-title">{title}</p>
          <p>
            {artist} <strong>{album}</strong>
          </p>
        </div>
      </div>
      <div className="waiting-list-item--display">
        {favorite ? (
          <Icon icon={bxsHeart} className="heartbeat" height="1.5em" />
        ) : (
          <Icon icon={heartIcon} className="heartbeat" height="1.5em" />
        )}
        <p>3:22</p>
      </div>
    </div>
  );
};

export default PlayListElement;
