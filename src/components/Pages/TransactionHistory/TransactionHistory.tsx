import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { Header } from "../../Layouts/Header/Header";
import { SideBar } from "../../Layouts/SideBar/SideBar";

interface NameProps {
  name: string;
}
export const TransactionHistory: React.FC<NameProps> = ({ name }) => {
  return (
    <div className="flex h-[100vh] w-full  bg-primary font-inter tracking-wide">
      <SideBar />
      <div className="w-full overflow-y-scroll">
        <MaxCard>
          <Header routerName="Transaction History" name={name} />
        </MaxCard>
      </div>
    </div>
  );
};
