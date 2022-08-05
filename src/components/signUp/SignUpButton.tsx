import React from "react";
import "./style.css";

const SignUpButton = () => {
  function handleSignUpButton(e: React.MouseEvent) {
    e.currentTarget.classList.toggle("move-up");
  }

  return (
    <h1 className="sign-up__button" onClick={handleSignUpButton}>
      회원가입
    </h1>
  );
};

export default SignUpButton;
