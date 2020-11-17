import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledText from "../../components/StyledText";

import styles from "./styles";
import { SignUpPasswordRouteProp } from "../../types";

interface ISignUpPasswordProps {
  route: SignUpPasswordRouteProp;
}

const SignUpPassword: React.FC<ISignUpPasswordProps> = ({ route }) => {
  const [password, setPassword] = useState<string>("");

  let isLoginButtonDisabled = password.length < 8;

  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  console.log(route.params.email);

  return (
    <TouchableOpacity style={styles.container} onPress={handleOutsideClick}>
      <StyledInput
        title="Create a password"
        value={password}
        type="password"
        onChange={v => setPassword(v)}
        keyboardType="default"
        style={styles.passwordInput}
      />
      <StyledText style={styles.smallText}>
        Use at least 8 characters
      </StyledText>
      <StyledButton
        variant="secondary"
        ariaLabel="log in"
        onPress={() => {}}
        style={styles.button}
        disabled={isLoginButtonDisabled}
      >
        NEXT
      </StyledButton>
    </TouchableOpacity>
  );
};

export default SignUpPassword;
