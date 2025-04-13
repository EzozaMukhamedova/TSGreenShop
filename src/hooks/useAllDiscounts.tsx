import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAllDiscounts = async (token: string): Promise<any> => {
  const { data } = await axios.get(
    "https://green-shop-backend.onrender.com/api/features/discount",
    {
      params: { access_token: token },
    }
  );
  return data; 
};

export const useAllDiscounts = (token: string) => {
  return useQuery({
    queryKey: ["allDiscounts", token],
    queryFn: () => fetchAllDiscounts(token),
    enabled: !!token, 
    staleTime: 1000 * 60 * 5, 
  });
};
