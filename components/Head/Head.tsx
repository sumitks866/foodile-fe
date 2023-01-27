/* eslint-disable @next/next/no-img-element */
import React from "react";
import HoverButton from "../Buttons/HoverButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "assets/logo.png";

export default function Head() {
  return (
    <div className="w-full h-16 lg:px-32 md:px-8 py-10 flex justify-between items-center">
      <div className="text-[#5c4941] font-bold text-xl flex py-4 items-center">
        <img src={Logo.src} alt="Logo" className="h-8 inline mr-2" />
        <span>Foodile</span>
      </div>
      <div className="flex justify-between font-semibold">
        <div className="">
          <HoverButton>
            <span>Explore</span>
          </HoverButton>
        </div>
        <div className="mx-4">
          <HoverButton>
            <span>Reviews</span>
          </HoverButton>
        </div>
        <div className="">
          <HoverButton>
            <span>Top Orders</span>
          </HoverButton>
        </div>
        <div className="mx-4">
          <HoverButton>
            <span>Login</span>
          </HoverButton>
        </div>
        <div className="">
          <PrimaryButton>
            <span>Signup</span>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
