/* eslint-disable @next/next/no-img-element */
import React from "react";
import HoverButton from "../Buttons/HoverButton";
import PrimaryButton from "../Buttons/PrimaryButton";
import Logo from "assets/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Head() {
  const router = useRouter();
  return (
    <div className="w-full h-16 lg:px-32 md:px-8 py-10 flex justify-between items-center">
      <div
        className="text-[#5c4941] font-bold text-xl flex py-4 items-center cursor-pointer"
        onClick={() => router.push("/")}
      >
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
            <Link href="/login">
              <span>Login</span>
            </Link>
          </HoverButton>
        </div>
        <div className="">
          <PrimaryButton>
            <Link href="/signup">
              <span>Signup</span>
            </Link>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
