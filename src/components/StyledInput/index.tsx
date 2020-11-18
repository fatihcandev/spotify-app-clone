import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View
} from "react-native";

import StyledText from "../StyledText";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IStyledInputProps {
  title?: string;
  value: string;
  placeholder?: string;
  type?: "emailAddress" | "username" | "password" | "none";
  keyboardType?: "email-address" | "default";
  focusedBgColor?: string;
  style?: StyleProp<any>;
  onChange: (v: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  title,
  value,
  placeholder,
  type,
  keyboardType,
  focusedBgColor,
  style,
  onChange,
  onFocus,
  onBlur
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const getStyle = (): StyleProp<TextStyle> => {
    return {
      ...styles.input,
      backgroundColor: focused ? focusedBgColor : Colors.white
    };
  };

  const handleFocus = () => {
    setFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setFocused(false);
    onBlur && onBlur();
  };

  return (
    <View>
      {title && <StyledText style={styles.title}>{title}</StyledText>}
      <TextInput
        style={StyleSheet.compose(getStyle(), style)}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={type === "password"}
        textContentType={type}
        keyboardType={keyboardType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default StyledInput;
