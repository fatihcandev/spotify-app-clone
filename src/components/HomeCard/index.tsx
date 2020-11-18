import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import StyledText from "../StyledText";

import styles from "./styles";

interface IHomeCardProps {
  image: any;
  text: string;
  onPress: () => void;
}

const HomeCard: React.FC<IHomeCardProps> = ({ image, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <StyledText>{text}</StyledText>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
