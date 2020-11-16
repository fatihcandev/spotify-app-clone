import React, { useState } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";
import StyledText from "../../components/StyledText";

import styles from "./styles";

const LogIn: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleOutsideClick}>
      <StyledInput
        title="Email or username"
        value={username}
        type="username"
        onChange={v => setUsername(v)}
        style={styles.input}
      />
      <StyledInput
        title="Password"
        value={password}
        type="password"
        onChange={v => setPassword(v)}
        style={styles.input}
      />
      <StyledButton
        variant="primary"
        ariaLabel="log in"
        onPress={() => {}}
        style={styles.button}
      >
        LOG IN
      </StyledButton>
      <View style={styles.forgotTextContainer}>
        <StyledText style={styles.forgotText}>Forgot password?</StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default LogIn;
