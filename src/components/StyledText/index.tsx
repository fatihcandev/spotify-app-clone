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
  const getStyle = (): StyleProp<TextStyle> => {
    return {
      ...styles.text,
      color: color,
      fontWeight: bold ? "bold" : "normal",
      fontFamily: bold ? "proxima-nova-bold" : "proxima-nova"
    };
  };

  return <Text style={[getStyle(), style]}>{children}</Text>;
};

export default StyledText;
