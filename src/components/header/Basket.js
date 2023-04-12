import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./basket.css";
import Search from "../search/Search";
import Catalogs from "../catalogs/Catalogs";
import { Link } from "react-router-dom";
//import { counter } from "@fortawesome/fontawesome-svg-core";

export default function Basket({
  setInfo,
  info,
  getInfo,
  getCount,
  funcShowBar,
  showBars,
  setShowBars,
  getOneCategory,
  setCounts,
  ShowCountDostavk,
}) {
  const [customer, setCustomer] = useState({
    name: "",
    location: "",
    phone: "",
    message: "",
    drug_name: "",
    drug_price: "",
    total_price: "",
    dostavkprice: "",
  });
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width:768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  });
  const getInfoFromcustomer = (key) => (e) => {
    setCustomer({ ...customer, [key]: e.target.value });
  };
  //const sendInfoFromCustomerToServer = () => {
  //  fetch("http://localhost:3003/customer", {
  //    method: "POST",
  //    body: JSON.stringify(customer),
  //    headers: {
  //      "Content-type": "application/json; charset=UTF-8",
  //    },
  //  })
  //    .then((response) => response.json())
  //    .then((json) => console.log(json));
  //  console.log("customer::", customer);
  //  setCounts(0);
  //  setInfo([]);
  //  ShowCountDostavk();
  //};
  const [priceDostavk, setPriceDostavk] = useState(0);
  const price_Dostavka = {
    price1: 10.0,
    price2: 20.0,
  };

  return (
    <div>
      <Search
        getInfo={getInfo}
        funcShowBar={funcShowBar}
        showBars={showBars}
        setShowBars={setShowBars}
        getCount={getCount}
        getOneCategory={getOneCategory}
      />
      <Catalogs getOneCategory={getOneCategory} />

      {/*   start  part of right */}
      {!matches && (
        <>
          <div className="decor">
            <h1>КОРЗИНА</h1>
            <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
            <h1> ОФОРМЛЕНИЕ</h1>
            <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
            <h1> ЗАКАЗ ВЫПОЛНЕН</h1>
          </div>

          <div className="sell-drug">
            <div className="infoAboutCustomer">
              <label className="necessarily">
                Как к вам обращаться? <p>*</p>
              </label>
              <input
                type="text"
                className="input-infoAboutCustomer"
                value={customer.name}
                onChange={getInfoFromcustomer("name")}
              />
              <label className="necessarily">
                Куда вам привезти? <p>*</p>
              </label>
              <input
                type="text"
                className="input-infoAboutCustomer"
                value={customer.location}
                onChange={getInfoFromcustomer("location")}
              />
              <label className="necessarily">
                Телефон для связы <p>*</p>
              </label>
              <input
                type="text"
                className="input-infoAboutCustomer"
                value={customer.phone}
                onChange={getInfoFromcustomer("phone")}
              />
              <label className="label-infoAboutCustomer">
                {" "}
                Премечание к заказу
              </label>
              <textarea
                className="textArea-infoAboutCustomer"
                placeholder="Премечания к вашему заявку, например, особые  пожелания отделу доставки."
                value={customer.message}
                onChange={getInfoFromcustomer("message")}
              ></textarea>
            </div>

            {/* the end part of left */}

            {info ? (
              <div className="infoAboutDecor">
                <h1>Ваш заказ</h1>
                <div className="the-endProducts">
                  <div className="the-endProduct">
                    <h4>Товар</h4>
                    <h4>Подытог</h4>
                  </div>
                  <div className="the-endProduct">
                    <h4
                      value={info.drug_name}
                      onChange={getInfoFromcustomer("drug_name")}
                    >
                      {info.drug_name}
                    </h4>
                    <p
                      className="p-price"
                      value={info.price}
                      onChange={getInfoFromcustomer("drug_price")}
                    >
                      {getCount}x{info.price}
                    </p>
                  </div>
                  <div className="the-endProduct">
                    <h4>Подытог</h4>
                    <p className="p-price">{info.price * getCount}</p>
                  </div>
                  <div className="the-endProduct">
                    <h4 className="the-h4">Доставка</h4>
                    <div className="dostavk">
                      <p className="dostavka-p">
                        <input
                          type="radio"
                          name="dostavka"
                          value={price_Dostavka.price2}
                          onChange={(e) => setPriceDostavk(e.target.value)}
                        />{" "}
                        Экспресс доставка в течении 1 часа{" "}
                        {price_Dostavka.price2} TJS{" "}
                      </p>
                      <p className="dostavka-p">
                        {" "}
                        <input
                          type="radio"
                          name="dostavka"
                          value={price_Dostavka.price1}
                          onChange={(e) => setPriceDostavk(e.target.value)}
                        />{" "}
                        Стандартная доставка в течении 3 часов:
                        {price_Dostavka.price1} TJS{" "}
                      </p>
                    </div>
                  </div>

                  <div className="the-endProduct">
                    <h4>Итого</h4>
                    <h4
                      className="p-price"
                      value={
                        Number(info.price * getCount) + Number(priceDostavk)
                      }
                      //onChange={getInfoFromcustomer("total_price")}
                    >
                      {Number(info.price * getCount) + Number(priceDostavk)}
                    </h4>
                  </div>
                </div>
                <p>Оплата при доставке</p>

                <p className="pay"> Оплата наличными при доставке заказа.</p>

                <p className="sendInfo">
                  {" "}
                  Ваши личные данные будут использоваться для обработки ваших
                  заказов, упрощения вашей работы с сайтом и для других целей,
                  описанных в нашей политика конфиденциальности.
                </p>
                <span>
                  <Link to="/afterBasket" className="button_dostavk">
                    {" "}
                    Подтвердить заказов
                  </Link>
                </span>
              </div>
            ) : (
              <span>
                <Link to="/drugStore" className="no-product">
                  You should select product
                </Link>
              </span>
            )}
          </div>
        </>
      )}

      {matches && (
        <>
          {info ? (
            <>
              <div className="decorforTablet">
                <h1>КОРЗИНА</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrowRightforTablet"
                />
                <h1> ОФОРМЛЕНИЕ</h1>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="arrowRightforTablet"
                />
                <h1> ЗАКАЗ ВЫПОЛНЕН</h1>
              </div>

              <div className="sell-drugforTablet">
                <div className="infoAboutCustomerforTablet">
                  <label className="necessarilyforTablet">
                    Как к вам обращаться? <p>*</p>
                  </label>
                  <input
                    type="text"
                    className="input-infoAboutCustomerforTablet"
                    value={customer.name}
                    onChange={getInfoFromcustomer("name")}
                  />
                  <label className="necessarilyforTablet">
                    Куда вам привезти? <p>*</p>
                  </label>
                  <input
                    type="text"
                    className="input-infoAboutCustomerforTablet"
                    value={customer.location}
                    onChange={getInfoFromcustomer("location")}
                  />
                  <label className="necessarilyforTablet">
                    Телефон для связы <p>*</p>
                  </label>
                  <input
                    type="text"
                    className="input-infoAboutCustomerforTablet"
                    value={customer.phone}
                    onChange={getInfoFromcustomer("phone")}
                  />
                  <label className="label-infoAboutCustomerforTablet">
                    {" "}
                    Премечание к заказу
                  </label>
                  <textarea
                    className="textArea-infoAboutCustomerforTablet"
                    placeholder="Премечания к вашему заявку, например, особые  пожелания отделу доставки."
                    value={customer.message}
                    onChange={getInfoFromcustomer("message")}
                  ></textarea>
                </div>

                {/* the end part of left */}
                <div className="infoAboutDecor">
                  <h1>Ваш заказ</h1>
                  <div className="the-endProducts">
                    <div className="the-endProduct">
                      <h4>Товар</h4>
                      <h4>Подытог</h4>
                    </div>
                    <div className="the-endProduct">
                      <h4
                        value={info.drug_name}
                        onChange={getInfoFromcustomer("drug_name")}
                      >
                        {info.drug_name}
                      </h4>
                      <p
                        className="p-price"
                        value={info.price}
                        onChange={getInfoFromcustomer("drug_price")}
                      >
                        {getCount}x{info.price}
                      </p>
                    </div>
                    <div className="the-endProduct">
                      <h4>Подытог</h4>
                      <p className="p-price">{info.price * getCount}</p>
                    </div>
                    <div className="the-endProduct">
                      <h4 className="the-h4">Доставка</h4>
                      <div className="dostavk">
                        <p className="dostavka-p">
                          <input
                            type="radio"
                            name="dostavka"
                            value={price_Dostavka.price2}
                            onChange={(e) => setPriceDostavk(e.target.value)}
                          />{" "}
                          Экспресс доставка в течении 1 часа{" "}
                          {price_Dostavka.price2} TJS{" "}
                        </p>
                        <p className="dostavka-p">
                          {" "}
                          <input
                            type="radio"
                            name="dostavka"
                            value={price_Dostavka.price1}
                            onChange={(e) => setPriceDostavk(e.target.value)}
                          />
                          Стандартная доставка в течении 3 часов:
                          {price_Dostavka.price1} TJS{" "}
                        </p>
                      </div>
                    </div>

                    <div className="the-endProduct">
                      <h4>Итого</h4>
                      <h4
                        className="p-price"
                        value={
                          Number(info.price * getCount) + Number(priceDostavk)
                        }
                        onChange={getInfoFromcustomer("total_price")}
                      >
                        {Number(info.price * getCount) + Number(priceDostavk)}
                      </h4>
                    </div>
                  </div>
                  <p>Оплата при доставке</p>

                  <p className="pay"> Оплата наличными при доставке заказа.</p>

                  <p className="sendInfo">
                    {" "}
                    Ваши личные данные будут использоваться для обработки ваших
                    заказов, упрощения вашей работы с сайтом и для других целей,
                    описанных в нашей политика конфиденциальности.
                  </p>
                  <span>
                    <Link to="/afterBasket" className="button_dostavkforTablet">
                      {" "}
                      Подтвердить заказов
                    </Link>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <span>
              {" "}
              <Link to="/drugStore" className="no-product">
                {" "}
                You should select
              </Link>{" "}
            </span>
          )}
        </>
      )}
    </div>
  );
}
