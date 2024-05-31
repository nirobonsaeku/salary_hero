import React, { useState } from "react";
import { Alert, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { Gap, DialPad, Pin } from "../../../components";
import { comparePin, setPinCode } from "../../../services";
import { spacing } from "../../../themes";
import styles from "./styles";

export const PinScreen = ({ navigation, route }) => {
  const [value, setValue] = useState([]);

  const onPressKey = async (num) => {
    let valueArray = [];
    if (value.length < 5 && num !== "del") {
      valueArray = [...value, num];
      setValue(valueArray);
    } else if (num == "del") {
      const newArray = [...value.slice(0, value.length - 1)];
      setValue(newArray);
    } else if (value.length == 5) {
      valueArray = [...value, num];
      setValue(valueArray);
      if (route.params.type !== "LOGIN") {
        await setPinCode(valueArray.join(""));

        navigation.replace("MainTab");
      } else {
        const result = await comparePin(valueArray.join(""));
        console.log(`result`, result);
        if (result) {
          return navigation.navigate("MainTab");
        }
        Alert.alert("Your Pin not match!!!");
      }
    }
  };

  return (
    <ImageBackground source={images.bg} style={styles.flex}>
      <SafeAreaView style={styles.container}>
        <Pin value={value} />
        <Gap size={spacing.size48} />
        <DialPad onPressKey={onPressKey} />
      </SafeAreaView>
    </ImageBackground>
  );
};
