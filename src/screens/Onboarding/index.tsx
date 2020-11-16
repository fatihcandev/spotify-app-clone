import React from "react";
import { View } from "react-native";

import Buttons from "./Buttons";
import TextSection from "./TextSection";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "../../components/Icon";
import Colors from "../../constants/Colors";

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="logoText" width={75} height={75} color={Colors.white} />
      </View>
      <View style={styles.content}>
        <TextSection />
        <Buttons
          onSignUpPress={() => navigation.navigate("SignUp")}
          onLogInPress={() => navigation.navigate("LogIn")}
        />
      </View>
    </View>
  );
};

export default Onboarding;
