import React, { useState } from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Input/TextInput";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <AuthWrapper>
      <div className="w-[70%]">
        <div className="text-4xl font-bold font-[Righteous]">Login</div>
        <div className="my-2 text-gray-500">Please enter your details</div>
        <TextInput
          label="Email"
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Enter your email"
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
        <PrimaryButton>
          <div className="font-semibold px-8">Login</div>
        </PrimaryButton>
      </div>
    </AuthWrapper>
  );
}
