import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "49%",
    height: 70,
    marginBottom: 15,
    backgroundColor: Colors.gray,
    borderRadius: 8
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 9
  },
  text: {
    color: Colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  }
});
