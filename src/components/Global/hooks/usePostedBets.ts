import "firebase/firestore";
import { useMutation } from "react-query";
import { Bet } from "../../Pages/CreateBets/CreateBetForm/Bet";

export const useBets = () => {
  const createBet = async (betData: Bet) => {
    try {
      const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/predictbet.json", {
        method: "POST",
        body: JSON.stringify(betData),
      });

      if (!response.ok) {
        throw new Error("Failed to post bet data");
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const mutation = useMutation(createBet);

  return { mutation };
};
