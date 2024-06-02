import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card, Gap } from "@components";
import { List } from "@components/list";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchTransaction } from "@store/transaction";
import { toPrice } from "@utils";
import styles from "./styles";
import { spacing } from "@themes";

export const HomeScreen = ({ navigation, route }) => {
  const { loading, available, data } = useAppSelector(
    (state) => state.transaction
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTransaction());
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Gap size={spacing.size24} />
      <Card title="Available" subtitle={`${toPrice(available)} $`} />
      <Gap size={spacing.size24} />
      <Text style={styles.transactionText}>Transaction History</Text>
      <FlatList
        data={data}
        keyExtractor={(_) => _.uid.toString()}
        renderItem={({ item }) => {
          return (
            <List title={item.date} trailing={`${toPrice(item.amount)} $`} />
          );
        }}
      />
    </SafeAreaView>
  );
};
