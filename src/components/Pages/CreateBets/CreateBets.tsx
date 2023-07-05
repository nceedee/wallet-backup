import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { BetForm } from "./CreateBetForm/BetForm";
export const CreateBet = () => {
  return (
    <MaxCard>
      <Header routerName="Create bets" />
      <BetForm />
    </MaxCard>
  );
};
