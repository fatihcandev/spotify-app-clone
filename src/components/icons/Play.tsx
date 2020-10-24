import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlay(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Path d="M5 3l14 9-14 9V3z" />
    </Svg>
  );
}

export default SvgPlay;
