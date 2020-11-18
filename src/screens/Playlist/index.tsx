import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import StyledText from "../../components/StyledText";

import styles from "./styles";

interface IPlaylistProps {
  title: string;
}

const Playlist: React.FC<IPlaylistProps> = ({ title }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StyledText>{title}</StyledText>
    </SafeAreaView>
  );
};

export default Playlist;
