import React from "react";
import "./globals.css";
import { _app } from "./pages/_app";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <_app>
      <html>
        <body className=" overflow-x-hidden bg-slate-950">{children}</body>
      </html>
    </_app>
  );
}
