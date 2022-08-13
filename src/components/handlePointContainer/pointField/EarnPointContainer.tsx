import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import Button from "../../common/button/Button";
import "./pointContainer.css";

export type PointProps = {
  point: string;
  prevPoint: string;
  afterPoint: string;
};

const EarnPointContainer = ({ point, prevPoint, afterPoint }: PointProps) => {
  const date = new Date();
  const _date = date
    .toLocaleDateString([], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll(".", "")
    .replaceAll(" ", "-");
  const time = date.toLocaleTimeString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  console.log(`${_date} ${time}`);

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
