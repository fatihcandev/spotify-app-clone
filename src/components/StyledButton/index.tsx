import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";

import Icon from "../Icon";
import StyledText from "../StyledText";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IStyledButtonProps {
  variant?: "primary" | "secondary" | "outlined";
  ariaLabel: string;
  iconRight?: string;
  iconLeft?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<any>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const getColor = (variant: string) => {
  switch (variant) {
    case "primary":
      return Colors.white;
    case "secondary":
      return Colors.black;
    case "outlined":
      return Colors.border;
    default:
      return Colors.green;
  }
};

const getStyle = (
  variant: string,
  rightIcon?: string,
  disabled?: boolean
): StyleProp<ViewStyle> => {
  switch (variant) {
    case "primary":
      return {
        ...styles.primary,
        flexDirection: rightIcon ? "row-reverse" : "row",
        backgroundColor: disabled ? Colors.gray : Colors.green
      };
    case "secondary":
      return {
        ...styles.secondary,
        flexDirection: rightIcon ? "row-reverse" : "row",
        backgroundColor: disabled ? Colors.border : Colors.white
      };
    case "outlined":
      return {
        ...styles.outlined,
        flexDirection: rightIcon ? "row-reverse" : "row",
        backgroundColor: disabled ? Colors.border : ""
      };
    default:
      return {
        ...styles.primary,
        flexDirection: rightIcon ? "row-reverse" : "row",
        backgroundColor: disabled ? Colors.border : ""
      };
  }
};

const getTextColor = (variant: string, disabled?: boolean): string => {
  switch (variant) {
    case "primary" || "outlined":
      return disabled ? Colors.gray : Colors.white;
    case "secondary":
      return disabled ? Colors.gray : Colors.black;
    default:
      return disabled ? Colors.gray : Colors.white;
  }
};

const StyledButton: React.FC<IStyledButtonProps> = ({
  variant = "primary",
  ariaLabel,
  iconLeft,
  iconRight,
  loading,
  disabled,
  style,
  textStyle,
  onPress,
  children
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(getStyle(variant, iconRight, disabled), style)}
      accessibilityLabel={ariaLabel}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color={getColor(variant)} />
      ) : iconLeft || iconRight ? (
        <>
          <View style={iconLeft ? styles.iconLeft : styles.iconRight}>
            <Icon name={iconLeft! || iconRight!} color={getColor(variant)} />
          </View>
          <StyledText color={getTextColor(variant, disabled)} style={textStyle}>
            {children}
          </StyledText>
        </>
      ) : (
        <StyledText color={getTextColor(variant, disabled)} style={textStyle}>
          {children}
        </StyledText>
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
