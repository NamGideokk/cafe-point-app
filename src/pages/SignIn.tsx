import React from "react";
import FormContainer from "../components/login/FormContainer";
import MainLayout from "../layout/MainLayout";

const SignIn = () => {
  return <MainLayout innerComponent={<FormContainer />} />;
};

export default SignIn;
