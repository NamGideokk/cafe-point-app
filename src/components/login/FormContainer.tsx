import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/button/Button";
import "./formContainer.css";
import { BsCheckLg } from "react-icons/bs";

type PhoneNumber = {
  phone: string; // 휴대폰 번호 입력값
  regResult: boolean; // 입력값 정규표현식 검사 통과 여부
};

const FormContainer = () => {
  const navi = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({
    phone: "",
    regResult: false,
  });

  const phoneReg = /[\d]{11}/g;

  // 휴대폰 번호 입력
  function handlePhoneNumber(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const regResult = phoneReg.test(value);

    regResult
      ? setPhoneNumber({ phone: value, regResult: true })
      : setPhoneNumber({ phone: value, regResult: false });
  }

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
        <main className="login__field">
          {phoneNumber.regResult ? (
            <BsCheckLg id="checking__icon" />
          ) : (
            <p className="login-phone-guide">
              휴대폰 번호 11자리를 입력해 주세요 (숫자만)
            </p>
          )}
          <section className="input__field">
            <input
              type="text"
              maxLength={11}
              name="phone-number"
              className="phone-number__input"
              value={phoneNumber.phone}
              onChange={handlePhoneNumber}
              autoFocus
            />
          </section>
        </main>
        <section className="button__field">
          <Button
            type="submit"
            title="포인트 적립"
            isDisabled={!phoneNumber.regResult}
          />
          <Button
            type="button"
            title="포인트 조회"
            onclickEvent={handleMyPoint}
            isDisabled={!phoneNumber.regResult}
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
