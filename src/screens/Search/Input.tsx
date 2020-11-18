import React from "react";
import { StyleProp, View } from "react-native";

import StyledInput from "../../components/StyledInput";
import Icon from "../../components/Icon";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IInputProps {
  value: string;
  style?: StyleProp<any>;
  onChange: (v: string) => void;
  onFocus: () => void;
  onBlur: () => void;
}

const Input: React.FC<IInputProps> = ({
  value,
  style,
  onChange,
  onFocus,
  onBlur
}) => {
  const getStyle = (): StyleProp<any> => {
    return {
      ...styles.input,
      ...style
    };
  };

  return (
    <View style={styles.inputContainer}>
      <StyledInput
        type="none"
        keyboardType="default"
        returnKeyType="search"
        value={value}
        focusedBgColor={Colors.border}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Artists, songs, or podcasts"
        style={getStyle()}
      />
      <View style={styles.searchIcon}>
        <Icon name="search" color={Colors.gray} />
      </View>
    </View>
  );
};

export default Input;
