import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

interface IHomeCardProps {
  image: string;
  text: string;
  onPress: () => void;
}

const HomeCard: React.FC<IHomeCardProps> = ({ image, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
