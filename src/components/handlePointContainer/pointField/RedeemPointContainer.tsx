import React, { useState } from "react";
import { ImArrowRight2 } from "react-icons/im";
import Button from "../../common/button/Button";
import "./pointContainer.css";
import { PointProps } from "./EarnPointContainer";

const RedeemPointContainer = ({ point, prevPoint, afterPoint }: PointProps) => {
  return (
    <div className="point__field container-width">
      <p className="first__p">
        사용될 포인트는 <mark className="point__mark">{point} P</mark> 입니다.
      </p>
      <p className="second__p">
        {prevPoint} P <ImArrowRight2 id="arrow-right__icon" />{" "}
        <mark id="points-after-redeem">{afterPoint} P</mark>
      </p>
      <Button title="사용하기" type="submit" />
    </div>
  );
};

export default RedeemPointContainer;
