import React from "react";
import { useNavigate } from "react-router-dom";
import "./signUpFormContainer.css";

const SignUpFormContainer = () => {
  const navi = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  function handleGoBack() {
    navi("/signin");
  }
  return (
    <article className="article">
      <form className="sign-up__form container" onSubmit={handleSubmit}>
        <div>
          <div className="label__container">
            <span className="input__label">휴대폰 번호</span>
            <span className="guide">번호만 입력해 주세요</span>
          </div>
          <input
            type="text"
            name="phoneNumber"
            className="sign-up__input"
            id=""
            maxLength={11}
          />
          <div className="label__container">
            <span className="input__label">이름</span>
            <span className="guide">2~6자로 입력해 주세요</span>
          </div>
          <input
            type="text"
            name="name"
            className="sign-up__input"
            maxLength={6}
          />
        </div>
        <div>
          <button type="submit" className="button-st1">
            가입하기
          </button>
          <button type="button" className="button-st1" onClick={handleGoBack}>
            뒤로가기
          </button>
        </div>
      </form>
    </article>
  );
};

export default SignUpFormContainer;
