import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNavigator from "./HomeNavigator";
import SearchNavigator from "./SearchNavigator";
import LibraryNavigator from "./LibraryNavigator";
import Icon from "../components/Icon";

import { bottomTabBarOptions } from "../constants/navigationOptions";
import { BottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
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
};

export default BottomTabNavigator;
