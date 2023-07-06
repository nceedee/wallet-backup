import React, { useState } from "react";
import { useBets } from "../../../Global/hooks/usePostedBets";
import { Bet } from "../CreateBetForm/Bet";
export const useCreateBet = () => {
  const [bets, setBets] = useState<Bet[]>([]);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [odd1, setOdd1] = useState("");
  const [odd2, setOdd2] = useState("");
  const [oddx, setOddx] = useState("");
  const [stadium, setStadium] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const { mutation } = useBets();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (team1 === "" || team2 === "" || odd1 === "" || odd2 === "" || oddx === "" || stadium === "") {
      setShowAlert(true);
      return;
    }

    const newId = Math.floor(Math.random() * 100);

    const newBet: Bet = {
      id: newId,
      team1,
      team2,
      odd1: parseFloat(odd1),
      odd2: parseFloat(odd2),
      oddx: parseFloat(oddx),
      stadium,
    };

    console.log(newId, newBet);
    setBets([...bets, newBet]);

    mutation.mutate(newBet);

    EmptyInput();
  };

  const EmptyInput = () => {
    setTeam1("");
    setTeam2("");
    setOdd1("");
    setOdd2("");
    setOddx("");
  };

  return {
    setShowAlert,
    handleSubmit,
    team1,
    team2,
    bets,
    odd1,
    odd2,
    oddx,
    showAlert,
    setOdd1,
    setOdd2,
    setOddx,
    setTeam1,
    setTeam2,
    stadium,
    setStadium,
  };
};
