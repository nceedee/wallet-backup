import React, { useState } from "react";

interface Bet {
  id: number;
  team1: string;
  team2: string;
  odd: number;
}

export const useCreateBet = () => {
  const [bets, setBets] = useState<Bet[]>([]);
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [odd, setOdd] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (team1 === "" || team2 === "" || odd === "") {
      setShowAlert(true);
      return;
    }

    const newBetId = bets.length + 1;

    const newBet: Bet = {
      id: newBetId,
      team1,
      team2,
      odd: parseFloat(odd),
    };

    setBets([...bets, newBet]);
    EmptyInput();
  };

  const EmptyInput = () => {
    setTeam1("");
    setTeam2("");
    setOdd("");
  };

  return { setShowAlert, handleSubmit, team1, team2, bets, odd, showAlert, setOdd, setTeam1, setTeam2 };
};
