import React from "react";
import { View } from "react-native";

import Icon from "../Icon";

import Colors from "../../constants/Colors";

import styles from "./styles";

const LogoAuth = () => {
  return (
    <View style={styles.logo}>
      <Icon name="logoText" width={100} height={100} color={Colors.white} />
    </View>
  );
};

export default LogoAuth;
