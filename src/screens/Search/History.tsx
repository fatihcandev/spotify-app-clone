import React from "react";
import { FlatList, StyleProp, View, ViewStyle } from "react-native";

import RecentSearch from "./RecentSearch";
import StyledText from "../../components/StyledText";

import { IRecentSearch } from "../../types";

import styles from "./styles";

interface IHistoryProps {
  recentSearches: IRecentSearch[];
}

const History: React.FC<IHistoryProps> = ({ recentSearches }) => {
  let noRecentSearch = recentSearches.length === 0;

  const style: StyleProp<ViewStyle> = {
    flex: 1,
    justifyContent: noRecentSearch ? "center" : "flex-start",
    alignItems: noRecentSearch ? "center" : "stretch",
    paddingHorizontal: noRecentSearch ? 30 : 10
  };

  const getHeader = () => {
    return (
      <StyledText style={styles.recentSearchesHeader}>
        Recent Searches
      </StyledText>
    );
  };

  return (
    <View style={style}>
      {noRecentSearch ? (
        <>
          <StyledText style={styles.noRecentSearchTitle}>
            Play what you love
          </StyledText>
          <StyledText style={styles.noRecentSearchText}>
            Search for artists, songs, podcasts and more.
          </StyledText>
        </>
      ) : (
        <FlatList
          data={recentSearches}
          renderItem={({ item }) => <RecentSearch item={item} key={item.id} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={getHeader()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      )}
    </View>
  );
};

export default History;
