import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";

import Colors from "../../constants/Colors";
import Icon from "../Icon";

import styles from "./styles";

interface IStyledButtonProps {
  variant?: "primary" | "secondary" | "outlined";
  ariaLabel: string;
  iconRight?: string;
  iconLeft?: string;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<any>;
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
  rightIcon?: string
): StyleProp<ViewStyle> => {
  switch (variant) {
    case "primary":
      return {
        ...styles.primary,
        flexDirection: rightIcon ? "row-reverse" : "row"
      };
    case "secondary":
      return {
        ...styles.secondary,
        flexDirection: rightIcon ? "row-reverse" : "row"
      };
    case "outlined":
      return {
        ...styles.outlined,
        flexDirection: rightIcon ? "row-reverse" : "row"
      };
    default:
      return styles.primary;
  }
};

const getTextStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return styles.textPrimary;
    case "secondary":
      return styles.textSecondary;
    case "outlined":
      return styles.textOutlined;
    default:
      return styles.textPrimary;
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
  onPress,
  children
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(getStyle(variant, iconRight), style)}
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
          <Text style={getTextStyle(variant)}>{children}</Text>
        </>
      ) : (
        <Text style={getTextStyle(variant)}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
