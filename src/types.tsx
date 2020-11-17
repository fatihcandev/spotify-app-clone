export type RootStackParamList = {
  Root: undefined;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  SignUpPassword: undefined;
  LogIn: undefined;
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
  id: string;
  image: any;
  text: string;
  href: any;
}

export interface IHomeCardSquareData {
  id: string;
  cover: any;
  name: string;
  artist: string;
}

export interface ISong {
  name: string;
  artist: string;
  cover: any;
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
  spotify = "spotify",
  spotifyWithText = "spotifyWithText",
  google = "google",
  facebook = "facebook",
  eye = "eye",
  eyeSlash = "eyeSlash"
}
