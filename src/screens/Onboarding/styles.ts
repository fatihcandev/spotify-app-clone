import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20
  },
  logo: {
    flexDirection: "row",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonSection: {
    width: "70%"
  },
  textSection: {
    marginBottom: 20
  },
  text: {
    color: Colors.white,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  smallText: {
    color: Colors.white,
    fontSize: 16,
    textAlign: "center"
  },
  signUpButton: {
    marginBottom: 10
  }
});
