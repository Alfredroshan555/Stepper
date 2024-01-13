import { combineReducers } from "@reduxjs/toolkit";
import { stepperReducer } from "./slices/stepperSlice";

export default combineReducers({
  stepperSlice: stepperReducer,
});
