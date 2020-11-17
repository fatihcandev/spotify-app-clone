import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StyledButton from "../../components/StyledButton";
import StyledInput from "../../components/StyledInput";

import { handleOutsideClick } from "../../utils/handleOutsideClick";
import { safeAreaStyle } from "../../constants/safeAreaStyle";

import styles from "./styles";
import IconButton from "../../components/IconButton";
import Colors from "../../constants/Colors";

const LogIn: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  let isLoginButtonDisabled = username.length === 0 || password.length === 0;

  return (
    <TouchableOpacity style={styles.container} onPress={handleOutsideClick}>
      <SafeAreaView style={safeAreaStyle}>
        <StyledInput
          title="Email or username"
          value={username}
          type="emailAddress"
          onChange={v => setUsername(v)}
          focusedBgColor={Colors.border}
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <StyledInput
            title="Password"
            value={password}
            type={showPassword ? "none" : "password"}
            onChange={v => setPassword(v)}
            focusedBgColor={Colors.border}
            style={styles.input}
          />
          <IconButton
            type={showPassword ? "eye" : "eyeSlash"}
            color={Colors.lightGray}
            onPress={() => setShowPassword(!showPassword)}
            ariaLabel={showPassword ? "hide password" : "show password"}
            style={styles.eyeIcon}
          />
        </View>
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
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default LogIn;
