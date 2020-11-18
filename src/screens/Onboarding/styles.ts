import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 40,
    paddingBottom: 40
  },
  logo: {
    marginBottom: 20
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonSection: {
    width: "100%"
  },
  textSection: {
    marginBottom: 70
  },
  text: {
    fontSize: Layout.isSmallDevice ? 35 : 40,
    textAlign: "center"
  },
  signUpButton: {
    marginBottom: 10
  },
  loginText: {
    marginTop: 15,
    textAlign: "center"
  }
});
