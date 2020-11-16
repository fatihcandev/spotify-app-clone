import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";

const commonStyles: StyleProp<ViewStyle> = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 48,
  paddingVertical: 16,
  borderRadius: 99
};

const commonTextStyles: StyleProp<TextStyle> = {
  fontSize: 16,
  fontWeight: "bold"
};

export default StyleSheet.create({
  primary: {
    ...commonStyles,
    backgroundColor: Colors.green
  },
  secondary: {
    ...commonStyles,
    backgroundColor: Colors.white,
    color: Colors.black
  },
  outlined: {
    ...commonStyles,
    borderColor: Colors.border,
    borderWidth: 2
  },

  textPrimary: {
    ...commonTextStyles,
    color: Colors.white
  },
  textSecondary: {
    ...commonTextStyles,
    color: Colors.black
  },
  textOutlined: {
    ...commonTextStyles,
    color: Colors.border
  }
});
