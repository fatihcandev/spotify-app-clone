import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";

import StyledText from "../../components/StyledText";
import RecentlyPlayedGrid from "../../components/RecentlyPlayedGrid";
import RecentlyPlayedHorizontal from "../../components/RecentlyPlayedHorizontal";

import { safeAreaStyle } from "../../constants/safeAreaStyle";
import { HomeNavigationProp } from "../../types";

import styles from "./styles";

interface IHomeProps {
  navigation: HomeNavigationProp;
}

const Home: React.FC<IHomeProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={safeAreaStyle}>
      <FlatList
        data={[]}
        ListEmptyComponent={() => (
          <View style={styles.container}>
            <StyledText style={styles.title}>Good afternoon</StyledText>
            <RecentlyPlayedGrid navigation={navigation} />
            <StyledText style={styles.title}>Recently played</StyledText>
            <RecentlyPlayedHorizontal />
            <StyledText style={styles.title}>Made for you</StyledText>
          </View>
        )}
        renderItem={null}
      />
    </SafeAreaView>
  );
};

export default Home;
