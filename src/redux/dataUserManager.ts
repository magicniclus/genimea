import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  userIQ: number | null;
  userId: string | null;
  timer: number | null;
  initialReponses: [] | null;
  reponses: [] | null;
  stripeSubscriptionId: string | null;
  timerEnd: number | null;
}

const initialState: UserState = {
  email: "",
  userIQ: null,
  timer: null,
  userId: null,
  initialReponses: null,
  reponses: null,
  stripeSubscriptionId: null,
  timerEnd: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setUserIQ: (state, action: PayloadAction<number>) => {
      state.userIQ = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    setUserInformations: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setUserEmail,
  setUserIQ,
  setUserId,
  setTimer,
  setUserInformations,
} = userSlice.actions;

export default userSlice.reducer;
