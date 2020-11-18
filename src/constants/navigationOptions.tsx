import React from "react";
import {
  CardStyleInterpolators,
  StackNavigationOptions
} from "@react-navigation/stack";
import { BottomTabBarOptions } from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon";

import Colors from "./Colors";

export const horizontalTransitionOptions: StackNavigationOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

export const bottomTabBarOptions: BottomTabBarOptions = {
  inactiveTintColor: Colors.lightGray,
  activeTintColor: Colors.white,
  labelStyle: {
    marginTop: 5,
    fontSize: 12,
    fontFamily: "proxima-nova"
  },
  style: {
    paddingTop: 9,
    paddingBottom: 7,
    height: 65,
    backgroundColor: Colors.darkGray,
    borderTopWidth: 0
  },
  keyboardHidesTabBar: true
};

export const loginScreenOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitle: "",
  headerStyle: {
    backgroundColor: Colors.black
  },
  headerTintColor: Colors.white
};

export const signUpScreenOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitle: "Create account",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Colors.black
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontFamily: "proxima-nova"
  }
};

export const playlistScreenOptions: StackNavigationOptions = {
  headerShown: true,
  headerTintColor: "white",
  headerTitleAlign: "center",
  headerRight: () => <Icon name="moreV" color={Colors.white} />,
  headerTitleStyle: {
    fontFamily: "proxima-nova"
  },
  headerStyle: {
    backgroundColor: Colors.black
  }
};
