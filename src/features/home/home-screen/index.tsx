import React, { Fragment, useState, useEffect, useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, Gap } from "../../../components";
import { List } from "../../../components/list";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setUser } from "../../../store/user";

export const HomeScreen = ({ navigation, route }) => {
  const { userName, loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

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
        {/* <Button
          title="LOL"
          onPress={() => {
            dispatch(setUser(`Message from Component ${new Date()}`));
          }}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};
