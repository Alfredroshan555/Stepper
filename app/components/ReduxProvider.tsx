"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: any) => {
  return <Provider store={store}>{children}</Provider>;
};
