import React, { useState } from "react";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { constant } from "../../../themes/constants";
import { Button, Gap, TextInputMask } from "../../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../store/hooks";
import { callLogin } from "../../../store/user";
import styles from "./styles";

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(12, "กรุณาระบุเบอร์โทรศัพท์ให้ครบ")
    .required("กรุณาระบุเบอร์โทรศัพท์"),
});

export const LoginScreen = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = async (values) => {
    await dispatch(callLogin(values.phoneNumber));
    navigation.replace("Pin");
  };
  return (
    <ImageBackground source={images.bg} style={styles.screen}>
      <Formik
        initialValues={{
          phoneNumber: "",
        }}
        validationSchema={LoginSchema}
        validateOnMount={true}
        onSubmit={handleSubmit}
      >
        {({ isValid, handleChange, values, handleSubmit }) => (
          <>
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
                value={values.phoneNumber}
                onChangeText={handleChange("phoneNumber")}
                name="phoneNumber"
              />
              <Button
                title="Login"
                onPress={handleSubmit}
                disabled={!isValid}
              />
              <Gap size={32} />
            </SafeAreaView>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
};
