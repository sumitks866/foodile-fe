import React, { useState } from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Input/TextInput";
import Loader from "@/components/Loader/Loader";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";
import { userLogin } from "@/api/login";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLogin = async () => {
    try {
      setIsLoading(true);
      const { data } = await userLogin({ username: email, password });
      localStorage.setItem("token", data.token);
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
        <PrimaryButton onClick={onLogin} disabled={isLoading}>
          {isLoading ? (
            <Loader />
          ) : (
            <div className="font-semibold px-8">Login</div>
          )}
        </PrimaryButton>
      </div>
      <label>
        New to the site ?<Link href="/signup"> Register</Link>
      </label>
    </AuthWrapper>
  );
}
