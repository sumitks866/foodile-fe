import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick?: Function;
  disabled?: boolean;
}

export default function PrimaryButton({ children, onClick, disabled }: IProps) {
  return (
    <button
      className="px-4 py-1 border-2 border-[#F3BC59] rounded-full bg-[#F3BC59]"
      onClick={() => {
        if (!!onClick && !disabled) onClick();
      }}
      disabled={!!disabled}
    >
      {children}
    </button>
  );
}
