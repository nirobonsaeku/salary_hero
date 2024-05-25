import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const Pin = (props) => {
  const { value } = props;
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {value.map((item, index) => (
        <Text
          key={index.toString()}
          style={{
            padding: 4,
            fontSize: 18,
          }}
        >
          {item}
        </Text>
      ))}
    </View>
  );
};
