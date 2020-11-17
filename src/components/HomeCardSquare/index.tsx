import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";

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
      <Image
        source={{
          uri: image
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HomeCardSquare;
