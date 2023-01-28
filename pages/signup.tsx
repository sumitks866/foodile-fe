import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Input/TextInput";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";
import React, { useState } from "react";

export default function Signup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <AuthWrapper>
      <div className="w-[70%]">
        <div className="text-4xl font-bold font-[Righteous]">Sign Up</div>
        <div className="my-2 text-gray-500">Please enter your details</div>
        <TextInput
          label="First Name"
          value={firstName}
          setValue={setFirstName}
          type="text"
          required
        />
        <TextInput
          label="Last Name"
          value={lastName}
          setValue={setLastName}
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
        <PrimaryButton>
          <div className="font-semibold px-8">Sign Up</div>
        </PrimaryButton>
      </div>
    </AuthWrapper>
  );
}
