import React, { useState } from "react";
import { Animated, StyleProp, TextInput, TextStyle, View } from "react-native";

import StyledText from "../StyledText";

import styles from "./styles";

interface IStyledInputProps {
  title?: string;
  value: string;
  placeholder?: string;
  type?: "emailAddress" | "username" | "password" | "none";
  keyboardType?: "email-address" | "default";
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
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
  returnKeyType,
  focusedBgColor,
  style,
  onChange,
  onFocus,
  onBlur
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const getFocusedStyle = (): StyleProp<TextStyle> => {
    return {
      backgroundColor: focused ? focusedBgColor : style.backgroundColor
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

  const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

  return (
    <View>
      {title && <StyledText style={styles.title}>{title}</StyledText>}
      <AnimatedTextInput
        style={[styles.input, style, getFocusedStyle()]}
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        secureTextEntry={type === "password"}
        textContentType={type}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

export default StyledInput;
