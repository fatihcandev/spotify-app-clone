import React from "react";
import { FlatList } from "react-native";

import GenreCard from "../../components/GenreCard";

import { genreGridData } from "../../data/genreGrid";
import { IGenreData } from "../../types";

const GenreGrid = () => {
  const renderItem = (item: IGenreData) => (
    <GenreCard
      key={item.id}
      name={item.name}
      genre={item.genre}
      onPress={() => {}}
    />
  );

  return (
    <FlatList
      scrollEnabled={false}
      data={genreGridData}
      renderItem={({ item }) => renderItem(item)}
      numColumns={2}
      keyExtractor={item => item.id}
      columnWrapperStyle={{
        justifyContent: "space-between"
      }}
    />
  );
};

export default GenreGrid;
