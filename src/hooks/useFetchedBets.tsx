import "firebase/firestore";
import { useState } from "react";
import { useQuery } from "react-query";
import { Bet } from "../components/Pages/CreateBets/CreateBetForm/Bet";

export const useFetchedBets = () => {
  const [betData, setBetData] = useState<Bet[]>([]);
  const queryKey = ["bets", "https://gobet-admin-dashboard-default-rtdb.firebaseio.com/predictbet.json"];
  const { data, isLoading } = useQuery(queryKey, async () => {
    const response = await fetch("https://gobet-admin-dashboard-default-rtdb.firebaseio.com/predictbet.json");

    if (isLoading) {
      <div>Loading...</div>;
    }
    const data = await response.json();
    const loadedMatches: Bet[] = [];
    for (const key in data) {
      const id = key.length + 1;
      loadedMatches.push({
        id: id,
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

  return { betData, data };
};
