import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";

import HomeCard from "../../components/HomeCard";
import Title from "../../components/Title";

import { homeCardData } from "../../data/homeCardData";
import { HomeParamList } from "../../types";

import styles from "./styles";

export default function Home({
  navigation,
}: StackScreenProps<HomeParamList, "HomeScreen">) {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Good afternoon</Title>
      <View style={styles.recentlyPlayedGrid}>
        {homeCardData.map((item) => (
          <HomeCard
            key={item.text}
            image={item.image}
            text={item.text}
            onPress={() => navigation.navigate(item.href)}
          />
        ))}
      </View>
      <Title style={styles.title}>Recently played</Title>
    </View>
  );
}
