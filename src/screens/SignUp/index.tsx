import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledText from "../../components/StyledText";

import { handleOutsideClick } from "../../utils/handleOutsideClick";
import { validateEmail } from "../../utils/validation";
import { safeAreaStyle } from "../../constants/safeAreaStyle";
import Colors from "../../constants/Colors";
import { SignUpNavigationProp } from "../../types";

import styles from "./styles";

interface ISignUpProps {
  navigation: SignUpNavigationProp;
}

const SignUp: React.FC<ISignUpProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");

  let isEmailValid = validateEmail(email);
  let isButtonDisabled = email.length === 0 || !isEmailValid;

  const handleNextClick = () => {
    navigation.navigate("SignUpPassword", {
      email: email
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOutsideClick}>
      <SafeAreaView style={safeAreaStyle}>
        <StyledInput
          title="What's your email?"
          value={email}
          type="emailAddress"
          onChange={v => setEmail(v)}
          keyboardType="email-address"
          returnKeyType="done"
          focusedBgColor={Colors.border}
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
          disabled={isButtonDisabled}
        >
          NEXT
        </StyledButton>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default SignUp;
