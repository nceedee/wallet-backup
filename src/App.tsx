import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Layouts/Header/Header";
import { SideBar } from "./components/Layouts/SideBar/SideBar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Users } from "./components/Pages/Users/Users";

const App = () => {
  return (
    <div className="flex h-[100vh] w-full bg-primary font-inter tracking-wide">
      <div>
        <SideBar />
      </div>
      <div className="w-full ">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
