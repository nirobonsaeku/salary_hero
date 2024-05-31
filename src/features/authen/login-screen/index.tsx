import React, { useEffect } from "react";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { Button, Gap, TextInputMask } from "../../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import { checkTokenNotExpired } from "../../../services";
import { spacing } from "../../../themes";

const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(12, "กรุณาระบุเบอร์โทรศัพท์ให้ครบ")
    .required("กรุณาระบุเบอร์โทรศัพท์"),
});

export const LoginScreen = ({ navigation, route }) => {
  useEffect(() => {
    fetchInit();
  }, []);

  const fetchInit = async () => {
    await checkTokenNotExpired();
  };

  const handleSubmit = (values) => {
    navigation.replace("OTP", {
      phoneNumber: values.phoneNumber,
    });
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
                style={styles.image}
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
              <Gap size={spacing.size32} />
            </SafeAreaView>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
};
