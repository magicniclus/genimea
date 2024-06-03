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
  userId: string | null;
  userIQ: number;
}

const initialState: { prospect: ProspectState } = {
  prospect: {
    email: "",
    initialReponses: {
      1: "A",
      2: "E",
      3: "C",
      4: "A",
      5: "E",
      6: "A",
      7: "F",
      8: "B",
      9: "D",
      10: "F",
      11: "D",
      12: "A",
      13: "D",
      14: "E",
      15: "B",
      16: "C",
      17: "A",
      18: "B",
      19: "E",
      20: "F",
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
  name: "admin",
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
