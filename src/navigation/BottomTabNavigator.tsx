import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import LibraryScreen from "../screens/Library";
import {
  BottomTabParamList,
  HomeParamList,
  LibraryParamList,
  SearchParamList,
} from "../types";
import Icon from "../components/Icon";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: Colors.lightGray,
        activeTintColor: Colors.white,
        labelStyle: {
          marginTop: 7,
          fontSize: 12,
        },
        style: {
          paddingTop: 9,
          paddingBottom: 7,
          height: 56,
          backgroundColor: Colors.darkGray,
          borderTopWidth: 0,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "homeSolid" : "home"} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "searchSolid" : "search"} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? "librarySolid" : "library"} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
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
