import React from "react";

import * as Icons from "../icons";

import { IconName } from "../../types";

interface IconProps {
  name: string;
  color: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ name, color, ...props }) => {
  switch (name) {
    case IconName.home:
      return <Icons.Home color={color} {...props} />;
    case IconName.homeSolid:
      return <Icons.HomeSolid color={color} {...props} />;
    case IconName.search:
      return <Icons.Search color={color} {...props} />;
    case IconName.searchSolid:
      return <Icons.SearchSolid color={color} {...props} />;
    case IconName.library:
      return <Icons.Library color={color} {...props} />;
    case IconName.librarySolid:
      return <Icons.LibrarySolid color={color} {...props} />;
    case IconName.play:
      return <Icons.Play color={color} {...props} />;
    case IconName.pause:
      return <Icons.Pause color={color} {...props} />;
    case IconName.previous:
      return <Icons.Previous color={color} {...props} />;
    case IconName.next:
      return <Icons.Next color={color} {...props} />;
    case IconName.heart:
      return <Icons.Heart color={color} {...props} />;
    case IconName.heartSolid:
      return <Icons.HeartSolid color={color} {...props} />;
    case IconName.moreV:
      return <Icons.MoreVertical color={color} {...props} />;
    case IconName.spotify:
      return <Icons.Spotify color={color} {...props} />;
    case IconName.spotifyWithText:
      return <Icons.SpotifyWithText color={color} {...props} />;
    case IconName.google:
      return <Icons.Google color={color} {...props} />;
    case IconName.facebook:
      return <Icons.Facebook color={color} {...props} />;
    case IconName.eye:
      return <Icons.Eye color={color} {...props} />;
    case IconName.eyeSlash:
      return <Icons.EyeSlash color={color} {...props} />;
    default:
      return null;
  }
};

export default Icon;
