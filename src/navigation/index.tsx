import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import SignUpPassword from "../screens/SignUp/SignUpPassword";
import BottomTabNavigator from "./BottomTabNavigator";

import { signUpScreenOptions } from "../constants/navigationOptions";
import { loginScreenOptions } from "../constants/navigationOptions";

import { AuthStackParamList, RootStackParamList } from "../types";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="LogIn"
        component={LogIn}
        options={loginScreenOptions}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={signUpScreenOptions}
      />
      <AuthStack.Screen
        name="SignUpPassword"
        component={SignUpPassword}
        options={signUpScreenOptions}
      />
    </AuthStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Root" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};
