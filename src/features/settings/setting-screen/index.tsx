import React, { Fragment, useState, useEffect, useCallback } from "react";
import { ScrollView, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { List } from "../../../components/list";
import { Gap } from "../../../components";

export const SettingScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <List title={"Setting Pin"} />
        <List title={"Logout"} />
      </SafeAreaView>
    </View>
  );
};
