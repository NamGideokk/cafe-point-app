import React, { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import Button from "../../common/button/Button";
import "./pointContainer.css";

const RedeemPointContainer = () => {
  const [amount, setAmount] = useState<string>("670"); // 기본 사용값 보유 최대치?

  function handleChangeAmount(e: React.FormEvent<HTMLInputElement>) {
    setAmount(e.currentTarget.value);
    console.log(amount);
  }
  return (
    <div className="point__field container-width">
      <p className="first__p">
        사용될 포인트는{" "}
        <input
          type="text"
          value={amount}
          id="redeem-point__input"
          onChange={handleChangeAmount}
        />
        P 입니다.
      </p>
      <p className="second__p">
        2,000 P <ImArrowRight2 id="arrow-right__icon" />{" "}
        <mark id="points-after-redeem">2,328 P</mark>
      </p>
      <Button title="사용하기" type="submit" />
    </div>
  );
};

export default RedeemPointContainer;
