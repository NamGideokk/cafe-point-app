import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signUpFormContainer.css";
import { BsCheckLg } from "react-icons/bs";
import Button from "../common/button/Button";

type SignUpData = {
  phone: string;
  name: string;
  phoneRegResult: boolean; // 휴대폰 번호 입력값 정규표현식 검사 통과 여부
  nameRegResult: boolean; // 이름
};

const SignUpFormContainer = () => {
  const navi = useNavigate();
  const [signUpData, setSignUpData] = useState<SignUpData>({
    phone: "",
    name: "",
    phoneRegResult: false,
    nameRegResult: false,
  });
  const phoneReg = /[\d]{11}/g;
  const nameReg = /[a-zA-Z가-힣]{2,6}/g;

  // 회원가입 input onChange 함수. 휴대폰 번호, 이름 정규표현식 검사
  function handleSignUpData(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;
    const phoneResult = phoneReg.test(value);
    const nameResult = nameReg.test(value);

    if (name === "phone") {
      phoneResult
        ? setSignUpData({ ...signUpData, phone: value, phoneRegResult: true })
        : setSignUpData({ ...signUpData, phone: value, phoneRegResult: false });
    }
    if (name === "name") {
      nameResult
        ? setSignUpData({ ...signUpData, name: value, nameRegResult: true })
        : setSignUpData({ ...signUpData, name: value, nameRegResult: false });
    }
  }

  // 가입하기 버튼 클릭
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("가입이 완료되었습니다. 👏");
    navi("/signin");
  }

  // 뒤로가기 버튼 클릭
  function handleGoBack() {
    navi("/signin");
  }

  return (
    <article className="article">
      <form className="sign-up__form container" onSubmit={handleSubmit}>
        <main>
          <section className="phone-number__section">
            <div className="label__container">
              <label className="input__label">휴대폰 번호</label>
              <span className="guide phone-guide">
                {signUpData.phoneRegResult ? (
                  <BsCheckLg id="phone-check__icon" />
                ) : (
                  "11자리를 입력해 주세요 (숫자만)"
                )}
              </span>
            </div>
            <input
              id="phone-number__input"
              type="text"
              name="phone"
              className="sign-up__input"
              value={signUpData.phone}
              onChange={handleSignUpData}
              maxLength={11}
              autoFocus
            />
          </section>
          <section className="name__section">
            <div className="label__container">
              <label className="input__label">이름</label>
              <span className="guide name-guide">
                {signUpData.nameRegResult ? (
                  <BsCheckLg id="phone-check__icon" />
                ) : (
                  "2~6자로 입력해 주세요 (한글, 영문)"
                )}
              </span>
            </div>
            <input
              type="text"
              name="name"
              className="sign-up__input"
              value={signUpData.name}
              onChange={handleSignUpData}
              maxLength={6}
            />
          </section>
        </main>
        <section>
          <Button
            title="가입하기"
            type="submit"
            onclickEvent={handleSubmit}
            isDisabled={
              !(signUpData.phoneRegResult && signUpData.nameRegResult)
            }
          />
          <Button title="뒤로가기" type="button" onclickEvent={handleGoBack} />
        </section>
      </form>
    </article>
  );
};

export default SignUpFormContainer;
