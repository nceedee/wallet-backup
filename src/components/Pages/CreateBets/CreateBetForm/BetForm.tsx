import { AlertError } from "../../../Global/Alert/Alert";
import { AlertSuccess } from "../../../Global/Alert/AlertSuccess";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { MaxCard } from "../../../Global/Card/MaxCard/MaxCard";
import { useFetchedBets } from "../../../Global/hooks/useFetchedBets";
import { Input } from "../../../Global/Input/Input";
import { useCreateBet } from "../hooks/useCreateBet";
import { Bet } from "./Bet";

export const BetForm: React.FC = () => {
  const {
    bets,
    handleSubmit,
    setShowAlert,
    team1,
    team2,
    showAlert,
    setTeam1,
    setTeam2,
    setStadium,
    stadium,
    odd1,
    odd2,
    oddx,
    setOdd1,
    setOdd2,
    setOddx,
  } = useCreateBet();

  const { betData, error, success } = useFetchedBets();

  const stopInput = () => {
    return false;
  };

  return (
    <MaxCard>
      <Card className="sm:mt-20 md:mt-0">
        <form onSubmit={handleSubmit} className="flex flex-col bg-white p-4 ">
          <label htmlFor="team1">Team 1:</label>
          <Input type="text" id="team1" value={team1} onChange={e => setTeam1(e.target.value)} />

          <label htmlFor="team2">Team 2:</label>
          <Input type="text" id="team2" value={team2} onChange={e => setTeam2(e.target.value)} />

          <label htmlFor="odd1">Odd 1:</label>
          <Input type="number" id="odd1" value={odd1} onChange={e => setOdd1(e.target.value)} />

          <label htmlFor="oddx">Odd x:</label>
          <Input type="number" id="oddx" value={oddx} onChange={e => setOddx(e.target.value)} />

          <label htmlFor="odd2">Odd 2:</label>
          <Input type="number" id="odd2" value={odd2} onChange={e => setOdd2(e.target.value)} />

          <select
            value={stadium}
            id="stadium"
            className="border-none bg-transparent py-4 outline-none"
            onChange={e => setStadium(e.target.value)}
          >
            <option onChange={stopInput}>Select Stadium</option>
            <option>Uk Stadium</option>
            <option>Us Stadium</option>
            <option>Barca Stadium</option>
            <option>Ufc Stadium</option>
          </select>

          <Button type="submit">Submit</Button>
        </form>

        {showAlert ? <AlertError onClose={() => setShowAlert(false)}>Your input can not be left empty</AlertError> : ""}
        {success ? <AlertSuccess onClose={() => setShowAlert(false)}>Sent Successfull</AlertSuccess> : false}
        {error ? <AlertError onClose={() => setShowAlert(false)}>Check Your Internet Connection</AlertError> : false}
        {bets.length > 0 && (
          <div className="p-4">
            <h1 className="font-bold uppercase">Created Bets:</h1>
            <ul>
              {betData.map((bet: Bet) => (
                <Card key={bet.id} className="my-2 shadow">
                  <div className="flex space-x-2">
                    <h4 className="font-bold text-accent">Team 1:</h4>
                    <p>{bet.team1}</p>
                    <h4 className="font-bold text-accent">With Odd:</h4>
                    <p>{bet.odd1}</p>
                  </div>
                  <div className="flex space-x-2">
                    <h4 className="font-bold text-accent">Team 2:</h4>
                    <p>{bet.team2}</p>
                    <h4 className="font-bold text-accent">With Odd:</h4>
                    <p>{bet.odd2}</p>
                  </div>
                  <div>
                    <i className="font-bold text-accent">In {bet.stadium}</i>
                  </div>
                </Card>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </MaxCard>
  );
};
