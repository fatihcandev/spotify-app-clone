import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledText from "../../components/StyledText";

import styles from "./styles";

const SignUpPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();
  // const route = useRoute();

  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  let isLoginButtonDisabled = password.length < 8;

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
        onPress={() => navigation.navigate("SignUpPassword")}
        style={styles.button}
        disabled={isLoginButtonDisabled}
      >
        NEXT
      </StyledButton>
    </TouchableOpacity>
  );
};

export default SignUpPassword;
