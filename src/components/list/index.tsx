import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export const List = (props) => {
  const { title, subtitle, onPress, trailing } = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={styles.container}>
        <View>
          <Text>{title}</Text>
          {subtitle && <Text>{subtitle}</Text>}
        </View>
        <Text>{trailing}</Text>
      </View>
    </TouchableOpacity>
  );
};
