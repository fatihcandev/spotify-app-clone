import React, { useContext } from "react";
import { FlatList, View } from "react-native";

import HomeCardSquare from "../HomeCardSquare";

import { IHomeCardSquareData, ISong } from "../../types";
import { recentlyPlayedHorizontal } from "../../data/recentlyPlayedHorizontal";
import { AppContext, PLAY_SONG } from "../../context";

const RecentlyPlayedHorizontal = () => {
  const { dispatch } = useContext(AppContext);
  const handleCardPress = (song: ISong) => {
    dispatch({
      type: PLAY_SONG,
      data: {
        song,
        songPlaying: true
      }
    });
  };

  const renderItem = (item: IHomeCardSquareData) => {
    const { name, artist, cover } = item;

    return (
      <HomeCardSquare
        image={item.cover}
        text={item.name}
        onPress={() =>
          handleCardPress({
            name,
            artist,
            cover,
            playing: true
          })
        }
      />
    );
  };

  return (
    <FlatList
      data={recentlyPlayedHorizontal}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={item => item.id}
      horizontal
      ItemSeparatorComponent={() => (
        <View
          style={{
            width: 10
          }}
        />
      )}
    />
  );
};

export default RecentlyPlayedHorizontal;
