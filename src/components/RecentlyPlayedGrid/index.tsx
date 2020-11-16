import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeCard from "../HomeCard";

import { recentlyPlayedGridData } from "../../data/recentlyPlayedGrid";
import { IHomeCardData } from "../../types";

const RecentlyPlayedGrid: React.FC = () => {
  const navigation = useNavigation();

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
