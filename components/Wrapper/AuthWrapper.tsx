/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import Logo from "assets/logo.png";
import F1 from "assets/44.png";
import F2 from "assets/22.png";
import F3 from "assets/33a.png";
import loginpic from "assets/food_login.svg";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[50%] h-full flex flex-col px-24">
        <div className="text-[#5c4941]  font-bold py-6 text-xl flex items-center">
          <img src={Logo.src} alt="Logo" className="h-8 inline mr-2" />
          <span>Foodile</span>
        </div>
        <div className="grow flex flex-col justify-center">{children}</div>
      </div>
      <div className="w-[50%] flex flex-col justify-center relative bg-[#ffeeb3] px-24">
        {/* <div className="relative bg-red-300"> */}
        {/* <img src={F1.src} className="absolute w-64" />
        <img src={F2.src} className="absolute w-60 top-0" />
        <img src={F3.src} className="absolute w-60 top-[-20px] left-[35%]" /> */}
        {/* </div> */}
        <div className="text-5xl font-bold font-[Righteous]">
          <img src={loginpic.src} alt="pic not available" />
          Craving Something?
        </div>
        <div className="my-2 text-black-500">
          <b>Hurry up!</b>
          <br /> <b>Order your food now!</b>
        </div>
      </div>
    </div>
  );
}
