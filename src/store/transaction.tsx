import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTransaction } from "../services";

export const fetchTransaction = createAsyncThunk(
  "transaction/getTransaction",
  async () => {
    const response = await getTransaction();
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
      });
  },
});

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
