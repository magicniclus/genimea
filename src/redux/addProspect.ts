import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProspectState {
  email: string;
  initialReponses: {
    [key: number]: string;
  };
  reponses: {
    [key: number]: string | null;
  };
  timer: number;
  userId: number | null;
  userIQ: number;
}

const initialState: { prospect: ProspectState } = {
  prospect: {
    email: "",
    initialReponses: {
      1: "A",
      2: "A",
      3: "A",
      4: "A",
      5: "A",
      6: "A",
      7: "A",
      8: "A",
      9: "A",
      10: "A",
      11: "A",
      12: "A",
      13: "A",
      14: "A",
      15: "A",
      16: "A",
      17: "A",
      18: "A",
      19: "A",
      20: "A",
    },
    reponses: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
      10: null,
      11: null,
      12: null,
      13: null,
      14: null,
      15: null,
      16: null,
      17: null,
      18: null,
      19: null,
      20: null,
    },
    timer: 0,
    userId: null,
    userIQ: 0,
  },
};

const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProspect: (state, action: PayloadAction<ProspectState>) => {
      state.prospect = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.prospect.email = action.payload;
    },
    setReponses: (
      state,
      action: PayloadAction<{ [key: number]: string | null }>
    ) => {
      state.prospect.reponses = action.payload;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.prospect.timer = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.prospect.userId = action.payload;
    },
    setUserIQ: (state, action: PayloadAction<number>) => {
      state.prospect.userIQ = action.payload;
    },
  },
});

export const {
  setProspect,
  setEmail,
  setReponses,
  setTimer,
  setUserId,
  setUserIQ,
} = adminSlice.actions;

export default adminSlice.reducer;
