import React, { useReducer } from "react";
import inputReducer from "../features/reducers/inputReducer";
import MainBackground from "../components/mainBackground/MainBackground";
import "./mainLayout.css";
import TouchTextContainer from "../components/touchText/TouchTextContainer";

type MainBackgroundProps = {
  innerComponent?: React.ReactNode;
};

const MainLayout = ({ innerComponent }: MainBackgroundProps) => {
  const [state, dispatch] = useReducer(inputReducer, false);

  function handleClick() {
    dispatch({ type: "SET_ON" });
  }

  return (
    <div onClick={handleClick}>
      <MainBackground />
      {state ? innerComponent : <TouchTextContainer />}
    </div>
  );
};

export default MainLayout;
