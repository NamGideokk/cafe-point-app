import React from "react";
import "./style.css";

type ButtonProps = {
  id?: string;
  type: "submit" | "button";
  title: string;
};

const Button = ({ id, type, title }: ButtonProps) => {
  return (
    <button className="button-st1" id={id} type={type}>
      {title}
    </button>
  );
};

export default Button;
