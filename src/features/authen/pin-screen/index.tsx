import React, { Fragment, useState, useEffect, useCallback } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { constant } from "../../../themes/constants";
import {
  TextInput,
  Button,
  Gap,
  TextInputMask,
  DialPad,
  Pin,
} from "../../../components";
export const PinScreen = ({ navigation, route }) => {
  const [value, setValue] = useState([]);

  const onPressKey = (num) => {
    if (value.length < 6 && num !== "del") {
      setValue((prev) => [...prev, num]);
    } else if (num == "del") {
      const newArray = [...value.slice(0, value.length - 1)];
      setValue(newArray);
    } else if (value.length == 6) {
      navigation.navigate("MainTab");
    }
  };

  return (
    <ImageBackground source={images.bg} style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Pin value={value} />
        <Gap size={50} />
        <DialPad onPressKey={onPressKey} />
      </SafeAreaView>
    </ImageBackground>
  );
};
