import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLibrary(props: any) {
  return (
    <Svg viewBox="0 0 512 512" width={24} height={24} className="" {...props}>
      <Path
        d="M291.301 81.778L457.65 455.365 438.349 464 272 90.413zM64 463.746v-384h21.334v384H64zm128 0v-384h21.334v384H192z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgLibrary;
