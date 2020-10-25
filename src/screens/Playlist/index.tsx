import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface IPlaylistProps {
  title: string;
}

const Playlist: React.FC<IPlaylistProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Playlist;
