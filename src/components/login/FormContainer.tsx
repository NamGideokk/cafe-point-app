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

  // 포인트 적립 버튼 클릭
  function handlePointEarn(e: React.FormEvent) {
    e.preventDefault();
    navi("/point");
  }

  // 회원가입 버튼 클릭
  function handleSignUp() {
    navi("/signup");
  }

  // 포인트 조회 버튼 클릭
  function handleMyPoint() {
    navi("/mypoint");
  }

  return (
    <article className="article">
      <form className="container" onSubmit={handlePointEarn}>
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
          <Button type="submit" title="포인트 적립" />
          <Button
            type="button"
            title="포인트 조회"
            onclickEvent={handleMyPoint}
          />
        </section>
        <Button
          id="sign-up__button"
          type="button"
          title="회원가입"
          onclickEvent={handleSignUp}
        />
      </form>
    </article>
  );
};

export default FormContainer;
