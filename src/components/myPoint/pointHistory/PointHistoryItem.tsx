import React from "react";
import "./pointHistory.css";
import { AiOutlineRight } from "react-icons/ai";

const PointHistoryItem = () => {
  return (
    <li className="point-history__item">
      <p id="history-date">2022-07-24 13:25:04</p>
      <main className="history-info">
        <section>
          <h4>결제 금액</h4>
          <p>4,500원</p>
        </section>
        <section>
          <h4>적립</h4>
          <p>+ 225 P</p>
        </section>
        <section>
          <h4>변경된 포인트</h4>
          <p>
            0 P <AiOutlineRight id="right-arrow__icon" /> 225 P
          </p>
        </section>
      </main>
    </li>
  );
};

export default PointHistoryItem;
