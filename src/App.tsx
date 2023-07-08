import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { IUser } from "./base";
import { Dashboard } from "./components/Pages/Dashboard/Dashboard";
import { Login } from "./components/Pages/Login/Login";
import { Signup } from "./components/Pages/SignUp/SignUp";
import { TransactionHistory } from "./components/Pages/TransactionHistory/TransactionHistory";
import { auth } from "./config/firebase";

import { useNavigate } from "react-router-dom";

const App = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((responseUser: any) => {
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
      if (user) {
        setUserName(user.displayName || "loading...");
        navigate("/dashboard");
      }
      if (!user) {
        navigate("/login");
      }
    });
  }, [navigate]);

  return (
    <div className="flex h-[100vh] w-full bg-primary font-inter tracking-wide">
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard name={userName} />} />
          <Route path="/transaction-history" element={<TransactionHistory name={userName} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
