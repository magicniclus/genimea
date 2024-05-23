import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProspectState {
  email: string;
  reponses: {
    [key: number]: string | null;
  };
}

const initialState: { prospect: ProspectState } = {
  prospect: {
    email: "",
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
  },
});

export const { setProspect, setEmail, setReponses } = adminSlice.actions;

export default adminSlice.reducer;
