import React, { useRef } from "react";
import "./mainBackground.css";

const MainBackground = () => {
  const counterRef = useRef<number>(0);

  return <div id="background-image"></div>;
};

export default MainBackground;
