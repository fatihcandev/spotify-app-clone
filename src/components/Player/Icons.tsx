import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "../Icon";

import Colors from "../../constants/Colors";

import styles from "./styles";

interface IIconsProps {
  playing: boolean;
  onPlayPause: () => void;
}

const Icons: React.FC<IIconsProps> = ({ playing, onPlayPause }) => {
  return (
    <View style={styles.icons}>
      <View style={styles.heart}>
        <Icon name="heart" color={Colors.white} />
      </View>
      <TouchableOpacity onPress={onPlayPause}>
        <Icon name={playing ? "pause" : "play"} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Icons;
