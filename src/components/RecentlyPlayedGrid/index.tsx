import React from "react";
import { FlatList } from "react-native";

import HomeCard from "../HomeCard";

import { IHomeCardData, HomeNavigationProp } from "../../types";
import { recentlyPlayedGridData } from "../../data/recentlyPlayedGrid";

import styles from "./styles";

interface IRecentlyPlayedGridProps {
  navigation: HomeNavigationProp;
}

const RecentlyPlayedGrid: React.FC<IRecentlyPlayedGridProps> = ({
  navigation
}) => {
  const renderItem = (item: IHomeCardData) => (
    <HomeCard
      key={item.text}
      image={item.image}
      text={item.text}
      onPress={() => navigation.navigate(item.href)}
    />
  );

  return (
    <FlatList
      scrollEnabled={false}
      data={recentlyPlayedGridData}
      renderItem={({ item }) => renderItem(item)}
      numColumns={2}
      keyExtractor={item => item.id}
      columnWrapperStyle={{
        justifyContent: "space-between"
      }}
      style={styles.container}
    />
  );
};

export default RecentlyPlayedGrid;
