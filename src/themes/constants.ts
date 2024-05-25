import {Dimensions} from 'react-native';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export const constant = {
  height: screenHeight,
  width: screenWidth,
};
