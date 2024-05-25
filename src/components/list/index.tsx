import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { color } from "../../themes";

export const List = (props) => {
  const { title, subtitle, onPress, trailing } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          minHeight: 50,
          paddingHorizontal: 16,
          alignItems: "center",
          borderBottomWidth: 1,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>{title}</Text>
          {subtitle && <Text>{subtitle}</Text>}
        </View>
        <Text>{trailing}</Text>
      </View>
    </TouchableOpacity>
  );
};
