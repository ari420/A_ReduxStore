"use client";
import { store } from "../store/store";
import { Provider } from "react-redux";

export const _app = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};