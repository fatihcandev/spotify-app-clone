import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LibraryScreen from "../screens/Library";

import { LibraryParamList } from "../types";

const LibraryStack = createStackNavigator<LibraryParamList>();

const LibraryNavigator = () => {
  return (
    <LibraryStack.Navigator headerMode="none">
      <LibraryStack.Screen name="LibraryScreen" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
};

export default LibraryNavigator;
