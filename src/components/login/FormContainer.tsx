import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import "./formContainer.css";

const FormContainer = () => {
  const navi = useNavigate();
  const firstNumber = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstNumber.current?.focus();
  }, []);

  function submitPhoneNumber(e: React.FormEvent) {
    e.preventDefault();
  }

  function handlePointEarn() {
    navi("/point");
  }

  function handleSignUpButton() {
    navi("/signup");
  }

  return (
    <article className="article">
      <form className="container" onSubmit={submitPhoneNumber}>
        <section className="input__field">
          <input
            type="text"
            maxLength={11}
            name="phone-number"
            className="phone-number__input"
            placeholder="휴대폰 번호 11자리를 입력해 주세요 (숫자만)"
            ref={firstNumber}
          />
        </section>
        <section className="button__field">
          <Button
            type="submit"
            title="포인트 적립"
            onclickEvent={handlePointEarn}
          />
          <Button type="button" title="포인트 조회" />
        </section>
        <Button
          id="sign-up__button"
          type="button"
          title="회원가입"
          onclickEvent={handleSignUpButton}
        />
      </form>
    </article>
  );
};

export default FormContainer;
