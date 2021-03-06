import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLogo(props: any) {
  return (
    <Svg
      height={24}
      width={24}
      viewBox="0 0 24 24"
      aria-labelledby="spotify-logo-icon"
      className=""
      {...props}
    >
      <Path
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm5.366 15.857a.955.955 0 01-1.302.367 11.409 11.409 0 00-4.451-1.402 11.443 11.443 0 00-4.653.482.957.957 0 01-.582-1.823 13.32 13.32 0 015.429-.563c1.843.188 3.59.738 5.193 1.636.46.259.624.842.366 1.303zm1.318-3.341a.957.957 0 01-1.29.407 14.965 14.965 0 00-5.423-1.618 14.887 14.887 0 00-5.675.505.958.958 0 01-.53-1.838 16.847 16.847 0 016.398-.571c2.153.219 4.21.833 6.114 1.825.468.244.65.822.406 1.29zm.476-2.779a.957.957 0 01-.426-.1 18.475 18.475 0 00-6.406-1.849 18.472 18.472 0 00-6.66.526.958.958 0 01-.494-1.849 20.386 20.386 0 017.346-.581c2.478.251 4.856.938 7.066 2.04a.956.956 0 01-.426 1.813z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <Path fill="none" d="M0 0h24v24H0z" />
    </Svg>
  );
}

export default SvgLogo;
