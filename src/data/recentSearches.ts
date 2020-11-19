import { IRecentSearch } from "../types";

export const recentSearchesData: IRecentSearch[] = [
  {
    id: "1",
    type: "Song",
    name: "Lauren",
    artist: "Men I Trust",
    cover: require("../assets/images/lauren.jpg")
  },
  {
    id: "2",
    type: "Song",
    name: "Parade",
    artist: "Kevin Morby",
    cover: require("../assets/images/parade.jpg")
  },
  {
    id: "3",
    type: "Album",
    name: "Tristesse contemporaine",
    artist: "Tristesse Contemporaine",
    cover: require("../assets/images/tristesse-contemporaine.jpg")
  },
  {
    id: "4",
    type: "Playlist",
    name: "French Indie Pop",
    cover: require("../assets/images/french-indie-pop.jpg")
  }
];
