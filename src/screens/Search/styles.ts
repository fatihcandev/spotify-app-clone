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
  },
  noRecentSearchTitle: {
    fontSize: 20,
    marginBottom: 10
  },
  noRecentSearchText: {
    color: Colors.lightGray,
    textAlign: "center"
  },
  recentSearchesHeader: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 20
  },
  recentSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60
  },
  recentSearchImage: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  searchDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  searchDetailsBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  searchDetailsTopText: {
    fontSize: 17
  },
  searchDetailsBottomText: {
    color: Colors.lightGray,
    fontSize: 15
  },
  dot: {
    width: 5,
    height: 5,
    marginHorizontal: 5,
    backgroundColor: Colors.lightGray,
    borderRadius: 99
  }
});
