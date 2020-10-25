import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeSolid(props: any) {
  return (
    <Svg viewBox="0 0 512 512" width={24} height={24} className="" {...props}>
      <Path
        d="M448 463.746H298.667V314.413h-85.334v149.333H64V148.318L256 36.572l192 110.984v316.19z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgHomeSolid;
