import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black
  },
  input: {
    marginBottom: 8
  },
  passwordInput: {
    marginBottom: 8,
    fontSize: 15
  },
  smallText: {
    marginBottom: 25,
    color: Colors.white,
    fontSize: 13
  },
  button: {
    width: "40%",
    alignSelf: "center"
  }
});
