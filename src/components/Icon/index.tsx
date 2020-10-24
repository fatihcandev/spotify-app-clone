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
  let icon: any;
  switch (name) {
    case IconName.home:
      icon = <Icons.Home color={color} {...props} />;
      break;
    case IconName.homeSolid:
      icon = <Icons.HomeSolid color={color} {...props} />;
      break;
    case IconName.search:
      icon = <Icons.Search color={color} {...props} />;
      break;
    case IconName.searchSolid:
      icon = <Icons.SearchSolid color={color} {...props} />;
      break;
    case IconName.library:
      icon = <Icons.Library color={color} {...props} />;
      break;
    case IconName.librarySolid:
      icon = <Icons.LibrarySolid color={color} {...props} />;
      break;
    case IconName.play:
      icon = <Icons.Play color={color} {...props} />;
      break;
    case IconName.pause:
      icon = <Icons.Pause color={color} {...props} />;
      break;
    case IconName.previous:
      icon = <Icons.Previous color={color} {...props} />;
      break;
    case IconName.next:
      icon = <Icons.Next color={color} {...props} />;
      break;
    case IconName.heart:
      icon = <Icons.Heart color={color} {...props} />;
      break;
    case IconName.heartSolid:
      icon = <Icons.HeartSolid color={color} {...props} />;
      break;
    default:
      icon = undefined;
      break;
  }
  return icon;
};

export default Icon;
