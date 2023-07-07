import { Link } from "react-router-dom";
import { AlertError } from "../../Global/Alert/Alert";
import { AlertSuccess } from "../../Global/Alert/AlertSuccess";
import { Button } from "../../Global/Button/Button";
import { Card } from "../../Global/Card/Card";
import { MaxCard } from "../../Global/Card/MaxCard/MaxCard";
import { useSignUp } from "../../Global/hooks/useSignUp";
import { Input } from "../../Global/Input/Input";

export const Signup = () => {
  const {
    handleSubmission,
    email,
    emailHanlder,
    fullname,
    fullnameHandler,
    password,
    passwordHanlder,
    errorMsg,
    successMsg,
    submitButtonDisabled,
    setShowAlert,
  } = useSignUp();

  return (
    <div className="min-h-100vh flex h-full w-full items-center justify-center bg-secondary">
      <MaxCard className="flex h-auto items-center justify-center">
        <Card className="flex h-fit w-fit flex-col space-x-6 bg-white p-[30px] shadow sm:w-full md:w-[50%]">
          <h1 className="text-center text-xl font-bold">SignUp</h1>

          <form className="mt-5 flex h-auto flex-col space-y-9" onSubmit={handleSubmission}>
            <div>
              <label htmlFor="fullname">Enter Fullname:</label>
              <Input
                id="fullname"
                type="text"
                onChange={fullnameHandler}
                placeholder="Enter fullname address"
                value={fullname}
              />
            </div>
            <div>
              <label htmlFor="email">Enter Email:</label>
              <Input id="email" value={email} type="email" onChange={emailHanlder} placeholder="Enter email address" />
            </div>
            <div>
              <label htmlFor="password">Enter Your Password:</label>
              <Input
                id="password"
                value={password}
                type="password"
                onChange={passwordHanlder}
                placeholder="Enter Password"
              />
            </div>
            {errorMsg ? <AlertError onClose={() => setShowAlert(false)}>{errorMsg}</AlertError> : ""}
            {successMsg ? <AlertSuccess onClose={() => setShowAlert(false)}>{successMsg}</AlertSuccess> : ""}
            <div className="flex flex-col ">
              <Button
                disabled={submitButtonDisabled}
                className={`${
                  submitButtonDisabled ? "cursor-wait bg-accent" : "bg-inherit"
                } w-full rounded border-none bg-secondary px-[16px] py-[10px] font-bold text-white outline-none transition-[100ms] `}
              >
                Login
              </Button>
              <p className="font-bold text-black ">
                Already have an account?{" "}
                <span>
                  <Link to="/login" className="leading-1 font-xl font-bold text-secondary decoration-0">
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </Card>
      </MaxCard>
    </div>
  );
};
