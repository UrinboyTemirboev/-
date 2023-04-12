import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect } from "react";
import "../styles/style.css";
//import { faStrava} from '@fortawesome/free-brands-svg-icons'
import Nav from "./Nav";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { solid } from "./Star";
import { useState } from "react";
import Rate from "../rating/Rate";
import Footer from "../footer/Footer";
import Search from "../search/Search";
import Catalogs from "../catalogs/Catalogs";
//const rating=require('../rating/Rating')

const icons = [
  { id: Math.random(), icon: <FontAwesomeIcon icon={faStar} /> },
  { id: Math.random(), icon: <FontAwesomeIcon icon={faStar} /> },
  { id: Math.random(), icon: <FontAwesomeIcon icon={faStar} /> },
  { id: Math.random(), icon: <FontAwesomeIcon icon={faStar} /> },
  { id: Math.random(), icon: <FontAwesomeIcon icon={faStar} /> },
];

const icons2 = [
  { id: Math.random(), icon: solid },
  { id: Math.random(), icon: solid },
  { id: Math.random(), icon: solid },
  { id: Math.random(), icon: solid },
  { id: Math.random(), icon: solid },
];

export default function Reviews({ funcShowBar, showBars, setShowBars,getCount, getOneCategory }) {
  const [rating, setRating] = useState(0);
  console.log("rate:", rating);
  let retate = rating;
  const [review, setReview] = useState({
    rating: -1,
    dignity: "",
    disadvantages: "",
    comment: "",
    fullName: "",
    phoneContact: "",
    reviewerPhoto: "",
  });

  const onChange = (key) => (e) => {
    let rate = rating;
    setReview({ ...review, rating: rate, [key]: e.target.value });
  };

  const onClick = () => {
    fetch("http://localhost:3003/review", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setReview({
      rating: 0,
      dignity: "",
      disadvantages: "",
      comment: "",
      fullName: "",
      phoneContact: "",
      reviewerPhoto: "",
    });
  };
 const[matches,setMatches]=useState(
  window.matchMedia("(max-width:768px)").matches
 )
 useEffect(()=>{
  window
  .matchMedia("(max-width:768px)")
  .addEventListener("change",(e)=>setMatches(e.matches))
 })

  return (
    <>
      <Search
        funcShowBar={funcShowBar}
        showBars={showBars}
        setShowBars={setShowBars}
        getCount={getCount}
        getOneCategory={getOneCategory}
      />
      <Catalogs getOneCategory={getOneCategory} />
      {!matches && (
        <div>
          <div className="reviews">
            <div className="raiting">
              <h1>Поставьте оценка</h1>
              <Rate rating={rating} onRating={(rate) => setRating(rate)} />
              {/*<p>{rating}</p>*/}
            </div>

            <div className="review">
              <input
                type="text"
                placeholder="Достоинство"
                className="review-input"
                value={review.dignity}
                onChange={onChange("dignity")}
              />
              <label className="review-label">
                {" "}
                Расскажите что произвело на вас впечатление
              </label>
            </div>
            <div className="review">
              <input
                type="text"
                placeholder="Недостатки"
                className="review-input"
                value={review.disadvantages}
                onChange={onChange("disadvantages")}
              />
              <label className="review-label">
                {" "}
                Дайте знать, если сделали что-то не так{" "}
              </label>
            </div>
            <div className="review">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="review-textarea"
                placeholder="Комментарий"
                value={review.comment}
                onChange={onChange("comment")}
              />
              <label className="review-label">
                {" "}
                Как быстро перезвонил оператор?Был вежлив? Курьер позвонил за
                час до доставки?Приготовил сдачу? Заказ был правилно
                укомплектован?
              </label>
            </div>
            <div className="review">
              <input
                type="text"
                placeholder="Имя и Фамилия"
                className="review-input"
                value={review.fullName}
                onChange={onChange("fullName")}
              />
              <label className="review-label">
                {" "}
                Не заполняйти чтобы оставить отзыв анонимно{" "}
              </label>
            </div>
            <div className="review">
              <input
                type="text"
                placeholder="Номер Телефона"
                className="review-input"
                value={review.phoneContact}
                onChange={onChange("phoneContact")}
              />
              <label className="review-label"> На сайте не публикуется</label>
            </div>
            <br />
            <div>
              <label className="review-label">
                {" "}
                Если хотите можете прикрепить ваше фото.
              </label>
              <input
                type="file"
                className="reviews-input"
                value={review.reviewerPhoto}
                onChange={onChange("reviewerPhoto")}
              />
            </div>

            <button className="btn-send1" onClick={onClick}>
              Отправить{" "}
            </button>
          </div>
        </div>
      )}
      {matches && (
        <div>
          <div className="reviewsforTablets">
            <div className="raiting">
              <h1>Поставьте оценка</h1>
              <Rate rating={rating} onRating={(rate) => setRating(rate)} />
              {/*<p>{rating}</p>*/}
            </div>

            <div className="reviewforTablets">
              <input
                type="text"
                placeholder="Достоинство"
                className="review-inputforTablets"
                value={review.dignity}
                onChange={onChange("dignity")}
              />
              <label className="review-labelforTablets">
                {" "}
                Расскажите что произвело на вас впечатление
              </label>
            </div>
            <div className="reviewforTablets">
              <input
                type="text"
                placeholder="Недостатки"
                className="review-inputforTablets"
                value={review.disadvantages}
                onChange={onChange("disadvantages")}
              />
              <label className="review-labelforTablets">
                {" "}
                Дайте знать, если сделали что-то не так{" "}
              </label>
            </div>
            <div className="reviewforTablets">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="review-textareaforTablets"
                placeholder="Комментарий"
                value={review.comment}
                onChange={onChange("comment")}
              />
              <label className="review-labelforTablets">
                {" "}
                Как быстро перезвонил оператор?Был вежлив? Курьер позвонил за
                час до доставки?Приготовил сдачу? Заказ был правилно
                укомплектован?
              </label>
            </div>
            <div className="reviewforTablets">
              <input
                type="text"
                placeholder="Имя и Фамилия"
                className="review-inputforTablets"
                value={review.fullName}
                onChange={onChange("fullName")}
              />
              <label className="review-labelforTablets">
                {" "}
                Не заполняйти чтобы оставить отзыв анонимно{" "}
              </label>
            </div>
            <div className="reviewforTablets">
              <input
                type="text"
                placeholder="Номер Телефона"
                className="review-inputforTablets"
                value={review.phoneContact}
                onChange={onChange("phoneContact")}
              />
              <label className="review-labelforTablets">
                {" "}
                На сайте не публикуется
              </label>
            </div>
            <br />
            <div>
              <label className="review-labelforTablets">
                {" "}
                Если хотите можете прикрепить ваше фото.
              </label>
              <input
                type="file"
                className="reviews-inputforTablets"
                value={review.reviewerPhoto}
                onChange={onChange("reviewerPhoto")}
              />
            </div>

            <button className="btn-send1forTablets" onClick={onClick}>
              Отправить{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
