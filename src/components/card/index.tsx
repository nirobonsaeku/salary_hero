import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { color } from "../../themes";
import { constant } from "../../themes/constants";

export const Card = (props) => {
  const { title, subtitle, onPress } = props;
  return (
    <View
      style={{
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          fontSize: 14,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          backgroundColor: color.primary,
          width: constant.width - 32,
          height: 100,
          borderRadius: 10,
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};
