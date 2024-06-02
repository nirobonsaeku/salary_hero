import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { List } from "@components/list";
import styles from "./styles";
import { logout } from "@services";

export const SettingScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.flex}>
        <List
          title={"Setting Pin"}
          onPress={() => navigation.navigate("ResetPin")}
        />
        <List title={"Logout"} onPress={logout} />
      </SafeAreaView>
    </View>
  );
};
