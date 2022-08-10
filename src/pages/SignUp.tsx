import React from "react";
import SignUpFormContainer from "../components/signUp/SignUpFormContainer";
import MainLayout from "../layout/MainLayout";

const SignUp = () => {
  return <MainLayout innerComponent={<SignUpFormContainer />} />;
};

export default SignUp;
