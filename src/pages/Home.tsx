import React from "react";
import TouchTextContainer from "../components/touchText/TouchTextContainer";
import MainLayout from "../layout/MainLayout";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout innerComponent={<TouchTextContainer />} />
    </>
  );
};

export default Home;
