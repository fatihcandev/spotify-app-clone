import React, { useState } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";

import styles from "./styles";

const LogIn: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOutsideClick = () => {
    Keyboard.dismiss();
  };

  let isLoginButtonDisabled = username.length === 0 || password.length === 0;

  return (
    <TouchableOpacity style={styles.container} onPress={handleOutsideClick}>
      <StyledInput
        title="Email or username"
        value={username}
        type="emailAddress"
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
        variant="secondary"
        ariaLabel="log in"
        onPress={() => {}}
        style={styles.button}
        disabled={isLoginButtonDisabled}
      >
        LOG IN
      </StyledButton>
      <View style={styles.withoutPassContainer}>
        <StyledButton
          variant="outlined"
          ariaLabel="log in without password"
          onPress={() => {}}
          style={styles.withoutPassButton}
          textStyle={styles.withoutPassButtonText}
        >
          LOG IN WITHOUT PASSWORD
        </StyledButton>
      </View>
    </TouchableOpacity>
  );
};

export default LogIn;
