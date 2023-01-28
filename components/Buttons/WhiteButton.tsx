import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";

export default function WhiteButton({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: StaticImageData;
}) {
  return (
    <button className="text-center items-center font-semibold w-28 px-2 py-1 rounded-full drop-shadow-md bg-[#FEFFFF] flex">
      {!!icon && <img src={icon.src} className="h-6 mr-2" />}
      {children}
    </button>
  );
}
