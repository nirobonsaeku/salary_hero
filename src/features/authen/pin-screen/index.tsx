import React from "react";
import { ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../../assets/images";
import { Gap, DialPad, Pin } from "../../../components";
import { spacing } from "../../../themes";
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { onChangePin } from "../../../store/pin";
export const PinScreen = ({ navigation, route }) => {
  const pin = useAppSelector((state) => state.pin.value);

  const dispatch = useAppDispatch();

  return (
    <ImageBackground source={images.bg} style={styles.flex}>
      <SafeAreaView style={styles.container}>
        <Pin value={pin} />
        <Gap size={spacing.size48} />
        <DialPad
          onPressKey={(value) =>
            dispatch(onChangePin({ value, type: route.params.type }))
          }
        />
      </SafeAreaView>
    </ImageBackground>
  );
};
