import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import Button from "../../common/button/Button";
import "./pointContainer.css";

const EarnPointContainer = () => {
  return (
    <div className="point__field container-width">
      <p className="first__p">적립될 포인트는 325P 입니다.</p>
      <p className="second__p">
        2,000 P <ImArrowRight2 id="arrow-right__icon" />{" "}
        <mark id="points-after-earning">2,328 P</mark>
      </p>
      <Button title="적립하기" type="submit" />
    </div>
  );
};

export default EarnPointContainer;
