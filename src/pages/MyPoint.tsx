import React from "react";
import MyPointContainer from "../components/myPoint/MyPointContainer";
import MainLayout from "../layout/MainLayout";

const MyPoint = () => {
  return <MainLayout innerComponent={<MyPointContainer />} />;
};

export default MyPoint;
