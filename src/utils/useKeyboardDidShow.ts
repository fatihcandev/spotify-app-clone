import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useKeyboardOpen = () => {
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardOpen(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardOpen(false);
  };

  return keyboardOpen;
};

export default useKeyboardOpen;
