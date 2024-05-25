import React from 'react';
import {View} from 'react-native';

export const Gap = props => {
  const {size} = props;
  return (
    <View
      style={{
        height: size,
      }}
    />
  );
};
