import React from "react";

interface IProps {
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: "text" | "number" | "password" | "email" | "password";
  required?: boolean;
  placeholder?: string;
}

export default function TextInput({
  label,
  value,
  setValue,
  type,
  required,
  placeholder,
}: IProps) {
  return (
    <div className="my-4 w-full">
      <span className="font-semibold text-xs mb-1">{label}</span>
      <span className="text-red-500">{required ? "*" : ""}</span>
      <input
        className="outline-none bg-transparent border-2 rounded-lg w-full px-4 py-2 border-[#f3bc59] block"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
