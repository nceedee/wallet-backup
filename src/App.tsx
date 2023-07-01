import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/Layouts/SideBar/SideBar";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Users } from "./components/Pages/Dashboard/Users/Users";
import { Header } from "./components/Layouts/Header";

const App = () => {
	return (
		<div className="font-inter h-[100vh] w-full flex bg-primary">
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
