import React, { useEffect, useRef } from "react";
import "./style.css";
import { BsDash } from "react-icons/bs";
import SignUpButton from "../signUpButton/SignUpButton";

const PhoneNumberForm = () => {
  const firstNumber = useRef<HTMLInputElement>(null);
  const secondNumber = useRef<HTMLInputElement>(null);
  const thirdNumber = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstNumber.current?.focus();
  }, []);

  function submitPhoneNumber(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form id="phone-number__field" onSubmit={submitPhoneNumber}>
      <div className="input__field">
        <input
          type="number"
          name="first"
          id="first-number"
          className="phone-number__input"
          ref={firstNumber}
        />
        <BsDash className="dash" />
        <input
          type="number"
          name="second"
          id="second-number"
          className="phone-number__input"
          ref={secondNumber}
        />
        <BsDash className="dash" />
        <input
          type="number"
          name="third"
          id="third-number"
          className="phone-number__input"
          ref={thirdNumber}
        />
      </div>
      <div className="button__field">
        <button type="submit" id="earn-point__button" className="button-st1">
          포인트 적립
        </button>
        <button type="button" id="search-point__button" className="button-st1">
          포인트 조회
        </button>
      </div>
      <SignUpButton />
    </form>
  );
};

export default PhoneNumberForm;
