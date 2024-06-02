import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import transaction from "./transaction";
import pin from "./pin"

export const store = configureStore({
  reducer: {
    user,
    transaction,
    pin
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
