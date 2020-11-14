import React, { useReducer } from "react";

import { ISong } from "../types";

export const PLAY_SONG = "PLAY_SONG";
export const TOGGLE_SONG = "TOGGLE_SONG";

interface IAppState {
  songPlaying: boolean;
  song: ISong;
}

export interface IAction<T> {
  type: string;
  data?: T;
}

const initialState: IContext<IAppState> = {
  state: {
    songPlaying: false,
    song: {
      name: "",
      artist: "",
      cover: "",
      playing: false
    }
  },
  dispatch: () => null
};
export interface IContext<T> {
  state: T;
  dispatch: React.Dispatch<IAction<T>>;
}
const AppContext = React.createContext(initialState);
const reducer = (state: IAppState, action: IAction<IAppState>): IAppState => {
  const { name, artist, cover, playing } = action.data?.song!;
  switch (action.type) {
    case PLAY_SONG:
      return {
        ...state,
        songPlaying: !action.data?.songPlaying,
        song: {
          name,
          artist,
          cover,
          playing
        }
      };
    case TOGGLE_SONG:
      return {
        ...state,
        song: {
          ...state.song,
          playing: !state.song.playing
        }
      };
    default:
      return state;
  }
};

interface IAppProvider {
  children: any;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
