import "firebase/firestore";
import { useState } from "react";
import { useQuery } from "react-query";
import { Bet } from "../../Pages/CreateBets/CreateBetForm/Bet";

export const useFetchedBets = () => {
  const [betData, setBetData] = useState<Bet[]>([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const queryKey = ["bets", "https://gobet-admin-dashboard-default-rtdb.firebaseio.com/predictbet.json"];
  const { data, isSuccess, isError } = useQuery(queryKey, async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/predictbet.json");

    if (isSuccess) {
      setSuccess(isSuccess);
    }
    if (isError) {
      setError(isError);
    }

    const data = await response.json();
    const loadedMatches: Bet[] = [];
    for (const key in data) {
      loadedMatches.push({
        id: key,
        team1: data[key].team1,
        team2: data[key].team2,
        odd1: data[key].odd1,
        oddx: data[key].oddx,
        odd2: data[key].odd2,
        stadium: data[key].stadium,
      });
    }
    setBetData(loadedMatches);
    return data;
  });

  return { betData, data, success, error };
};
