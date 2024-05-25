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
import { TextInput, Button, Gap, TextInputMask } from "../../../components";
export const PinScreen = ({ navigation, route }) => {
  const [value, setValue] = useState([]);

  const onPressKey = (num) => {
    if (value.length < 6 && num !== "del") {
      setValue((prev) => [...prev, num]);
    } else if (num == "del") {
      const newArray = [...value.slice(0, value.length - 1)];
      setValue(newArray);
    }else if(value.length == 6){
      navigation.navigate("MainTab")
    }
  };

  return (
    <ImageBackground source={images.bg} style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>
          {value.map((el, index) => (
            <Text key={index.toString()}>{el}</Text>
          ))}
        </Text>
        <Gap size={50} />
        <FlatList
          data={["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"]}
          numColumns={3}
          scrollEnabled={false}
          style={{ flexGrow: 0 }}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => onPressKey(item)}
                disabled={item == ""}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: "center",
                  }}
                >
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <Text>LOL</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};
