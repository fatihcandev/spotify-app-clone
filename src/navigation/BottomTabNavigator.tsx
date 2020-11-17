import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import LibraryScreen from "../screens/Library";
import Playlist from "../screens/Playlist";
import Icon from "../components/Icon";

import {
  bottomTabBarOptions,
  playlistScreenOptions
} from "../constants/navigationOptions";
import {
  BottomTabParamList,
  HomeParamList,
  LibraryParamList,
  SearchParamList
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={bottomTabBarOptions}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "homeSolid" : "home"} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "searchSolid" : "search"} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "librarySolid" : "library"} color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
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
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

const LibraryStack = createStackNavigator<LibraryParamList>();

function LibraryNavigator() {
  return (
    <LibraryStack.Navigator headerMode="none">
      <LibraryStack.Screen name="LibraryScreen" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
}
