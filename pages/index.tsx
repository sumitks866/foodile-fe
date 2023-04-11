/* eslint-disable @next/next/no-img-element */
import Wrapper from "@/components/Wrapper/Wrapper";
import FoodImg from "assets/food1.png";
import WhiteButton from "@/components/Buttons/WhiteButton";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import DishIcon from "assets/foodicon.png";
import DrinkIcon from "assets/drink.png";
import PlatterIcon from "assets/plattericon.png";
import DessertIcon from "assets/desserticon.png";
import SnackIcon from "assets/nachos.png";
import Yummy from "assets/yummy.png";
import ExpandableSearch from "@/components/SearchBar/ExpandableSearch";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  console.log({ query });

  const onSubmit = (e: Event) => {
    e.preventDefault();
    if (!query) return;
    console.log("submitting");
    router.push(`/search?query=${query}`);
  };

  return (
    <Wrapper>
      <div className="w-full h-full flex justify-between items-center relative">
        <div className="flex flex-col w-[45%]">
          <div className="font-[Righteous] h-fit text-7xl">
            We give the best
            <br />
            You love
            <img src={Yummy.src} alt="yummy" className="inline h-16 mx-4" />
          </div>
          <div className="my-6 text-gray-500">
            We search for delicious foods from your local outlets and give you
            the best deals!! Search your favourite food
          </div>
          <div className="flex">
            <PrimaryButton>
              <span className="font-semibold">Explore Food</span>
            </PrimaryButton>
            <div className="mx-4" />
            <form onSubmit={onSubmit}>
              <ExpandableSearch value={query} setValue={setQuery} />
            </form>
          </div>
        </div>
        <div className="right-24 bg-[#FFF6E7] absolute">
          <img
            src={FoodImg.src}
            alt="Food Plate"
            width={600}
            className="block"
          />
        </div>
        <div className="h-[50%] flex flex-col justify-around">
          <WhiteButton icon={DishIcon}>
            <span>Dishes</span>
          </WhiteButton>
          <WhiteButton icon={DessertIcon}>Desserts</WhiteButton>
          <WhiteButton icon={PlatterIcon}>Platter</WhiteButton>
          <WhiteButton icon={DrinkIcon}>Drinks</WhiteButton>
          <WhiteButton icon={SnackIcon}>Snacks</WhiteButton>
        </div>
      </div>
    </Wrapper>
  );
}
