import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";

const commonStyles: StyleProp<ViewStyle> = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 48,
  paddingVertical: 16,
  borderRadius: 99
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
    color: Colors.white
  },
  textSecondary: {
    color: Colors.black
  },
  textOutlined: {
    color: Colors.border
  },
  iconLeft: {
    marginRight: 5
  },
  iconRight: {
    marginLeft: 5
  }
});
