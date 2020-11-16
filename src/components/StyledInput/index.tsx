import React from "react";
import { StyleProp, StyleSheet, TextInput } from "react-native";

import styles from "./styles";

interface IStyledInputProps {
  value: string;
  placeholder?: string;
  type?: "username" | "password";
  style?: StyleProp<any>;
  onChange: (v: string) => void;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  value,
  placeholder,
  type,
  style,
  onChange
}) => {
  return (
    <TextInput
      style={StyleSheet.compose(styles.input, style)}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={type === "password"}
      textContentType={type}
    />
  );
};

export default StyledInput;
