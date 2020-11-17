import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

import styles from "./styles";

interface IPlaylistProps {
  title: string;
}

const Playlist: React.FC<IPlaylistProps> = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

export default Playlist;
