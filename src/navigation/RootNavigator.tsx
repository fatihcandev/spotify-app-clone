import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./BottomTabNavigator";

import { RootStackParamList } from "../types";

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
