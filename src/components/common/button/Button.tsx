import React from "react";
import "./button.css";

type ButtonProps = {
  id?: string;
  type: "submit" | "button";
  title: string;
  onclickEvent?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
};

const Button = ({ id, type, title, onclickEvent, isDisabled }: ButtonProps) => {
  return (
    <button
      className="button-st1"
      id={id}
      type={type}
      onClick={onclickEvent}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
