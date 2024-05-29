import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Assurez-vous que le chemin est correct

const store = configureStore({
  reducer: rootReducer,
  // Ajoutez d'autres configurations si nécessaire
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
