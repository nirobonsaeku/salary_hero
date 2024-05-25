import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const DialPad = (props) => {
  const { onPressKey } = props;
  return (
    <FlatList
      data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"]}
      numColumns={3}
      scrollEnabled={false}
      style={{ flexGrow: 0 }}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => onPressKey(item)}
            disabled={item == ""}
          >
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                borderWidth: item == "" ? 0 : 1,
                borderRadius: 100,
                justifyContent: "center",
                margin: 12,
                borderColor: "white",
              }}
            >
              {item == "del" ? (
                <Icon name="chevron-back-outline" size={22} color="white" />
              ) : (
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                  }}
                >
                  {item}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
