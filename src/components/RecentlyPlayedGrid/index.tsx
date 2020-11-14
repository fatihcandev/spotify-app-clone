import React from "react";
import { FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

import HomeCard from "../HomeCard";

import { recentlyPlayedGridData } from "../../data/recentlyPlayedGrid";
import { HomeParamList, IHomeCardData } from "../../types";

interface IRecentlyPlayedGridProps {
  navigation: StackNavigationProp<HomeParamList, "HomeScreen">;
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
    />
  );
};

export default RecentlyPlayedGrid;
