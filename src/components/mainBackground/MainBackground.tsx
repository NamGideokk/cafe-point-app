import React, { useReducer, useRef } from "react";
import "./style.css";
import inputReducer from "../../features/reducers/inputReducer";
import FormContainer from "../login/FormContainer";
import TouchText from "../login/TouchText";

const MainBackground = () => {
  const [state, dispatch] = useReducer(inputReducer, false);
  const counterRef = useRef<number>(0);

  function handleClick() {
    dispatch({ type: "SET_ON" });
    console.log(counterRef.current);
  }
  return (
    <div id="background-image" onClick={handleClick}>
      {state ? (
        <>
          <FormContainer />
        </>
      ) : (
        <TouchText />
      )}
    </div>
  );
};

export default MainBackground;
