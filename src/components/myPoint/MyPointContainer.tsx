import React from "react";
import "./myPointContainer.css";
import PointHistoryItem from "./pointHistory/PointHistoryItem";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../common/button/Button";

const MyPointContainer = () => {
  const navi = useNavigate();

  function handleGoBack() {
    navi("/signin");
  }

  return (
    <article className="article">
      <section className="container container-width-lg">
        <header className="my-info__field container-width-lg">
          <h1 className="info__title">남기덕님의 포인트</h1>
          <ul className="details-info">
            <li className="info-list">
              회원 등급{" "}
              <span>
                Bronze
                <AiFillQuestionCircle id="quetion__icon" />
              </span>
            </li>
            <li className="info-list">
              총 결제 금액 <span>35,200 원</span>
            </li>
            <li className="info-list">
              보유 포인트 <span>2,300 P</span>
            </li>
            <li className="info-list">
              총 적립 포인트 <span>3,400 P</span>
            </li>
            <li className="info-list">
              총 사용 포인트 <span>1,100 P</span>
            </li>
          </ul>
        </header>
        <h4 className="history__title container-width-lg">포인트 내역</h4>
        <main className="history__field">
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
          <PointHistoryItem />
        </main>
        <Button title="뒤로가기" type="button" onclickEvent={handleGoBack} />
      </section>
    </article>
  );
};

export default MyPointContainer;
