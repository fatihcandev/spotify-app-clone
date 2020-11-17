import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

import TextSection from "./TextSection";
import Buttons from "./Buttons";
import Icon from "../../components/Icon";

import { OnboardingNavigationProp } from "../../types";
import Colors from "../../constants/Colors";

import styles from "./styles";

interface IOnboardingProps {
  navigation: OnboardingNavigationProp;
}

const Onboarding: React.FC<IOnboardingProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
};

export default Onboarding;
