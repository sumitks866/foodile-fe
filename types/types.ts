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
