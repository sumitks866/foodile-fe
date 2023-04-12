import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextInput from "@/components/Input/TextInput";
import Loader from "@/components/Loader/Loader";
import AuthWrapper from "@/components/Wrapper/AuthWrapper";
import { userLogin } from "@/api/login";
import Link from "next/link";
import { useRouter } from "next/router";
import { loginUser } from "@/store/auth/authActions";
import { AuthContext } from "@/store/store";

export default function Login() {
  const router = useRouter();
  const { state, dispatch } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onLogin = async () => {
    loginUser(dispatch, { username: email, password });
  };

  useEffect(() => {
    if (state.userLoggedIn) router.push("/");
  }, [state, router]);

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
        <PrimaryButton onClick={onLogin} disabled={state.userLoggingIn}>
          {state.userLoggingIn ? (
            <Loader />
          ) : (
            <div className="font-semibold px-8">Login</div>
          )}
        </PrimaryButton>
      </div>
      <label className="flex w-60s relative">
        New to the site ?
        <Link href="/signup" className="flex w-60s relative text-blue-600">
          {" "}
          Register
        </Link>
      </label>
    </AuthWrapper>
  );
}
