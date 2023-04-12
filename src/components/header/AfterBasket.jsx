import React from 'react'
import Catalogs from '../catalogs/Catalogs'
import Search from '../search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../header/afterBasket.css"

export default function AfterBasket({
  info,
  getInfo,
  getCount,
  funcShowBar,
  showBars,
  setShowBars,
  getOneCategory,
  CountDostavk,
}){
    

  let news = new Date().toDateString();
  console.log(news);
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
      <div className="decor">
        <h1>КОРЗИНА</h1>
        <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
        <h1> ОФОРМЛЕНИЕ</h1>
        <FontAwesomeIcon icon={faArrowRight} className="arrowRight" />
        <h1> ЗАКАЗ ВЫПОЛНЕН</h1>
      </div>

      <div className="zakaz">Ваш заказ принят. Благодарим вас.</div>
      <div className="infoAboutZakaz">
        <div className="AboutZakaz">
          <p>Номер заказа:</p>
          <p>{CountDostavk}</p>
        </div>
        <div className="AboutZakaz">
          <p> Дата:</p>
          <p>{news}</p>

        </div>
        <div className="AboutZakaz">
          <p>Метод оплаты:</p>
          <p>Оплата при доставке</p>
        </div>
      </div>
      {/*<div className="methodPay">
        <p> Оплата наличными при доставке заказа.</p>
      </div>*/}
      {/*<div className="tableInfoAboutZakaz">
        <h2>ИНФОРМАЦИЯ О ЗАКАЗЕ</h2>
        <div className="product">
          <h3>Товар</h3>
          <h4>Итого:</h4>
        </div>
        <div className="product">
          <p>{info.drug_name}</p>
          <p></p>
        </div>
        <div className="product">
          <h3>Подитог:</h3>
          <p></p>
        </div>
        <div className="product">
          <h3>Доставка:</h3>
          <p></p>
        </div>
        <div className="product">
          <p>Метод оплаты:</p>
          <p>Оплата при доставке</p>
        </div>
        <div className="product">
          <h3>Итого:</h3>
          <p></p>
        </div>
      </div>*/}
    </div>
  );
}
