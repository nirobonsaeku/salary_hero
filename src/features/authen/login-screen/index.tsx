import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { constant } from "../../../themes/constants";
import { TextInput, Button, Gap, TextInputMask } from "../../../components";
export const LoginScreen = ({ navigation, route }) => {
  const [value, setValue] = useState("");
  return (
    <ImageBackground source={images.bg} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Image
          source={images.logo}
          style={{
            width: constant.width / 2,
            height: constant.width / 2,
            alignSelf: "center",
            marginTop: 30,
          }}
          resizeMode="contain"
        />
        <TextInputMask
          label="Phone Number"
          keyboardType="phone-pad"
          placeholder="กรุณากรอกเบอร์โทรศัพท์"
          value={value}
          onChangeText={setValue}
        />
        <Button title="Login" onPress={() => navigation.navigate("Pin")} />
        <Gap size={32} />
      </SafeAreaView>
    </ImageBackground>
  );
};
