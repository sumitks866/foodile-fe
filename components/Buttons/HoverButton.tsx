import React, { ReactNode } from "react";

export default function HoverButton({ children }: { children: ReactNode }) {
  return (
    <div className="cursor-pointer px-4 py-1 border-2 rounded-full border-transparent hover:border-[#5c4941] hover:bg-[#f8eec8]">
      {children}
    </div>
  );
}
