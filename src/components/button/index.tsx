import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../themes';
import {constant} from '../../themes/constants';

export const Button = props => {
  const {onPress, title, disabled = false} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={disabled ? styles.buttonDisabled : styles.button}
        onPress={onPress}
        disabled={disabled}>
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#5024d7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: constant.width - 32,
  },
  buttonDisabled: {
    backgroundColor: color.doveGray,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
