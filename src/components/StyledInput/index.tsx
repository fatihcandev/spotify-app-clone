import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View
} from "react-native";

import IconButton from "../IconButton";
import StyledText from "../StyledText";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IStyledInputProps {
  title?: string;
  value: string;
  placeholder?: string;
  type?: "emailAddress" | "username" | "password";
  keyboardType?: "email-address" | "default";
  style?: StyleProp<any>;
  onChange: (v: string) => void;
}

const StyledInput: React.FC<IStyledInputProps> = ({
  title,
  value,
  placeholder,
  type,
  keyboardType,
  style,
  onChange
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const getStyle = (): StyleProp<TextStyle> => {
    return {
      ...styles.input,
      backgroundColor: focused ? Colors.border : Colors.gray
    };
  };

  return (
    <View>
      {title && (
        <StyledText bold style={styles.title}>
          {title}
        </StyledText>
      )}
      {type === "password" ? (
        <View style={styles.passwordContainer}>
          <TextInput
            style={StyleSheet.compose(getStyle(), style)}
            value={value}
            placeholder={placeholder}
            onChangeText={onChange}
            secureTextEntry={!showPassword}
            textContentType="password"
            keyboardType="default"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
          <IconButton
            type={showPassword ? "eye" : "eyeSlash"}
            color={Colors.lightGray}
            onPress={() => setShowPassword(!showPassword)}
            ariaLabel={showPassword ? "hide password" : "show password"}
            style={styles.eyeIcon}
          />
        </View>
      ) : (
        <TextInput
          style={StyleSheet.compose(getStyle(), style)}
          value={value}
          placeholder={placeholder}
          onChangeText={onChange}
          textContentType={type}
          keyboardType={keyboardType}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
    </View>
  );
};

export default StyledInput;
