import React, { useCallback, useEffect, useRef, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Animated, StyleProp, TouchableOpacity } from "react-native";

import Input from "./Input";
import GenreGrid from "./GenreGrid";
import History from "./History";
import StyledText from "../../components/StyledText";

import useAnimation from "../../utils/useAnimation";
import { handleOutsideClick } from "../../utils/handleOutsideClick";
import { safeAreaStyle } from "../../constants/safeAreaStyle";
import { recentSearchesData } from "../../data/recentSearches";

import styles from "./styles";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const animation = useAnimation();
  const inputBorderRadius = useRef(new Animated.Value(6)).current;
  const containerPaddingTop = useRef(new Animated.Value(100)).current;
  const containerPaddingH = useRef(new Animated.Value(20)).current;

  useFocusEffect(
    useCallback(() => {
      setSearchMode(false);
      containerPaddingTop.setValue(100);
      containerPaddingH.setValue(20);
      inputBorderRadius.setValue(6);
    }, [containerPaddingH, containerPaddingTop, inputBorderRadius])
  );

  const handleFocus = () => {
    setSearchFocused(true);
    setSearchMode(true);
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
      animation(inputBorderRadius, 250, 6);
      animation(containerPaddingH, 250, 10);
    }
  }, [
    animation,
    containerPaddingH,
    containerPaddingTop,
    inputBorderRadius,
    searchFocused
  ]);

  const containerStyle: StyleProp<any> = {
    ...styles.container,
    paddingTop: containerPaddingTop,
    paddingHorizontal: containerPaddingH
  };

  const inputStyle: StyleProp<any> = {
    borderRadius: inputBorderRadius
  };

  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
    TouchableOpacity
  );

  return (
    <AnimatedTouchableOpacity
      style={containerStyle}
      onPress={handleOutsideClick}
    >
      <SafeAreaView style={safeAreaStyle}>
        {!searchMode && <StyledText style={styles.title}>Search</StyledText>}
        <Input
          value={searchText}
          onChange={v => setSearchText(v)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={inputStyle}
        />
        {!searchMode ? (
          <>
            <StyledText style={styles.genresTitle}>Your top genres</StyledText>
            <GenreGrid />
          </>
        ) : (
          <History recentSearches={recentSearchesData} />
        )}
      </SafeAreaView>
    </AnimatedTouchableOpacity>
  );
};

export default Search;
