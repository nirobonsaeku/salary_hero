import React from "react";
import { View, TextInput as RNTextInput, Text } from "react-native";

import styles from "./styles";

export const TextInput = React.forwardRef((props: any, ref) => {
  const { placeholder, onSubmitEditing, onChangeText, label } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.viewInput}>
        <RNTextInput
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor="#a3a3b6"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          autoCapitalize={"none"}
          scrollEnabled={false}
          style={styles.input}
          {...props}
        />
      </View>
    </View>
  );
});
