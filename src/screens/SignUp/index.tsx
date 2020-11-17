import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledText from "../../components/StyledText";

import { validateEmail } from "../../utils/validation";
import { SignUpNavigationProp } from "../../types";

import styles from "./styles";

interface ISignUpProps {
  navigation: SignUpNavigationProp;
}

const SignUp: React.FC<ISignUpProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");

  let isEmailValid = validateEmail(email);
  let isLoginButtonDisabled = email.length === 0 || !isEmailValid;

  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  const handleNextClick = () => {
    navigation.navigate("SignUpPassword", {
      email: email
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOutsideClick}>
      <StyledInput
        title="What's your email?"
        value={email}
        type="emailAddress"
        onChange={v => setEmail(v)}
        keyboardType="email-address"
        style={styles.input}
      />
      <StyledText style={styles.smallText}>
        You'll need to confirm this email later.
      </StyledText>
      <StyledButton
        variant="secondary"
        ariaLabel="log in"
        onPress={handleNextClick}
        style={styles.button}
        disabled={isLoginButtonDisabled}
      >
        NEXT
      </StyledButton>
    </TouchableOpacity>
  );
};

export default SignUp;
