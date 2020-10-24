import React from "react";
import { View } from "react-native";
import HomeCard from "../../components/HomeCard";
import Title from "../../components/Title";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Good afternoon</Title>
      <View style={styles.recentlyPlayedGrid}>
        <HomeCard
          image="https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_DEFAULT-en.jpg"
          text="On Repeat"
          onPress={() => {}}
        />
        <HomeCard
          image="https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_DEFAULT-en.jpg"
          text="Repeat Rewind"
          onPress={() => {}}
        />
        <HomeCard
          image="https://newjams-images.scdn.co/v2/discover-weekly/EJaHdCXNePwPVyRSEdqtU6gMtps0UcQgoONhLqbZdwjt2oQm2ylq3FVy8Il2x7VGG7Wr8cjmZGHedPrjE3Ls2DVM66S_AmVmgzRcxsBxDP4=/NTI6NjQ6NzFUMTMtMDEtMA==/default.jpg"
          text="Discover Weekly"
          onPress={() => {}}
        />
        <HomeCard
          image="https://daily-mix.scdn.co/covers/time-capsule/time-capsule-blue_DEFAULT-en.jpg"
          text="Time Capsule"
          onPress={() => {}}
        />
        <HomeCard
          image="https://dailymix-images.scdn.co/v2/img/865c453789287d6d52e59d84d8563c8c2c9d2efe/1/en/default.jpg"
          text="Daily Mix 1"
          onPress={() => {}}
        />
        <HomeCard
          image="https://dailymix-images.scdn.co/v2/img/ed0552e9746ed2bbf04ae4bcb5525700ca31522d/2/en/default.jpg"
          text="Daily Mix 2"
          onPress={() => {}}
        />
      </View>
      <Title style={styles.title}>Recently played</Title>
    </View>
  );
}
