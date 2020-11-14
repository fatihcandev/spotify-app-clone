import { StackScreenProps } from "@react-navigation/stack";
import React from "react";

import { FlatList, View } from "react-native";
import RecentlyPlayedGrid from "../../components/RecentlyPlayedGrid";
import RecentlyPlayedHorizontal from "../../components/RecentlyPlayedHorizontal";

import Title from "../../components/Title";

import { HomeParamList } from "../../types";

import styles from "./styles";

export default function Home({
  navigation
}: StackScreenProps<HomeParamList, "HomeScreen">) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={() => (
        <View style={styles.container}>
          <Title style={styles.title}>Good afternoon</Title>
          <RecentlyPlayedGrid navigation={navigation} />
          <Title style={styles.title}>Recently played</Title>
          <RecentlyPlayedHorizontal />
          <Title style={styles.title}>Made for you</Title>
        </View>
      )}
      renderItem={null}
    />
  );
}
