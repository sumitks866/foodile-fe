import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Input/TextInput";
import Loader from "@/components/Loader/Loader";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";
import React, { useState } from "react";

import { userSignup } from "@/api/signup";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();

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
      await userSignup({ firstname, lastname, username: email, password });
      router.push("/");
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
          placeholder="Enter your first name"
          required
        />
        <TextInput
          label="Last Name"
          value={lastname}
          setValue={setLastname}
          type="text"
          placeholder="Enter your last name"
        />
        <TextInput
          label="Email"
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Enter email"
          required
        />
        <TextInput
          label="Password"
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Enter password"
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
      <label className="flex w-60s relative">Already a user ?
        <Link href='/login' className="flex w-60s relative text-blue-600"> Login</Link>
      </label>
    </AuthWrapper>
  );
}
