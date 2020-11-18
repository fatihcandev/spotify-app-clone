import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../screens/Search";

import { SearchParamList } from "../types";

const SearchStack = createStackNavigator<SearchParamList>();

const SearchNavigator = () => {
  return (
    <SearchStack.Navigator headerMode="none">
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
