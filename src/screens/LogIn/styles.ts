import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.black
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    marginBottom: 20
  },
  button: {
    marginBottom: 20
  },
  forgotTextContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  forgotText: {
    color: Colors.lightGray
  }
});
