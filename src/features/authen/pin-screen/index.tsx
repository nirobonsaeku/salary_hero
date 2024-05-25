import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { constant } from "../../../themes/constants";
import { TextInput, Button, Gap, TextInputMask } from "../../../components";
export const PinScreen = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  return (
    <ImageBackground source={images.bg} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
       
      </SafeAreaView>
    </ImageBackground>
  );
};
