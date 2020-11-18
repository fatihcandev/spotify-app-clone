import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import Playlist from "../screens/Playlist";

import { playlistScreenOptions } from "../constants/navigationOptions";
import { HomeParamList } from "../types";

const HomeStack = createStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator headerMode="screen">
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="OnRepeat"
        children={() => <Playlist title="On Repeat" />}
        options={{
          ...playlistScreenOptions,
          headerTitle: "On Repeat"
        }}
      />
      <HomeStack.Screen
        name="DiscoverWeekly"
        children={() => <Playlist title="Discover Weekly" />}
        options={{
          ...playlistScreenOptions,
          headerTitle: "Discover Weekly"
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
