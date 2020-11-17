import React from "react";
import { StyleProp, StyleSheet, Text } from "react-native";

import styles from "./styles";

interface ITitleProps {
  style?: StyleProp<any>;
}

const Title: React.FC<ITitleProps> = ({ children, style }) => (
  <Text style={StyleSheet.compose(styles.text, style && style)}>
    {children}
  </Text>
);

export default Title;
