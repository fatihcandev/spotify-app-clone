import React from "react";
import { TouchableOpacity, View } from "react-native";

import StyledButton from "../../components/StyledButton";
import StyledText from "../../components/StyledText";

import styles from "./styles";

interface IButtonsProps {
  onSignUpPress: () => void;
  onLogInPress: () => void;
  onGooglePress: () => void;
  onFacebookPress: () => void;
}

const Buttons: React.FC<IButtonsProps> = ({
  onSignUpPress,
  onLogInPress,
  onGooglePress,
  onFacebookPress
}) => {
  return (
    <View style={styles.buttonSection}>
      <StyledButton
        variant="primary"
        onPress={onSignUpPress}
        ariaLabel="sign up"
        style={styles.signUpButton}
      >
        Sign up free
      </StyledButton>
      <StyledButton
        variant="outlined"
        ariaLabel="continue with google"
        iconLeft="google"
        onPress={onGooglePress}
        style={styles.signUpButton}
      >
        Continue with Google
      </StyledButton>
      <StyledButton
        variant="outlined"
        ariaLabel="continue with facebook"
        iconLeft="facebook"
        onPress={onFacebookPress}
        style={styles.signUpButton}
      >
        Continue with Facebook
      </StyledButton>
      <TouchableOpacity onPress={onLogInPress}>
        <StyledText bold style={styles.loginText}>
          Log in
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
