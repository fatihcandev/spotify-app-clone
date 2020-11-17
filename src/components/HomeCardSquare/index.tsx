import React from "react";
import { Image, TouchableOpacity } from "react-native";

import StyledText from "../StyledText";

import styles from "./styles";

interface IHomeCardSquareProps {
  image: any;
  text: string;
  onPress: () => void;
}

const HomeCardSquare: React.FC<IHomeCardSquareProps> = ({
  image,
  text,
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <StyledText style={styles.text}>{text}</StyledText>
    </TouchableOpacity>
  );
};

export default HomeCardSquare;
