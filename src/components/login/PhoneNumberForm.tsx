import React, { useRef } from "react";
import "./style.css";
import { BsDashLg } from "react-icons/bs";

const PhoneNumberForm = () => {
  const firstNumber = useRef<HTMLInputElement>(null);
  const secondNumber = useRef<HTMLInputElement>(null);
  const thirdNumber = useRef<HTMLInputElement>(null);

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
        <BsDashLg className="dash" />
        <input
          type="number"
          name="second"
          id="second-number"
          className="phone-number__input"
          ref={secondNumber}
        />
        <BsDashLg className="dash" />
        <input
          type="number"
          name="third"
          id="third-number"
          className="phone-number__input"
          ref={thirdNumber}
        />
      </div>
      <button type="submit" id="point__button">
        적립하기
      </button>
    </form>
  );
};

export default PhoneNumberForm;
