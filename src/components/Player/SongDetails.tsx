import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface ISongDetailsProps {
  name: string;
  artist: string;
}

const SongDetails: React.FC<ISongDetailsProps> = ({ name, artist }) => {
  return (
    <View>
      <Text style={styles.songName}>{name}</Text>
      <Text style={styles.artist}>{artist}</Text>
    </View>
  );
};

export default SongDetails;
