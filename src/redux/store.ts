import { combineReducers } from "redux";
import adminReducer from "./addProspect";
import userReducer from "./dataUserManager";

const rootReducer = combineReducers({
  admin: adminReducer,
  user: userReducer,
  // Ajoutez d'autres slices ici si nécessaire
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
