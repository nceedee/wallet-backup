import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { IUser, useUser } from "./base";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import Login from "./components/Pages/Login/Login";
import { Signup } from "./components/Pages/SignUp/SignUp";
import { TransactionHistory } from "./components/Pages/TransactionHistory/TransactionHistory";
import { auth } from "./config/firebase";

const App = () => {
  const setUser = useUser(state => state.setUser);

  useEffect(() => {
    auth.onAuthStateChanged((responseUser: any) => {
      if (responseUser) {
        const displayName = responseUser.displayName;
        const uid = responseUser.uid;
        const reloadUserInfo = responseUser.reloadUserInfo;

        const user: IUser = {
          uid,
          displayName,
          email: reloadUserInfo.email,
          createdAt: reloadUserInfo.createdAt,
          emailVerified: reloadUserInfo.emailVerified,
          lastLoginAt: reloadUserInfo.lastLoginAt,
          lastRefreshAt: reloadUserInfo.lastRefreshAt,
          photoUrl: reloadUserInfo.photoUrl,
        };

        setUser(user);
      }
    });
  }, []);

  return (
    <div className="flex h-[100vh] w-full bg-primary font-inter tracking-wide">
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
