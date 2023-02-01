import { baseAPI } from ".";

interface ISignupRequest {
  firstname: string;
  lastname?: string;
  username: string;
  password: string;
}

export const userSignup = async (req: ISignupRequest) => {
  return await baseAPI.post("/signup", req);
};
