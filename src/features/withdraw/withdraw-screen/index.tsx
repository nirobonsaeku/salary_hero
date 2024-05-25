import React, { Fragment, useState, useEffect, useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, Gap } from "../../../components";
import { List } from "../../../components/list";

export const WithdrawScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Gap size={24} />
        <Card title="ยอดเงินที่ถอนได้" subtitle={"100$"} />
        <Gap size={24} />
        <Button title="Withdraw" />
      </ScrollView>
    </SafeAreaView>
  );
};
