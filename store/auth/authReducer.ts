import Cookies from "js-cookie";

import { AuthEnum } from "./authConsts";
import { IAuthState } from "@/types/types";

interface CountAction {
  type: AuthEnum;
  payload: any;
}

export const initialAuthState: IAuthState = {
  jwt: Cookies.get("jwt"),
  username: Cookies.get("username"),
  userLoading: false,
  userLoggedIn: false,
  userLoggingIn: false,
  loginError: "",
  signupError: "",
  profileImgURL: "",
};

export const authReducer = (state = initialAuthState, action: CountAction) => {
  const { type, payload } = action;
  console.log({ payload });

  switch (type) {
    case AuthEnum.LOAD_USER_REQUEST:
      return { ...state, userLoading: true };
    case AuthEnum.LOAD_USER_SUCCESS:
      return {
        ...state,
        username: payload.username,
        userLoading: false,
        userLoggedIn: true,
      };
    case AuthEnum.LOAD_USER_ERROR:
      return {
        ...state,
        jwt: null,
        userLoggedIn: false,
        userLoading: false,
      };

    case AuthEnum.LOGIN_REQUEST:
      return { ...state, userLoading: true, userLoggingIn: true };
    case AuthEnum.LOGIN_SUCCESS:
      return {
        ...state,
        jwt: Cookies.get("jwt"),
        username: payload.username,
        userLoading: false,
        userLoggedIn: true,
        userLoggingIn: false,
        loginError: "",
      };
    case AuthEnum.LOGIN_ERROR:
      return {
        ...state,
        jwt: null,
        userLoggedIn: false,
        userLoading: false,
        userLoggingIn: false,
        loginError: payload,
      };

    case AuthEnum.SIGNUP_REQUEST:
    case AuthEnum.SIGNUP_SUCCESS:
    case AuthEnum.SIGNUP_ERROR:

    case AuthEnum.LOGOUT_SUCCESS:
      return initialAuthState;
    default:
      return state;
  }
};
