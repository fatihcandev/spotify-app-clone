import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 40
  },
  logo: {
    marginBottom: 20
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonSection: {
    width: "100%"
  },
  textSection: {
    marginBottom: 80
  },
  text: {
    color: Colors.white,
    fontSize: 40,
    textAlign: "center"
  },
  signUpButton: {
    marginBottom: 10
  },
  loginText: {
    marginTop: 15,
    color: Colors.white,
    textAlign: "center"
  }
});
