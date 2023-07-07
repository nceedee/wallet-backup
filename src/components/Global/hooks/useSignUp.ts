import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../config/firebase";

export const useSignUp = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

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
        const user = res.user;

        setSuccessMsg(user);
        await updateProfile(user, {
          displayName: fullname,
        });
        navigate("/dashboard");
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
