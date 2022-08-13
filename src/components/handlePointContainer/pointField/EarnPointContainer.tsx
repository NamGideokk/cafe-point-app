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
  const date = new Date();
  const year: number = date.getFullYear();

  // 두자리 수 이상으로 출력하기 위해 string type으로 변환
  let month: string = String(date.getMonth() + 1);
  let day: string = String(date.getDate());
  let hour: string = String(date.getHours());
  let minute: string = String(date.getMinutes());
  let second: string = String(date.getSeconds());

  if (month.length === 1) month = month.padStart(2, "0");
  if (day.length === 1) day = day.padStart(2, "0");
  if (hour.length === 1) hour = hour.padStart(2, "0");
  if (minute.length === 1) minute = minute.padStart(2, "0");
  if (second.length === 1) second = second.padStart(2, "0");

  console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}`);

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
