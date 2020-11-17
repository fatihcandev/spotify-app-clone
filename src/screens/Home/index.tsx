import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";

import RecentlyPlayedGrid from "../../components/RecentlyPlayedGrid";
import RecentlyPlayedHorizontal from "../../components/RecentlyPlayedHorizontal";
import Title from "../../components/Title";

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
            <Title style={styles.title}>Good afternoon</Title>
            <RecentlyPlayedGrid navigation={navigation} />
            <Title style={styles.title}>Recently played</Title>
            <RecentlyPlayedHorizontal />
            <Title style={styles.title}>Made for you</Title>
          </View>
        )}
        renderItem={null}
      />
    </SafeAreaView>
  );
};

export default Home;
