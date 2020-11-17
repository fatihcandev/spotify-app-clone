import React from "react";
import { View } from "react-native";
import StyledText from "../StyledText";

import styles from "./styles";

interface ISongDetailsProps {
  name: string;
  artist: string;
}

const SongDetails: React.FC<ISongDetailsProps> = ({ name, artist }) => {
  return (
    <View>
      <StyledText style={styles.songName}>{name}</StyledText>
      <StyledText style={styles.artist}>{artist}</StyledText>
    </View>
  );
};

export default SongDetails;
