import React from "react";
import { FlatList, View } from "react-native";

import RecentlyPlayedGrid from "../../components/RecentlyPlayedGrid";
import RecentlyPlayedHorizontal from "../../components/RecentlyPlayedHorizontal";
import Title from "../../components/Title";

import styles from "./styles";

const Home: React.FC = () => {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          <Title style={styles.title}>Good afternoon</Title>
          <RecentlyPlayedGrid />
          <Title style={styles.title}>Recently played</Title>
          <RecentlyPlayedHorizontal />
          <Title style={styles.title}>Made for you</Title>
        </View>
      )}
      renderItem={null}
    />
  );
};

export default Home;
