import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TextSection from "./TextSection";
import Buttons from "./Buttons";
import Icon from "../../components/Icon";

import Colors from "../../constants/Colors";

import styles from "./styles";

const Onboarding: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <Icon name="spotify" width={50} height={50} color={Colors.white} />
        </View>
        <TextSection />
        <Buttons
          onSignUpPress={() => navigation.navigate("SignUp")}
          onLogInPress={() => navigation.navigate("LogIn")}
          onGooglePress={() => {}}
          onFacebookPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Onboarding;
