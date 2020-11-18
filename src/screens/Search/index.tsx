import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, StyleProp, TouchableOpacity } from "react-native";

import Input from "./Input";
import GenreGrid from "./GenreGrid";
import StyledText from "../../components/StyledText";

import useAnimation from "../../utils/useAnimation";
import { handleOutsideClick } from "../../utils/handleOutsideClick";
import { safeAreaStyle } from "../../constants/safeAreaStyle";

import styles from "./styles";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const animation = useAnimation();
  const inputBorderRadius = useRef(new Animated.Value(6)).current;
  const containerPaddingTop = useRef(new Animated.Value(100)).current;
  const containerPaddingH = useRef(new Animated.Value(20)).current;

  const handleFocus = () => {
    setSearchFocused(true);
  };

  const handleBlur = () => {
    setSearchFocused(false);
  };

  useEffect(() => {
    if (searchFocused) {
      animation(containerPaddingTop, 250, 0);
      animation(containerPaddingH, 250, 0);
      animation(inputBorderRadius, 250, 0);
    } else {
      animation(containerPaddingTop, 250, 100);
      animation(containerPaddingH, 250, 20);
      animation(inputBorderRadius, 250, 6);
    }
  }, [
    animation,
    containerPaddingH,
    containerPaddingTop,
    inputBorderRadius,
    searchFocused
  ]);

  const getContainerStyle = (): StyleProp<any> => {
    return {
      ...styles.container,
      paddingTop: containerPaddingTop,
      paddingHorizontal: containerPaddingH
    };
  };

  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
    TouchableOpacity
  );

  return (
    <AnimatedTouchableOpacity
      style={getContainerStyle()}
      onPress={handleOutsideClick}
    >
      <SafeAreaView style={safeAreaStyle}>
        {!searchFocused && <StyledText style={styles.title}>Search</StyledText>}
        <Input
          value={searchText}
          onChange={v => setSearchText(v)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            borderRadius: inputBorderRadius
          }}
        />
        {!searchFocused && (
          <StyledText style={styles.genresTitle}>Your top genres</StyledText>
        )}
        {!searchFocused && <GenreGrid />}
      </SafeAreaView>
    </AnimatedTouchableOpacity>
  );
};

export default Search;
