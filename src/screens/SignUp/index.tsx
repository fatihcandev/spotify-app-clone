import React, { useState } from "react";
import { Keyboard, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledText from "../../components/StyledText";

import { validateEmail } from "../../utils/validation";

import styles from "./styles";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigation = useNavigation();

  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  let isEmailValid = validateEmail(email);
  let isLoginButtonDisabled = email.length === 0 || !isEmailValid;

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
        onPress={() =>
          navigation.navigate("SignUpPassword", {
            email: email
          })
        }
        style={styles.button}
        disabled={isLoginButtonDisabled}
      >
        NEXT
      </StyledButton>
    </TouchableOpacity>
  );
};

export default SignUp;
