import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import Button from "../../common/button/Button";
import "./pointContainer.css";

type PointProp = {
  point: string;
  prevPoint: string;
  afterPoint: string;
};

const EarnPointContainer = ({ point, prevPoint, afterPoint }: PointProp) => {
  return (
    <div className="point__field container-width">
      <p className="first__p">적립될 포인트는 {point} P 입니다.</p>
      <p className="second__p">
        {prevPoint} P <ImArrowRight2 id="arrow-right__icon" />{" "}
        <mark id="points-after-earning">{afterPoint} P</mark>
      </p>
      <Button title="적립하기" type="submit" />
    </div>
  );
};

export default EarnPointContainer;
