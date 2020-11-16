import React from "react";
import { View } from "react-native";

import StyledText from "../../components/StyledText";

import styles from "./styles";

const TextSection: React.FC = () => {
  return (
    <View style={styles.textSection}>
      <StyledText bold style={styles.text}>
        Free music.
      </StyledText>
      <StyledText bold style={styles.text}>
        Millions of songs.
      </StyledText>
      <StyledText bold style={styles.smallText}>
        No credit card required. Simply sign up or login to listen for free.
      </StyledText>
    </View>
  );
};

export default TextSection;
