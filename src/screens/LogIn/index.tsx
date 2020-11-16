import React, { useState } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";

import LogoAuth from "../../components/LogoAuth";
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
      <LogoAuth />
      <View style={styles.form}>
        <StyledInput
          onChange={v => setUsername(v)}
          value={username}
          placeholder="Username"
          style={styles.input}
          type="username"
        />
        <StyledInput
          onChange={v => setPassword(v)}
          value={password}
          placeholder="Password"
          style={styles.input}
          type="password"
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
      </View>
    </TouchableOpacity>
  );
};

export default LogIn;
