import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TextSection from "./TextSection";
import Buttons from "./Buttons";
import LogoAuth from "../../components/LogoAuth";

import styles from "./styles";

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LogoAuth />
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
