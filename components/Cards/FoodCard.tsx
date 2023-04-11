import { IFood } from "@/types/types";
import React from "react";

interface IProps {
  food: IFood;
}

export default function FoodCard({ food }: IProps) {
  return (
    <div className="w-64 border rounded-lg overflow-hidden bg-white">
      <img src={food.imgUrl} alt={food.name} />
      <div className="px-2 flex flex-col">
        <div className="font-bold text-center">{food.name}</div>
        <div className="text-xs text-center">{food.outlet.name}</div>
        <div className="text-xs card-ellipsis text-center w-full">
          {food.description}
        </div>
        <div>
          <span>{food.rating}</span>
        </div>
      </div>
    </div>
  );
}
