import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";

const commonStyles: StyleProp<ViewStyle> = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: 14,
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
  textSecondary: {
    color: Colors.black
  },
  iconLeft: {
    marginRight: 10
  },
  iconRight: {
    marginLeft: 10
  }
});
