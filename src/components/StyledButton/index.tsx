import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IStyledButtonProps {
  variant?: "primary" | "secondary" | "outlined";
  ariaLabel: string;
  loading?: boolean;
  disabled?: boolean;
  iconRight?: string;
  iconLeft?: string;
  style?: StyleProp<any>;
  onPress: () => void;
}

const getAiColor = (variant: string) => {
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

const getStyle = (variant: string) => {
  switch (variant) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
    case "outlined":
      return styles.outlined;
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
  loading,
  disabled,
  style,
  onPress,
  children
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(getStyle(variant), style)}
      accessibilityLabel={ariaLabel}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator color={getAiColor(variant)} />
      ) : (
        <Text style={getTextStyle(variant)}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
