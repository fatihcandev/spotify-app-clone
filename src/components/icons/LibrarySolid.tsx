import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLibrarySolid(props: any) {
  return (
    <Svg viewBox="0 0 512 512" width={24} height={24} className="" {...props}>
      <Path
        d="M311.873 77.46l166.349 373.587-39.111 17.27L272.762 94.73zM64 463.746v-384h42.666v384H64zm106.667 0v-384h42.667v384h-42.666z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgLibrarySolid;
