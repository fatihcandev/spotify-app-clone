import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.darkGray,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    position: "absolute",
    bottom: 65,
    right: 0,
    left: 0,
    zIndex: 9999
  },
  image: {
    width: 80,
    height: 80
  },
  rightSide: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 20
  },
  songName: {
    marginBottom: 5,
    color: Colors.white
  },
  artist: {
    color: Colors.lightGray
  },
  icons: {
    flexDirection: "row"
  },
  heart: {
    marginRight: 25
  }
});
