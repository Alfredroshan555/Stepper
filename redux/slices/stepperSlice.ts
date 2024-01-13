import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  activeStep: 0,
};

const stepperSlice = createSlice({
  name: "stepperSlice",
  initialState: initialState,
  reducers: {
    setActiveStep: (state, { payload }) => {
      state.activeStep = payload;
    },
  },
});

export const { setActiveStep } = stepperSlice.actions;

export const stepperSelecter = (state: any) => state?.stepperSlice;
export const stepperReducer = stepperSlice.reducer;
