import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

import styles from "./styles";

const Library: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Library</Text>
    </SafeAreaView>
  );
};

export default Library;
