import React from "react";
import "./earnPointContainer.css";
import { ImArrowRight2 } from "react-icons/im";

const EarnPointContainer = () => {
  return (
    <form className="container items-margin">
      <label className="amount-paid__field container-width">
        결제금액
        <input type="text" name="amount-paid" className="amount-paid__input" />
        <span id="won">원</span>
      </label>

      <div className="check-box__field container-width">
        <h3>포인트를</h3>
        <div className="label__container">
          <label>
            <input type="radio" name="method" value="earn" checked />
            <p>적립할게요</p>
          </label>
          <label>
            <input type="radio" name="method" id="redeem" />
            <p>사용할게요</p>
          </label>
        </div>
      </div>

      <div className="point__field container-width">
        <h2>적립될 포인트는 325p 입니다.</h2>
        <h1>
          2,000 P <ImArrowRight2 id="arrow-right__icon" />{" "}
          <mark id="points-after-earning">2,328 P</mark>
        </h1>
      </div>
    </form>
  );
};

export default EarnPointContainer;
