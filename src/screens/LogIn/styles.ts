import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black
  },
  input: {
    marginBottom: 40
  },
  button: {
    width: "40%",
    alignSelf: "center",
    marginBottom: 20
  },
  forgotTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  forgotText: {
    color: Colors.lightGray
  }
});
