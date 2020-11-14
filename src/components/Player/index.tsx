import React, { useContext } from "react";
import { View, Image } from "react-native";

import SongDetails from "./SongDetails";

import { AppContext, TOGGLE_SONG } from "../../context";

import styles from "./styles";
import Icons from "./Icons";

const Player = () => {
  const { state, dispatch } = useContext(AppContext);

  const { name, artist, cover, playing } = state.song;

  const handlePlayPause = () => {
    dispatch({
      type: TOGGLE_SONG
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/planet-caravan.jpg")}
        style={styles.image}
      />
      <View style={styles.rightSide}>
        <SongDetails name="Planet Caravan" artist="Black Sabbath" />
        <Icons playing={playing} onPlayPause={handlePlayPause} />
      </View>
    </View>
  );
};

export default Player;
