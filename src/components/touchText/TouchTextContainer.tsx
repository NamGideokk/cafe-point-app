import React from "react";
import { useNavigate } from "react-router-dom";
import "./touchTextContainer.css";

const TouchTextContainer = () => {
  const navi = useNavigate();

  function handleClick() {
    navi("/signin");
  }
  return (
    <div className="text__container" onClick={handleClick}>
      <h1 className="touch-text">TOUCH THE SCREEN</h1>
    </div>
  );
};

export default TouchTextContainer;
