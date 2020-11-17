import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions
} from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import SignUpPassword from "../screens/SignUp/SignUpPassword";

import BottomTabNavigator from "./BottomTabNavigator";

import { AuthStackParamList, RootStackParamList } from "../types";
import Colors from "../constants/Colors";

const signUpHeaderOptions: StackNavigationOptions = {
  headerShown: true,
  headerTitle: "Create account",
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Colors.black
  },
  headerTintColor: Colors.white
};

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
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.black
          },
          headerTintColor: Colors.white
        }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ ...signUpHeaderOptions }}
      />
      <AuthStack.Screen
        name="SignUpPassword"
        component={SignUpPassword}
        options={{ ...signUpHeaderOptions }}
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
