import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Input/TextInput";
import Loader from "@/components/Loader/Loader";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";
import React, { useState } from "react";

import { userSignup } from "@/api/signup";
import Link from "next/link";

export default function Signup() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const onSignUp = async () => {
    try {
      setIsLoading(true);
      // await delay(5000);
      await userSignup({ firstname, lastname, username:email, password });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthWrapper>
      <div className="w-[70%]">
        <div className="text-4xl font-bold font-[Righteous]">Sign Up</div>
        <div className="my-2 text-gray-500">Please enter your details</div>
        <TextInput
          label="First Name"
          value={firstname}
          setValue={setFirstname}
          type="text"
          required
        />
        <TextInput
          label="Last Name"
          value={lastname}
          setValue={setLastname}
          type="text"
        />
        <TextInput
          label="Email"
          value={email}
          setValue={setEmail}
          type="email"
          required
        />
        <TextInput
          label="Password"
          value={password}
          setValue={setPassword}
          type="password"
          required
        />
        <PrimaryButton onClick={onSignUp} disabled={isLoading}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="font-semibold px-8">Sign Up</div>
          )}
        </PrimaryButton>
      </div>
      <label className="flex font-serif w-60s relative">Already a user ?
        <Link href='/login' className="flex font-serif w-60s relative text-blue-600"> Login</Link>
      </label>
    </AuthWrapper>
  );
}
