import React, { useState } from "react";
import "./handlePointContainer.css";
import EarnContainer from "./pointField/EarnPointContainer";
import RedeemPointContainer from "./pointField/RedeemPointContainer";

const EarnPointContainer = () => {
  const [amountPaid, setAmountPaid] = useState<string>("");
  const [point, setPoint] = useState<string>("earn");
  const dummyPoint = "21000";

  // test data
  const prevPoint: string = "0";

  // 포인트 적립 or 포인트 사용 선택
  function handleChangeMethod(e: React.FormEvent<HTMLInputElement>) {
    setPoint(e.currentTarget.value);
  }

  // 결제 금액
  function handleAmountPaid(e: React.FormEvent<HTMLInputElement>) {
    setAmountPaid(e.currentTarget.value);
    accrualRate(e.currentTarget.value);
  }

  // 결제 금액 => 포인트 계산기
  function accrualRate(amountPaid: string): string {
    const amountPaidAsNumber: number = parseInt(amountPaid);
    if (!amountPaidAsNumber) return "0";
    return String(Math.round(amountPaidAsNumber * 0.05));
  }

  // 이전 포인트 + 적립될 포인트 계산기
  function pointsAfterEarning(prevPoint: string, point: string): string {
    return String(parseInt(prevPoint) + parseInt(point));
  }

  // 잔여 포인트 계산기
  function remainingPoint(prevPoint: string, pointToUse: string): string {
    const result = parseInt(prevPoint) - parseInt(pointToUse);
    if (!result) return dummyPoint;
    return String(result);
  }

  return (
    <article className="article">
      <form className="container">
        <header className="amount-paid__field container-width">
          <label className="amount-paid__label">결제 금액</label>
          <input
            type="text"
            name="amount-paid"
            className="amount-paid__input"
            maxLength={9}
            value={amountPaid}
            onChange={handleAmountPaid}
          />
          <span id="won">원</span>
        </header>

        <section className="check-box__field container-width">
          <h3>포인트를</h3>
          <div className="label__container">
            <label className="method__label">
              <input
                type="radio"
                name="method"
                value="earn"
                defaultChecked
                onChange={handleChangeMethod}
              />
              <p>적립할게요</p>
            </label>
            <label className="method__label">
              <input
                type="radio"
                name="method"
                id="redeem"
                value="redeem"
                onChange={handleChangeMethod}
              />
              <p>사용할게요</p>
            </label>
          </div>
        </section>
        {point === "earn" ? (
          <EarnContainer
            point={accrualRate(amountPaid)}
            prevPoint={prevPoint}
            afterPoint={pointsAfterEarning(prevPoint, accrualRate(amountPaid))}
          />
        ) : (
          <RedeemPointContainer
            point={!amountPaid ? "0" : amountPaid}
            prevPoint={dummyPoint}
            afterPoint={remainingPoint(dummyPoint, amountPaid)}
          />
        )}
      </form>
    </article>
  );
};

export default EarnPointContainer;
