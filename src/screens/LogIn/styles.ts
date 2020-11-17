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
    marginBottom: 40
  },
  withoutPassContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  withoutPassButton: {
    paddingVertical: 5,
    paddingHorizontal: 16
  },
  withoutPassButtonText: {
    fontSize: 13
  }
});
