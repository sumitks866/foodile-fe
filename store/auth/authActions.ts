import { ILoginRequest, userLogin } from "@/api/login";
import { AuthEnum } from "./authConsts";
import { AxiosError } from "axios";

export const loginRequest = () => ({ type: AuthEnum.LOGIN_REQUEST });
export const loginError = (err: string) => ({
  type: AuthEnum.LOGIN_ERROR,
  payload: err,
});
export const loginSuccess = (data: any) => ({
  type: AuthEnum.LOGIN_SUCCESS,
  payload: data,
});

export const signupRequest = () => ({ type: AuthEnum.SIGNUP_REQUEST });
export const signupError = (err: Error) => ({
  type: AuthEnum.SIGNUP_ERROR,
  payload: err,
});
export const signupSuccess = (data: any) => ({
  type: AuthEnum.SIGNUP_SUCCESS,
  payload: data,
});

export const loadUserRequest = () => ({ type: AuthEnum.LOAD_USER_REQUEST });
export const loadUserSuccess = (data: any) => ({
  type: AuthEnum.LOAD_USER_SUCCESS,
  payload: data,
});
export const loadUserError = () => ({ type: AuthEnum.LOAD_USER_ERROR });

export const logOut = () => ({ type: AuthEnum.LOGOUT_SUCCESS });

export const loginUser = (
  dispatch: React.Dispatch<any>,
  { username, password }: ILoginRequest
) => {
  dispatch(loginRequest());
  userLogin({ username, password })
    .then((res) => {
      const { data } = res;
      console.log({ data });
      localStorage.setItem("token", data.token);
      dispatch(loginSuccess(data));
    })
    .catch((err: AxiosError) => {
      if (err.response?.status === 401) {
        dispatch(loginError("Invalid email or password"));
      } else {
        dispatch(loginError("Unable to login"));
      }
    });
};
