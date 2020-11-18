import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  title: {
    fontSize: 35
  },
  inputContainer: {
    position: "relative",
    marginVertical: 15
  },
  input: {
    backgroundColor: Colors.white,
    color: Colors.black,
    paddingLeft: 45
  },
  searchIcon: {
    position: "absolute",
    left: 15,
    top: 15
  },
  genresTitle: {
    fontSize: 17,
    marginBottom: 15
  }
});
