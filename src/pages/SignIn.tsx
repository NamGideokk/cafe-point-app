import React from "react";
import SignInFormContainer from "../components/signIn/SignInFormContainer";
import MainLayout from "../layout/MainLayout";

const SignIn = () => {
  return <MainLayout innerComponent={<SignInFormContainer />} />;
};

export default SignIn;
