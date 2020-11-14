import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";

import Icon from "../components/Icon";

import Colors from "./Colors";

export const PlaylistNavigationOptions: StackNavigationOptions = {
  headerShown: true,
  headerTintColor: "white",
  headerTitleAlign: "center",
  headerRight: () => <Icon name="moreV" color={Colors.white} />,
  headerTitleStyle: {
    fontWeight: "bold"
  },
  headerStyle: {
    backgroundColor: Colors.black
  }
};
