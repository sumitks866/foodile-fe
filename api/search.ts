import axios from "axios";

interface IQueryRequest {
  location?: string;
  item: string;
}

export const searchQuery = async (req: IQueryRequest) => {
  const res = await axios.get(
    `https://www.zomato.com/${req.location}/restaurants/${req.item}`
  );
  return res;
};
