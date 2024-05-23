import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./addProspect";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    // Ajoutez d'autres slices ici si nécessaire
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
