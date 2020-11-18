import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../screens/Onboarding";
import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import SignUpPassword from "../screens/SignUp/SignUpPassword";

import {
  loginScreenOptions,
  signUpScreenOptions
} from "../constants/navigationOptions";
import { AuthStackParamList } from "../types";

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
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

export default AuthNavigator;
