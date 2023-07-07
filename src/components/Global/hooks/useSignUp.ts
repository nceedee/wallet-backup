import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../base";
import { auth } from "../../../config/firebase";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const setUser = useUser(state => state.setUser);
  const fullnameHanlder = (e: any) => {
    setFullname(e.target.value);
  };

  const emailHanlder = (e: any) => {
    setEmail(e.target.value);
  };
  const passwordHanlder = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmission = (e: any) => {
    e.preventDefault();

    if (!fullname || !email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    try {
      const res = createUserWithEmailAndPassword(auth, email, password).then(async (res: any) => {
        setSubmitButtonDisabled(false);
        const responseUser = res.user;

        location.href = "/dashboard";
        setSuccessMsg("account created successfully");
        await updateProfile(responseUser, {
          displayName: fullname,
        });
      });
    } catch (err: any) {
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
    }

    clearInputs();
  };

  const clearInputs = () => {
    setFullname("");
    setPassword("");
    setEmail("");
  };

  return {
    handleSubmission,
    fullname,
    fullnameHanlder,
    email,
    emailHanlder,
    password,
    passwordHanlder,
    submitButtonDisabled,
    errorMsg,
    successMsg,
    setShowAlert,
  };
};
