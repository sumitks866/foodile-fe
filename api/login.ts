import { Axios, AxiosResponse } from "axios";
import { baseAPI } from ".";

interface IUserLoginResponse {
  token: string;
}

interface ILoginRequest {
  username: string;
  password: string;
}

export const userLogin = async (
  req: ILoginRequest
): Promise<AxiosResponse<IUserLoginResponse>> => {
  return await baseAPI.post("/login", req);
};
