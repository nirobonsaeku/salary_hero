import React, { Fragment, useState, useEffect, useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Gap } from "../../../components";
import { List } from "../../../components/list";
export const HomeScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Gap size={24} />
        <Card title="ยอดเงินทั้งหมด" subtitle={"200$"} />
        <Gap size={24} />
        <Text style={{ padding: 16 }}>Transaction History</Text>
        <List title={"Setting Pin"} />
        <List title={"Setting Pin"} />
        <List title={"Setting Pin"} />
      </ScrollView>
    </SafeAreaView>
  );
};
