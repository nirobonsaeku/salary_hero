import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser, login } from "../services";

export const callLogin = createAsyncThunk("user/login", async (phone) => {
  phone = phone.split("-").join("");
  const response = await login(phone.split("-").join(""));
  return response.data;
});

export const callGetUser = createAsyncThunk("user/user", async () => {
  const response = await getUser();
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userFullName: "",
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(callLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(callLogin.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(callGetUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(callGetUser.fulfilled, (state, action) => {
        state.userFullName = `${action.payload.data.firstname} ${action.payload.data.lastname}`;
        state.loading = false;
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;
