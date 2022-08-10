import React from "react";
import FormContainer from "../components/login/FormContainer";
import MainLayout from "../layout/MainLayout";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout innerComponent={<FormContainer />} />
    </>
  );
};

export default Home;
