import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/Layouts/SideBar/SideBar";
import { CreateBet } from "./components/Pages/CreateBets/CreateBets";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Users } from "./components/Pages/Users/Users";
import { ViewBets } from "./components/Pages/ViewBets/ViewBets";

const App = () => {
  return (
    <div className="flex h-[100vh] w-full  bg-primary font-inter tracking-wide">
      <div>
        <SideBar />
      </div>
      <div className="w-full overflow-y-scroll">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/createbet" element={<CreateBet />}></Route>
          <Route path="viewbets" element={<ViewBets />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
