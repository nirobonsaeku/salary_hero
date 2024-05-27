import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export const Card = (props) => {
  const { title, subtitle } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.card}>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};
