import React from "react";
import MainBackground from "../components/mainBackground/MainBackground";
import "./mainLayout.css";

type MainBackgroundProps = {
  innerComponent?: React.ReactNode;
};

const MainLayout = ({ innerComponent }: MainBackgroundProps) => {
  return (
    <>
      {innerComponent}
      <MainBackground />
    </>
  );
};

export default MainLayout;
