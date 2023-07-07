import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

export const useLogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const emailHanlder = (e: any) => {
    setEmail(e.target.value);
  };
  const passwordHanlder = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmission = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res: any) => {
        setSubmitButtonDisabled(false);
        setSuccessMsg(res.user);
        navigate("/dashboard");
      })
      .catch((err: any) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
    clearInputs();
  };

  const clearInputs = () => {
    setPassword("");
    setEmail("");
  };

  return {
    email,
    password,
    setShowAlert,
    errorMsg,
    successMsg,
    submitButtonDisabled,
    handleSubmission,
    emailHanlder,
    passwordHanlder,
  };
};
