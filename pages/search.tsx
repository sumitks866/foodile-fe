import { searchQuery } from "@/api/search";
import FoodCard from "@/components/Cards/FoodCard";
import Wrapper from "@/components/Wrapper/Wrapper";
import { IFood, IOutlet, SourceEnum } from "@/types/types";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const mockOutlet: IOutlet = {
  name: "Burger Point",
  rating: 3.9,
  categories: ["American", "Indian"],
  zip: 284128,
  source: SourceEnum.SWIGGY,
  imgUrl:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dnmgkfppz85tp1c3xfyp",
};

const mockFood: IFood = {
  name: "Maharaja Burger",
  outlet: mockOutlet,
  rating: 4.2,
  price: 189,
  categories: ["American"],
  source: SourceEnum.SWIGGY,
  imgUrl:
    "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg",
  description:
    "A hamburger, or simply burger, is a sandwich consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.",
};

const mockResponse = [
  mockFood,
  mockFood,
  mockFood,
  mockFood,
  mockFood,
  mockFood,
  mockFood,
  mockFood,
  mockFood,
];

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    if (!query) return;
    console.log({ query });
    (async () => {
      const res = await searchQuery({
        location: "jhansi",
        item: query.toString(),
      });
      console.log(res);
    })();
  }, [query]);

  return (
    <Wrapper>
      <div>search {query}</div>
      <div className="flex justify-center">
        <div className="grid gap-12 grid-cols-4 w-fit">
          {mockResponse.map((food, id) => (
            <FoodCard key={id} food={food} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
