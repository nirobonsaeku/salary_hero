import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export const TransferCard = (props) => {
  const { name } = props;

  const renderRow = ({ label, traling }) => {
    return (
      <View style={styles.rowView}>
        <Text style={styles.textWhite}>{label}</Text>
        <Text style={styles.textWhite}>{traling}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer To</Text>
      <View style={styles.cardTransfer}>
        {renderRow({ label: "NAME", traling: name })}
        {renderRow({ label: "COMPANY", traling: "SALARY HERO" })}
        {renderRow({ label: "BANK", traling: "SCB" })}
        {renderRow({ label: "BANK ACCOUNT", traling: "XXX-XXX-XXX" })}
      </View>
    </View>
  );
};
