import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { color } from "@themes";
import styles from "./styles";

export const Button = (props) => {
  const { onPress, title, disabled = false } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: disabled ? color.doveGray : color.primary,
        }}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
