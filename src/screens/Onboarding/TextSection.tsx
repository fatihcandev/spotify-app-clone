import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const TextSection: React.FC = () => {
  return (
    <View style={styles.textSection}>
      <Text style={styles.text}>Free music.</Text>
      <Text style={styles.text}>Millions of songs.</Text>
      <Text style={styles.smallText}>
        No credit card required. Simply sign up or login to listen for free.
      </Text>
    </View>
  );
};

export default TextSection;
