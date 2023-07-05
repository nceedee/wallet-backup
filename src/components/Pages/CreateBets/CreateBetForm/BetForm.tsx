import { AlertError } from "../../../Global/Alert/Alert";
import { Button } from "../../../Global/Button/Button";
import { Card } from "../../../Global/Card/Card";
import { MaxCard } from "../../../Global/Card/MaxCard/MaxCard";
import { Input } from "../../../Global/Input/Input";
import { useCreateBet } from "../hooks/useCreateBet";

export const BetForm: React.FC = () => {
  const { bets, handleSubmit, odd, setShowAlert, team1, team2, showAlert, setOdd, setTeam1, setTeam2 } = useCreateBet();
  return (
    <MaxCard>
      <Card className="sm:mt-20 md:mt-0">
        <form onSubmit={handleSubmit} className="flex flex-col bg-white p-4 ">
          <label htmlFor="team1">Team 1:</label>
          <Input type="text" id="team1" value={team1} onChange={e => setTeam1(e.target.value)} />

          <label htmlFor="team2">Team 2:</label>
          <Input type="text" id="team2" value={team2} onChange={e => setTeam2(e.target.value)} />

          <label htmlFor="odd">Odd:</label>
          <Input type="number" id="odd" value={odd} onChange={e => setOdd(e.target.value)} />

          <Button type="submit">Submit</Button>
        </form>
        {showAlert && <AlertError onClose={() => setShowAlert(false)} />}
        {bets.length > 0 && (
          <div className="">
            <h3>Created Bets:</h3>
            <ul>
              {bets.map(bet => (
                <Card key={bet.id} className="my-2 shadow">
                  <li>
                    Team 1: {bet.team1}, Team 2: {bet.team2}, Odd: {bet.odd}
                  </li>
                </Card>
              ))}
            </ul>
          </div>
        )}
      </Card>
    </MaxCard>
  );
};
