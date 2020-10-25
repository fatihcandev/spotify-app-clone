import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgMoreVertical(props: any) {
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
      strokeWidth="1"
      {...props}
      strokeWidth="1"
    >
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={12} cy={5} r={1} />
      <Circle cx={12} cy={19} r={1} />
    </Svg>
  );
}

export default SvgMoreVertical;
