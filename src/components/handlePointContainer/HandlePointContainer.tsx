import React, { useState } from "react";
import "./handlePointContainer.css";
import EarnContainer from "./pointField/EarnPointContainer";
import RedeemPointContainer from "./pointField/RedeemPointContainer";

const EarnPointContainer = () => {
  const [point, setPoint] = useState<string>("earn");

  function handleChangePoint(e: React.FormEvent<HTMLInputElement>) {
    setPoint(e.currentTarget.value);
  }

  return (
    <article className="article">
      <form className="container items-margin">
        <label className="amount-paid__field container-width">
          결제금액
          <input
            type="text"
            name="amount-paid"
            className="amount-paid__input"
          />
          <span id="won">원</span>
        </label>

        <div className="check-box__field container-width">
          <h3>포인트를</h3>
          <div className="label__container">
            <label>
              <input
                type="radio"
                name="method"
                value="earn"
                defaultChecked
                onChange={handleChangePoint}
              />
              <p>적립할게요</p>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                id="redeem"
                value="redeem"
                onChange={handleChangePoint}
              />
              <p>사용할게요</p>
            </label>
          </div>
        </div>
        {point == "earn" ? <EarnContainer /> : <RedeemPointContainer />}
      </form>
    </article>
  );
};

export default EarnPointContainer;
