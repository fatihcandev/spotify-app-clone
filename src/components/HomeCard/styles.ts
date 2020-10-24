import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "48%",
    height: 70,
    maxHeight: 70,
    marginBottom: 15,
    backgroundColor: Colors.gray,
    borderRadius: 8,
  },
  textContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    paddingLeft: 9,
  },
  text: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    maxWidth: 70,
    height: "auto",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
