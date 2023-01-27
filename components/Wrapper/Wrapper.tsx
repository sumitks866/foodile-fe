import React, { ReactNode } from "react";
import Head from "../Head/Head";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Head />
      <div className="px-32 py-4 grow">{children}</div>
    </div>
  );
}
