import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 30
  },
  passwordContainer: {
    flexDirection: "row",
    position: "relative"
  },
  input: {
    width: "100%",
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 17,
    backgroundColor: Colors.gray,
    color: Colors.white,
    borderWidth: 0,
    borderRadius: 6
  },
  eyeIcon: {
    position: "absolute",
    top: 14,
    right: 16
  }
});
