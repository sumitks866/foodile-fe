import React, { ReactNode } from "react";

export default function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <button className="px-4 py-1 border-2 border-[#F3BC59] rounded-full bg-[#F3BC59]">
      {children}
    </button>
  );
}
