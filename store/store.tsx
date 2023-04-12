import React, { useReducer } from "react";
import { initialAuthState, authReducer } from "./auth/authReducer";
import { IAuthState } from "@/types/types";

export const AuthContext = React.createContext<{
  state: IAuthState;
  dispatch: React.Dispatch<any>;
}>({ state: initialAuthState, dispatch: () => null });

export default function Store({ children }: { children: any }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
