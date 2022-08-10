import React from "react";
import "./button.css";

type ButtonProps = {
  id?: string;
  type: "submit" | "button";
  title: string;
  onclickEvent?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ id, type, title, onclickEvent }: ButtonProps) => {
  return (
    <button className="button-st1" id={id} type={type} onClick={onclickEvent}>
      {title}
    </button>
  );
};

export default Button;
