import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userName: "",
    loading: false,
  },
  reducers: {
    setUser(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
