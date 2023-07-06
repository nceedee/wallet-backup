import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/Layouts/SideBar/SideBar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { TransactionHistory } from "./components/Pages/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div className="flex h-[100vh] w-full  bg-primary font-inter tracking-wide">
      <div>
        <SideBar />
      </div>
      <div className="w-full overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="transaction-history" element={<TransactionHistory />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
