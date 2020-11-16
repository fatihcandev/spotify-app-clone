import React from "react";
import { View } from "react-native";

import StyledButton from "../../components/StyledButton";

import styles from "./styles";

interface IButtonsProps {
  onSignUpPress: () => void;
  onLogInPress: () => void;
}

const Buttons: React.FC<IButtonsProps> = ({ onSignUpPress, onLogInPress }) => {
  return (
    <View style={styles.buttonSection}>
      <StyledButton
        variant="primary"
        onPress={onSignUpPress}
        ariaLabel="sign up"
        style={styles.signUpButton}
      >
        SIGN UP FREE
      </StyledButton>
      <StyledButton
        variant="secondary"
        onPress={onLogInPress}
        ariaLabel="log in"
      >
        LOG IN
      </StyledButton>
    </View>
  );
};

export default Buttons;
