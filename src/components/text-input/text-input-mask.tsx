import React, { Fragment } from "react";
import { View, TextInput as RNTextInput, Text } from "react-native";

import { color, spacing } from "../../themes";
import { TextInputMask as RNMask } from "react-native-masked-text";

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
    <View
      style={{
        padding: 16,
      }}
    >
      <Text
        style={{
          color: color.primary,
          fontSize: 16,
          paddingBottom: 12,
          fontWeight: "600",
        }}
      >
        {label}
      </Text>
      <View
        style={{
          borderWidth: 1,
          paddingHorizontal: 16,
          borderRadius: 5,
          backgroundColor: color.backgroundColor,
          borderColor: color.backgroundColor,
        }}
      >
        <RNMask
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor="#a3a3b6"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={"none"}
          scrollEnabled={false}
          style={{
            minHeight: 44,
          }}
          type={type}
          options={options}
          {...props}
        />
      </View>
    </View>
  );
});
