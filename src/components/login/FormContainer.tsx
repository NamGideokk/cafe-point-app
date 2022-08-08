import React, { useEffect, useRef } from "react";
import "./style.css";
import SignUpButton from "../signUp/SignUpButton";

const FormContainer = () => {
  const firstNumber = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstNumber.current?.focus();
  }, []);

  function submitPhoneNumber(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form id="form__container" onSubmit={submitPhoneNumber}>
      <div className="input__field">
        <input
          type="text"
          maxLength={11}
          name="phone-number"
          className="phone-number__input"
          placeholder="휴대폰 번호 11자리를 입력해 주세요 (숫자만)"
          ref={firstNumber}
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

export default FormContainer;
