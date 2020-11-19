import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IStyledTextProps {
  bold?: boolean;
  color?: string;
  style?: StyleProp<any>;
}

const StyledText: React.FC<IStyledTextProps> = ({
  bold,
  color = Colors.white,
  style,
  children
}) => {
  const textStyle: StyleProp<TextStyle> = {
    ...styles.text,
    color: color,
    fontWeight: bold ? "bold" : "normal",
    fontFamily: bold ? "proxima-nova-bold" : "proxima-nova"
  };

  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default StyledText;
