import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export const Pin = (props) => {
  const { value } = props;
  return (
    <View style={styles.view}>
      {value.map((item, index) => (
        <Text key={index.toString()} style={styles.text}>
          {item}
        </Text>
      ))}
    </View>
  );
};
