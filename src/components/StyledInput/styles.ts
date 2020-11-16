import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 30
  },
  input: {
    paddingVertical: 16,
    paddingLeft: 20,
    fontSize: 17,
    backgroundColor: Colors.gray,
    color: Colors.darkGray,
    borderWidth: 0,
    borderRadius: 6,
    fontFamily: "Proxima Nova"
  }
});
