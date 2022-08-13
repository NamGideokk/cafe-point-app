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
        <main>
          <div className="label__container">
            <label className="input__label">휴대폰 번호</label>
            <span className="guide">번호만 입력해 주세요</span>
          </div>
          <input
            id="phoneNumber__input"
            type="text"
            name="phoneNumber"
            className="sign-up__input"
            maxLength={11}
          />
          <div className="label__container">
            <label className="input__label">이름</label>
            <span className="guide">2~6자로 입력해 주세요</span>
          </div>
          <input
            type="text"
            name="name"
            className="sign-up__input"
            maxLength={6}
          />
        </main>
        <section>
          <button type="submit" className="button-st1">
            가입하기
          </button>
          <button type="button" className="button-st1" onClick={handleGoBack}>
            뒤로가기
          </button>
        </section>
      </form>
    </article>
  );
};

export default SignUpFormContainer;
