import React from "react";
import { View, Image } from "react-native";

import StyledText from "../../components/StyledText";
import IconButton from "../../components/IconButton";

import Colors from "../../constants/Colors";
import { IRecentSearch } from "../../types";

import styles from "./styles";

interface IRecentSearchProps {
  item: IRecentSearch;
}

const RecentSearch: React.FC<IRecentSearchProps> = ({ item }) => {
  const { cover, type, name, artist } = item;
  return (
    <View style={styles.recentSearchContainer}>
      <Image source={cover} style={styles.recentSearchImage} />
      <View style={styles.searchDetailsContainer}>
        <View>
          <StyledText style={styles.searchDetailsTopText}>{name}</StyledText>
          <View style={styles.searchDetailsBottomContainer}>
            <StyledText style={styles.searchDetailsBottomText}>
              {type}
            </StyledText>
            {artist && (
              <>
                <View style={styles.dot} />
                <StyledText style={styles.searchDetailsBottomText}>
                  {artist}
                </StyledText>
              </>
            )}
          </View>
        </View>
        <IconButton
          type="x"
          color={Colors.lightGray}
          ariaLabel="Remove recent searched item"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default RecentSearch;
