import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

const useIsKeyboardOpen = () => {
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
    console.log("keyboard did show");

    setKeyboardOpen(true);
  };

  const _keyboardDidHide = () => {
    console.log("keyboard did hide");

    setKeyboardOpen(false);
  };

  return keyboardOpen;
};

export default useIsKeyboardOpen;
