export type RootStackParamList = {
  Root: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  OnRepeat: undefined;
  RepeatRewind: undefined;
  DiscoverWeekly: undefined;
  TimeCapsule: undefined;
  DailyMixOne: undefined;
  DailyMixTwo: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type LibraryParamList = {
  LibraryScreen: undefined;
};

export interface IHomeCardData {
  image: string;
  text: string;
  href: any;
}

export enum IconName {
  home = "home",
  homeSolid = "homeSolid",
  search = "search",
  searchSolid = "searchSolid",
  library = "library",
  librarySolid = "librarySolid",
  play = "play",
  pause = "pause",
  previous = "previous",
  next = "next",
  heart = "heart",
  heartSolid = "heartSolid",
  moreV = "moreV",
}
