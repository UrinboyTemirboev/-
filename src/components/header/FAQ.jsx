import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../footer/Footer';
import "../styles/style.css"
import Search from "../search/Search"
import Catalogs from "../catalogs/Catalogs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDropbox } from '@fortawesome/free-brands-svg-icons';
import {IoIosArrowDropdown} from "react-icons/io"
import {IoIosArrowDropup} from "react-icons/io"


export default function FAQ({ getInfo, data, funcShowBar, showBars, setShowBars,getCount,getOneCategory }) {
  const [text, setText] = useState(true);
  const [text1, setText1] = useState(true);
  const [text2, setText2] = useState(true);
  const [text3, setText3] = useState(true);
  const [text4, setText4] = useState(true);
  const [text5, setText5] = useState(true);
  const [text6, setText6] = useState(true);
  const [text7, setText7] = useState(true);
  const [text8, setText8] = useState(true);
  const [text9, setText9] = useState(true);
  const [text10, setText10] = useState(true);
  const [text11, setText11] = useState(true);
  const [text12, setText12] = useState(true);
  const [text13, setText13] = useState(true);
  const ClickIcon = () => {
    setText(!text);
  };
  const ClickIcon1 = () => {
    setText1(!text1);
  };
  const ClickIcon2 = () => {
    setText2(!text2);
  };
  const ClickIcon3 = () => {
    setText3(!text3);
  };
  const ClickIcon4 = () => {
    setText4(!text4);
  };
  const ClickIcon5 = () => {
    setText5(!text5);
  };
  const ClickIcon6 = () => {
    setText6(!text6);
  };
  const ClickIcon7 = () => {
    setText7(!text7);
  };
  const ClickIcon8 = () => {
    setText8(!text8);
  };
  const ClickIcon9 = () => {
    setText9(!text9);
  };
  const ClickIcon10 = () => {
    setText10(!text10);
  };

  const ClickIcon11 = () => {
    setText11(!text11);
  };
  const ClickIcon12 = () => {
    setText12(!text12);
  };

  const ClickIcon13 = () => {
    setText13(!text13);
  };

  const [inputInfo, setInputInfo] = useState({
    fullName: "",
    contact: "",
    message: "",
    email: "",
  });

  const onChange = (key) => (e) => {
    setInputInfo({ ...inputInfo, [key]: e.target.value });
  };

  const clickBtn = () => {
    fetch("http://localhost:3003/faq", {
      method: "POST",
      body: JSON.stringify(inputInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setInputInfo({
      fullName: "",
      contact: "",
      message: "",
      email: "",
    });
  };

  const [matches,setMatches]=useState(
    window.matchMedia("(max-width:768px)").matches
  )
  useEffect(()=>{
     window.matchMedia("(max-width:768px)")
     .addEventListener("change",(e)=>setMatches(e.matches))
  })

  return (
    <div className="total">
      <Search
        getInfo={getInfo}
        data={data}
        funcShowBar={funcShowBar}
        showBars={showBars}
        setShowBars={setShowBars}
        getCount={getCount}
        getOneCategory={getOneCategory}
      />
      <Catalogs getOneCategory={getOneCategory} />
      <>
        {!matches && (
          <div className="faq">
            <div className="questions">
              <h2 className="faq-h">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
              <div className="question">
                <h4 className="h2">
                  КАКОЙ У ВАС ГРАФИК РАБОТЫ?{" "}
                  {!text ? (
                    <IoIosArrowDropup onClick={ClickIcon} className="click" />
                  ) : (
                    <IoIosArrowDropdown onClick={ClickIcon} className="click" />
                  )}
                </h4>
                {!text ? (
                  <p>
                    Yalla работает 24/7,в любое время дня и ночи найдем и
                    доставим Ваши лекарства!
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  КАКОВА МИНИИАЛЬНАЯ СУММА ЗАКАЗА?{" "}
                  {!text1 ? (
                    <IoIosArrowDropup onClick={ClickIcon1} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon1}
                      className="click"
                    />
                  )}
                </h4>
                {!text1 ? (
                  <p>Минимальная сумма заказа составляет 44 сомони.</p>
                ) : null}
              </div>

              <div className="question">
                <h4 className="h2">
                  СКОЛЬКО СТОИТ ДОСТАВКА?{" "}
                  {!text2 ? (
                    <IoIosArrowDropup onClick={ClickIcon2} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon2}
                      className="click"
                    />
                  )}
                </h4>
                {!text2 ? (
                  <p>
                    Yalla имеет 3 вида доставки:Если стоимость заказа составляет
                    от 44 до 240 сомони, Вы можете оформить Экспресс (в течении
                    40 минут-20 сомони) или Стандартную доставку (в течении 3
                    часов - 10 сомони). Если же стоимость заказа превышает 240
                    сомони, то можно оформить Бесплатьную доставку(в течении 3
                    часов){" "}
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  В ТЕЧЕНИИ СКОЛЬКИ ЧАСОВ ОСУЩЕСТВЛЯЕТСЯ ДОСТАВКА?
                  {!text3 ? (
                    <IoIosArrowDropup onClick={ClickIcon3} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon3}
                      className="click"
                    />
                  )}
                </h4>
                {!text3 ? (
                  <p>
                    {" "}
                    Стандартная и бесплатная доставки осуществляются в течении
                    3-х часов,Экспресс в течении 40 минут!
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  ОТКУДА ВЫ БЕРЕТЕ ПРЕПАРАТЫ?
                  {!text4 ? (
                    <IoIosArrowDropup onClick={ClickIcon4} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon4}
                      className="click"
                    />
                  )}
                </h4>
                {!text4 ? (
                  <p>
                    Нашим партнером является сеть аптек "Нишон",откуда мы и
                    берем медикаменты.
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  В ТЕЧЕНИИ СКОЛЬКИ ЧАСОВ НАХОДИТЕ ДЕФИЦИТНЫЕ ЛЕКАРСТВА?
                  {!text5 ? (
                    <IoIosArrowDropup onClick={ClickIcon5} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon5}
                      className="click"
                    />
                  )}
                </h4>
                {!text5 ? (
                  <p>
                    В течении 3-х часов ваша заявка на поиск дефицитного
                    лекарства будет обработана.{" "}
                  </p>
                ) : null}
              </div>

              <div className="question">
                <h4 className="h2">
                  ЕСТЬ ЛИ ОРТРПЕДИЧЕСКИЕ ПРИБОРЫ?
                  {!text6 ? (
                    <IoIosArrowDropup onClick={ClickIcon6} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon6}
                      className="click"
                    />
                  )}
                </h4>
                {!text6 ? (
                  <p>
                    {" "}
                    Да, ортопедические приборы вы можете приобрести в Yalla.
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  КАК ЗАКАЗАТЬ?
                  {!text7 ? (
                    <IoIosArrowDropup onClick={ClickIcon7} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon7}
                      className="click"
                    />
                  )}
                </h4>
                {!text7 ? (
                  <p>
                    {" "}
                    Вы можете оформить самостоятельно заказ на сайте, написать
                    нам в социальных сетях или позвонить по короткому номеру
                    4440!
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  СКОЛЬКО СТОИТ КОНСУЛЬТАЦИЯ?
                  {!text13 ? (
                    <IoIosArrowDropup onClick={ClickIcon13} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon13}
                      className="click"
                    />
                  )}
                </h4>
                {!text13 ? (
                  <p>
                    Консультация по оформлению заказа совершенно бесплатная!
                  </p>
                ) : null}
              </div>

              <div className="question">
                <h4 className="h2">
                  ЕСТЬ ЛИ У ВАС ВОЗВРАТ И ОБМЕН?
                  {!text8 ? (
                    <IoIosArrowDropup onClick={ClickIcon8} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon8}
                      className="click"
                    />
                  )}
                </h4>
                {!text8 ? (
                  <div>
                    {" "}
                    <p>
                      Да, вернуть товар можно в случае, когда на нем обнаружен
                      диффект.Проверить товар нужно при доставщике, так как
                      после его ухода товар больше не будет принят.
                    </p>
                    <p>
                      Поменять товар можно, когда с нашей стороны допущена
                      ошибка и был доставлен неправильный препарат.Проверить
                      также нужно при присутствии доставщика!
                    </p>{" "}
                  </div>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  ИМЕЕТСЯ ЛИ РАССРОЧКА?
                  {!text9 ? (
                    <IoIosArrowDropup onClick={ClickIcon9} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon9}
                      className="click"
                    />
                  )}
                </h4>
                {!text9 ? (
                  <p>
                    Да конечно рассрочка имеется.Картой "Салом" сроком на месяц
                    без комисии.{" "}
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  СПОСОБЫ ОПЛАТЫ?
                  {!text10 ? (
                    <IoIosArrowDropup onClick={ClickIcon10} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon10}
                      className="click"
                    />
                  )}
                </h4>
                {!text10 ? (
                  <p>
                    {" "}
                    Вы можете осуществить оплату с помощью QR-кода, банковских
                    карт или расплатиться наличными деньгами.
                  </p>
                ) : null}
              </div>
              <div className="question">
                <h4 className="h2">
                  КАК МНЕ ОТПРАВИТЬ ВАМ РЕЦЕПТ ДОКТОРА?
                  {!text11 ? (
                    <IoIosArrowDropup onClick={ClickIcon11} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon11}
                      className="click"
                    />
                  )}
                </h4>
                {!text11 ? (
                  <p>
                    Для того, чтобы осуществить заказ на какой-либо
                    лекарственный препарат, необходимо первым делом связаться с
                    нами,если у Вас присутствует рецепт врача, то Вы можете
                    отправить нам через сайт или в мессенджерах, а все нужные
                    препараты мы сами найдем и быстро доставим.{" "}
                  </p>
                ) : null}
              </div>

              <div className="question">
                <h4 className="h2">
                  Я НЕ МОГУ НАЙТИ ЛЕКАРСТВО В АПТЕКАХ, МОЖЕТЕ ЛИ МНЕ ПОМОЧЬ?
                  {!text12 ? (
                    <IoIosArrowDropup onClick={ClickIcon12} className="click" />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon12}
                      className="click"
                    />
                  )}
                </h4>
                {!text12 ? (
                  <p>
                    {" "}
                    Да, конечно! Любое лекарство, каторые вы не можете найти в
                    аптеках, можете с легкостью оставить заявку у нас. Для этого
                    необходимо пройти на сайт и во вкладке "Поиск дефицитных
                    лекарств" написать нужный для Вас препарат. Мы облегчим вам
                    поиск.{" "}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="inputInfo">
              <h2 className="faq-h"> СВЯЗАТЬСЯ С НАМИ</h2>
              <div className="faq_info">
                <div>
                  {" "}
                  <label className="label"> Имя и Фамиля</label>
                  <input
                    type="text"
                    className="input-faq"
                    value={inputInfo.fullName}
                    onChange={onChange("fullName")}
                  />
                </div>
                <div className="faq_info">
                  <label className="label"> Email</label>
                  <input
                    type="email"
                    className="input-faq"
                    value={inputInfo.email}
                    onChange={onChange("email")}
                  />
                </div>
              </div>

              <label className="label">Номер телефона</label>
              <input
                type="num"
                className="input-faq"
                value={inputInfo.contact}
                onChange={onChange("contact")}
              />
              <label className="label"> Письмо</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="textArea"
                value={inputInfo.message}
                onChange={onChange("message")}
              ></textarea>

              <button className="faq-btn" onClick={clickBtn}>
                Задать вопрос
              </button>
            </div>
          </div>
        )}
        {matches && (
          <div className="faqforTablets">
            <div className="questionsforTablets">
              <h2 className="faq-hforTablets">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  КАКОЙ У ВАС ГРАФИК РАБОТЫ?{" "}
                  {!text ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text ? (
                  <p>
                    Yalla работает 24/7,в любое время дня и ночи найдем и
                    доставим Ваши лекарства!
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  КАКОВА МИНИИАЛЬНАЯ СУММА ЗАКАЗА?{" "}
                  {!text1 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon1}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon1}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text1 ? (
                  <p>Минимальная сумма заказа составляет 44 сомони.</p>
                ) : null}
              </div>

              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  СКОЛЬКО СТОИТ ДОСТАВКА?{" "}
                  {!text2 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon2}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon2}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text2 ? (
                  <p>
                    Yalla имеет 3 вида доставки:Если стоимость заказа составляет
                    от 44 до 240 сомони, Вы можете оформить Экспресс (в течении
                    40 минут-20 сомони) или Стандартную доставку (в течении 3
                    часов - 10 сомони). Если же стоимость заказа превышает 240
                    сомони, то можно оформить Бесплатьную доставку(в течении 3
                    часов){" "}
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  В ТЕЧЕНИИ СКОЛЬКИ ЧАСОВ ОСУЩЕСТВЛЯЕТСЯ ДОСТАВКА?
                  {!text3 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon3}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon3}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text3 ? (
                  <p>
                    {" "}
                    Стандартная и бесплатная доставки осуществляются в течении
                    3-х часов,Экспресс в течении 40 минут!
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  ОТКУДА ВЫ БЕРЕТЕ ПРЕПАРАТЫ?
                  {!text4 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon4}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon4}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text4 ? (
                  <p>
                    Нашим партнером является сеть аптек "Нишон",откуда мы и
                    берем медикаменты.
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  В ТЕЧЕНИИ СКОЛЬКИ ЧАСОВ НАХОДИТЕ ДЕФИЦИТНЫЕ ЛЕКАРСТВА?
                  {!text5 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon5}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon5}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text5 ? (
                  <p>
                    В течении 3-х часов ваша заявка на поиск дефицитного
                    лекарства будет обработана.{" "}
                  </p>
                ) : null}
              </div>

              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  ЕСТЬ ЛИ ОРТРПЕДИЧЕСКИЕ ПРИБОРЫ?
                  {!text6 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon6}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon6}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text6 ? (
                  <p>
                    {" "}
                    Да, ортопедические приборы вы можете приобрести в Yalla.
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  КАК ЗАКАЗАТЬ?
                  {!text7 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon7}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon7}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text7 ? (
                  <p>
                    {" "}
                    Вы можете оформить самостоятельно заказ на сайте, написать
                    нам в социальных сетях или позвонить по короткому номеру
                    4440!
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  СКОЛЬКО СТОИТ КОНСУЛЬТАЦИЯ?
                  {!text13 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon13}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon13}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text13 ? (
                  <p>
                    Консультация по оформлению заказа совершенно бесплатная!
                  </p>
                ) : null}
              </div>

              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  ЕСТЬ ЛИ У ВАС ВОЗВРАТ И ОБМЕН?
                  {!text8 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon8}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon8}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text8 ? (
                  <div>
                    {" "}
                    <p>
                      Да, вернуть товар можно в случае, когда на нем обнаружен
                      диффект.Проверить товар нужно при доставщике, так как
                      после его ухода товар больше не будет принят.
                    </p>
                    <p>
                      Поменять товар можно, когда с нашей стороны допущена
                      ошибка и был доставлен неправильный препарат.Проверить
                      также нужно при присутствии доставщика!
                    </p>{" "}
                  </div>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  ИМЕЕТСЯ ЛИ РАССРОЧКА?
                  {!text9 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon9}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon9}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text9 ? (
                  <p>
                    Да конечно рассрочка имеется.Картой "Салом" сроком на месяц
                    без комисии.{" "}
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  СПОСОБЫ ОПЛАТЫ?
                  {!text10 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon10}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon10}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text10 ? (
                  <p>
                    {" "}
                    Вы можете осуществить оплату с помощью QR-кода, банковских
                    карт или расплатиться наличными деньгами.
                  </p>
                ) : null}
              </div>
              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  КАК МНЕ ОТПРАВИТЬ ВАМ РЕЦЕПТ ДОКТОРА?
                  {!text11 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon11}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon11}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text11 ? (
                  <p>
                    Для того, чтобы осуществить заказ на какой-либо
                    лекарственный препарат, необходимо первым делом связаться с
                    нами,если у Вас присутствует рецепт врача, то Вы можете
                    отправить нам через сайт или в мессенджерах, а все нужные
                    препараты мы сами найдем и быстро доставим.{" "}
                  </p>
                ) : null}
              </div>

              <div className="questionforTablets">
                <h4 className="h2forTablets">
                  Я НЕ МОГУ НАЙТИ ЛЕКАРСТВО В АПТЕКАХ, МОЖЕТЕ ЛИ МНЕ ПОМОЧЬ?
                  {!text12 ? (
                    <IoIosArrowDropup
                      onClick={ClickIcon12}
                      className="clickforTablets"
                    />
                  ) : (
                    <IoIosArrowDropdown
                      onClick={ClickIcon12}
                      className="clickforTablets"
                    />
                  )}
                </h4>
                {!text12 ? (
                  <p>
                    {" "}
                    Да, конечно! Любое лекарство, каторые вы не можете найти в
                    аптеках, можете с легкостью оставить заявку у нас. Для этого
                    необходимо пройти на сайт и во вкладке "Поиск дефицитных
                    лекарств" написать нужный для Вас препарат. Мы облегчим вам
                    поиск.{" "}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="inputInfoforTablets">
              <h2 className="faq-hforTablets"> СВЯЗАТЬСЯ С НАМИ</h2>
              <div className="faq_infoforTablets">
                <div>
                  {" "}
                  <label className="labelforTablets"> Имя и Фамиля</label>
                  <input
                    type="text"
                    className="input-faqforTablets"
                    value={inputInfo.fullName}
                    onChange={onChange("fullName")}
                  />
                </div>
                <div className="faq_infoforTablets">
                  <label className="labelforTablets"> Email</label>
                  <input
                    type="email"
                    className="input-faqforTablets"
                    value={inputInfo.email}
                    onChange={onChange("email")}
                  />
                </div>
              </div>

              <label className="labelforTablets">Номер телефона</label>
              <input
                type="num"
                className="input-faqforTablets"
                value={inputInfo.contact}
                onChange={onChange("contact")}
              />
              <label className="labelforTablets"> Письмо</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="textAreaforTablets"
                value={inputInfo.message}
                onChange={onChange("message")}
              ></textarea>

              <button className="faq-btnforTablets" onClick={clickBtn}>
                Задать вопрос
              </button>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
