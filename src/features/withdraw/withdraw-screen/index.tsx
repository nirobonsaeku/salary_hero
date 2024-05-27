import React, { useEffect } from "react";
import { ActivityIndicator, Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Gap, TextInput, TransferCard } from "../../../components";
import { calculateEarning } from "../../../utils";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { callGetUser } from "../../../store/user";
import { Formik } from "formik";
import * as Yup from "yup";
import { callWithdraw } from "../../../store/transaction";

const WithdrawSchema = Yup.object().shape({
  amount: Yup.number().min(1).required("Required"),
});

export const WithdrawScreen = ({ navigation, route }) => {
  const { loading, userFullName } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(callGetUser());
  }, []);

  const handleSubmit = async (values) => {
    const maximun = calculateEarning(30000);
    if (maximun > parseInt(values.amount)) {
      return dispatch(callWithdraw(values.amount));
    }
    return Alert.alert("Fail");
  };

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <Formik
      initialValues={{
        amount: "",
      }}
      validationSchema={WithdrawSchema}
      validateOnMount={true}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ isValid, handleChange, values, handleSubmit }) => (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
              <Gap size={24} />
              <TransferCard name={userFullName} />
              <Gap size={24} />
              <TextInput
                label="Amount For Withdraw"
                keyboardType="number-pad"
                placeholder="amount"
                value={values.amount}
                onChangeText={handleChange("amount")}
                name="amount"
              />
              <Button
                title="Withdraw"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </ScrollView>
          </SafeAreaView>
        </>
      )}
    </Formik>
  );
};
