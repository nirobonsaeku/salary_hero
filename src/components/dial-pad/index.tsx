import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { color, spacing } from "../../themes";

export const DialPad = (props) => {
  const { onPressKey } = props;
  return (
    <FlatList
      data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"]}
      numColumns={3}
      scrollEnabled={false}
      style={styles.flex}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => onPressKey(item)}
            disabled={item == ""}
          >
            <View
              style={{
                borderWidth: item == "" ? 0 : 1,
                ...styles.circle,
              }}
            >
              {item == "del" ? (
                <Icon
                  name="chevron-back-outline"
                  size={spacing.size24}
                  color={color.white}
                />
              ) : (
                <Text style={styles.textNumber}>{item}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
