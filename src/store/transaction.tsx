import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addWithdraw, getTransaction } from "@services";
import { Alert } from "react-native";

export const fetchTransaction = createAsyncThunk(
  "transaction/getTransaction",
  async () => {
    const response = await getTransaction();
    return response.data;
  }
);

export const callWithdraw = createAsyncThunk(
  "transaction/withdraw",
  async (amount) => {
    const response = await addWithdraw(amount);

    return response.data;
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    data: [],
    loading: false,
    available: 0,
  },
  reducers: {
    setTransaction(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransaction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransaction.fulfilled, (state, action) => {
        state.data = action.payload.data.transactions;
        state.available = action.payload.data.available;
        state.loading = false;
      })
      .addCase(callWithdraw.fulfilled, (state, action) => {
        if (action.payload.message == "success") {
          Alert.alert("success");
        }
      });
  },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
