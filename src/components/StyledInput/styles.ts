import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  input: {
    paddingVertical: 12,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: "proxima-nova",
    backgroundColor: Colors.gray,
    color: Colors.white,
    borderWidth: 0,
    borderRadius: 6
  }
});
