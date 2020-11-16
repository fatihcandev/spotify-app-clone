import React from "react";
import { StyleProp, StyleSheet, TextInput, View } from "react-native";
import StyledText from "../StyledText";

import styles from "./styles";

interface IStyledInputProps {
  title: string;
  value: string;
  type?: "emailAddress" | "username" | "password";
  style?: StyleProp<any>;
  onChange: (v: string) => void;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  title,
  value,
  type,
  style,
  onChange
}) => {
  return (
    <View>
      <StyledText bold style={styles.title}>
        {title}
      </StyledText>
      <TextInput
        style={StyleSheet.compose(styles.input, style)}
        value={value}
        onChangeText={onChange}
        secureTextEntry={type === "password"}
        textContentType={type}
      />
    </View>
  );
};

export default StyledInput;
