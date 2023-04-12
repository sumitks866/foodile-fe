export enum SourceEnum {
  ZOMATO = "zomato",
  SWIGGY = "swiggy",
}

export interface IPrice {
  amount: number;
  currency: string;
}

export interface IOutlet {
  name: string;
  rating: number;
  categories: string[];
  city?: string;
  lat?: string | number;
  long?: string | number;
  zip: number;
  source: SourceEnum;
  imgUrl: string;
}

export interface IFood {
  name: string;
  outlet: IOutlet;
  rating: number;
  price: number | IPrice;
  categories: string[];
  source: SourceEnum;
  imgUrl: string;
  description?: string;
}

export interface IAuthState {
  username?: string;
  firstname?: string;
  lastname?: string;
  jwt?: string;
  userLoading: boolean;
  userLoggedIn: boolean;
  userLoggingIn: boolean;
  loginError: string | Error;
  signupError: string | Error;
  profileImgURL?: string;
}
