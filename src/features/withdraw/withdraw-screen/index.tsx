import React, { Fragment, useState, useEffect, useCallback } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Card, Gap, TransferCard } from "../../../components";
import { calculateEarning } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { callGetUser } from "../../../store/user";

export const WithdrawScreen = ({ navigation, route }) => {
  const { loading, userFullName } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(callGetUser());
  }, []);

  if(loading){
    return <ActivityIndicator />
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Gap size={24} />
        <Card title="ยอดเงินที่ถอนได้" subtitle={"100$"} />
        <Gap size={24} />
        <TransferCard name={userFullName} />
        <Gap size={24} />
        <Button title="Withdraw" />
      </ScrollView>
    </SafeAreaView>
  );
};
