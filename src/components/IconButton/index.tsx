import React from "react";
import { StyleProp, TouchableOpacity } from "react-native";

import Icon from "../Icon";

interface IIconButtonProps {
  type: string;
  color: string;
  ariaLabel: string;
  style?: StyleProp<any>;
  onPress: () => void;
}

const IconButton: React.FC<IIconButtonProps> = ({
  type,
  color,
  ariaLabel,
  style,
  onPress
}) => {
  return (
    <TouchableOpacity
      accessibilityLabel={ariaLabel}
      onPress={onPress}
      style={style}
    >
      <Icon name={type} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
