import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";

import StyledText from "../StyledText";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IGenreCardProps {
  name: string;
  genre: "indie" | "rock" | "electronic" | "pop";
  onPress: () => void;
}

const GenreCard: React.FC<IGenreCardProps> = ({ name, genre, onPress }) => {
  const getContainerStyle = (): StyleProp<ViewStyle> => {
    return {
      ...styles.container,
      backgroundColor: Colors.genre[genre]
    };
  };

  return (
    <TouchableOpacity style={getContainerStyle()} onPress={onPress}>
      <StyledText style={styles.name}>{name}</StyledText>
    </TouchableOpacity>
  );
};

export default GenreCard;
