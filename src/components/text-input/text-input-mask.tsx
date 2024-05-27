import React from "react";
import { View, Text } from "react-native";

import { TextInputMask as RNMask } from "react-native-masked-text";
import styles from "./styles";

export const TextInputMask = React.forwardRef((props: any, ref) => {
  const {
    placeholder,
    onSubmitEditing,
    onChangeText,
    label,
    options = {
      mask: "099-999-9999",
    },
    type = "custom",
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.viewInput}>
        <RNMask
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor="#a3a3b6"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={"none"}
          scrollEnabled={false}
          style={styles.input}
          type={type}
          options={options}
          {...props}
        />
      </View>
    </View>
  );
});
