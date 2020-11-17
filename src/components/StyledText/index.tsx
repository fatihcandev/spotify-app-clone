import React from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import styles from "./styles";

interface IStyledTextProps {
  bold?: boolean;
  style?: StyleProp<any>;
}

const StyledText: React.FC<IStyledTextProps> = ({ bold, style, children }) => {
  const getStyle = (): StyleProp<TextStyle> => {
    if (bold) {
      return {
        ...styles.text,
        fontWeight: "bold",
        fontFamily: "proxima-nova-bold"
      };
    } else {
      return styles.text;
    }
  };

  return <Text style={StyleSheet.compose(getStyle(), style)}>{children}</Text>;
};

export default StyledText;
