import { Animated } from "react-native";

type AnimationFunc = (
  ref: Animated.Value,
  duration: number,
  toValue: number,
  delay?: number
) => void;

const useAnimation = () => {
  const animation: AnimationFunc = (ref, duration, toValue, delay) => {
    Animated.timing(ref, {
      toValue,
      duration,
      delay,
      useNativeDriver: false
    }).start();
  };
  return animation;
};

export default useAnimation;
