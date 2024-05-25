import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const List = (props) => {
  const { title, subtitle, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          minHeight: 50,
          padding: 16,
          borderBottomWidth: 1,
          justifyContent:"space-between"
        }}
      >
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
