import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Platform, ImageBackground } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";
import { CELL_COUNT, PIN_CREATE } from "../constants";
import { images } from "../../../assets/images";
import { useAppDispatch } from "../../../store/hooks";
import { callLogin } from "../../../store/user";

export const OTPScreen = (props) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [propsCell, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (value.length == 6) {
      const handleSubmit = async () => {
        try {
          await dispatch(callLogin(props.route.params.phoneNumber));
          props.navigation.replace("Pin", {
            type: PIN_CREATE,
          });
        } catch (err) {}
      };
      handleSubmit();
    }
  }, [value.length == 6]);

  return (
    <ImageBackground source={images.bg} style={styles.screen}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Verification</Text>
        <CodeField
          ref={ref}
          {...propsCell}
          value={value}
          onChangeText={(value) => {
            if (/^[0-9]+$/.test(value)) {
              setValue(value);
            }
          }}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: "sms-otp",
            default: "one-time-code",
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
