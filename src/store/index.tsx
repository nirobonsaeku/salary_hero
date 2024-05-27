import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import transaction from "./transaction";

export const store = configureStore({
  reducer: {
    user,
    transaction,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
