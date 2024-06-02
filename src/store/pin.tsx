import { createSlice } from "@reduxjs/toolkit";
import { comparePin, setPinCode } from "@services";
import * as RootNavigation from "@navigation/root-navigation";
import { CommonActions } from "@react-navigation/native";
import { PIN_CREATE } from "@features";
import { Alert } from "react-native";

const initialState = {
  value: [],
  loading: false,
};

const pinSlice = createSlice({
  name: "pin",
  initialState: initialState,
  reducers: {
    onChangePin: (state, action) => {
      if (action.payload.value == "del") {
        state.value = [...state.value.slice(0, state.value.length - 1)];
      } else if (state.value.length < 6) {
        state.value = [...state.value, action.payload.value];
        if (state.value.length >= 6) {
          if (action.payload.type == PIN_CREATE) {
            setPinCode(state.value.join("")).then((res) => {
              RootNavigation.navigate(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "MainTab" }],
                })
              );
            });
          } else {
            comparePin(state.value.join("")).then((res) => {
              if (res) {
                RootNavigation.navigate(
                  CommonActions.reset({
                    index: 0,
                    routes: [{ name: "MainTab" }],
                  })
                );
                state.value = [];
              } else {
                Alert.alert("Your Pin not match!!!");
                state.value = [];
              }
            });
          }
        }
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { onChangePin } = pinSlice.actions;

export default pinSlice.reducer;
