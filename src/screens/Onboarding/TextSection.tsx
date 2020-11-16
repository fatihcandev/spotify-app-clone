import React from "react";
import { View } from "react-native";

import StyledText from "../../components/StyledText";

import styles from "./styles";

const TextSection: React.FC = () => {
  return (
    <View style={styles.textSection}>
      <StyledText bold style={styles.text}>
        Millions of songs.
      </StyledText>
      <StyledText bold style={styles.text}>
        Free on Spotify.
      </StyledText>
    </View>
  );
};

export default TextSection;
