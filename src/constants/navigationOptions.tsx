import React from "react";
import {
  CardStyleInterpolators,
  StackNavigationOptions
} from "@react-navigation/stack";
import { BottomTabBarOptions } from "@react-navigation/bottom-tabs";

import Icon from "../components/Icon";

import Colors from "./Colors";

const commonStyles: StackNavigationOptions = {
  headerShown: true,
  headerTitleAlign: "center",
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontFamily: "proxima-nova"
  },
  headerStyle: {
    backgroundColor: Colors.black
  }
};

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
  ...commonStyles,
  headerTitle: ""
};

export const signUpScreenOptions: StackNavigationOptions = {
  headerTitle: "Create account",
  ...commonStyles
};

export const playlistScreenOptions: StackNavigationOptions = {
  headerRight: () => <Icon name="moreV" color={Colors.white} />,
  ...commonStyles
};
