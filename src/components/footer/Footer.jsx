import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedin, faTelegram, faViber, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../styles/style.css"

export default function Footer() {
  const [matches,setMatches]=useState(
    window.matchMedia("(max-width:768px)").matches
  )
  useEffect(()=>{
    window
    .matchMedia("(max-width:768px)")
     .addEventListener("change",(e)=>setMatches(e.matches))
  },[])

  return (
    <>
      {!matches && (
        <div className="footer">
          <div className="aboutUs">
            <h1 className="h1-footer">О Компания</h1>
            <Link to="/policy" className="cutLinks">
              Политика конфиденциальности
            </Link>
          </div>
          <div className="cut">
            <h1 className="h1-footer">Разделы</h1>
            <Link to="/drugstore" className="cutLinks">
              {" "}
              Аптека
            </Link>
            <Link to="/sendFoto" className="cutLinks">
              Отправьте фото рецепта
            </Link>
            <Link to="/findDrug" className="cutLinks">
              Не нашли лекарство?
            </Link>
          </div>
          <div className="help">
            <h1 className="h1-footer">Помощь</h1>
            <Link to="/support" className="cutLinks">
              {" "}
              Поддержка
            </Link>
            <Link to="/callBack" className="cutLinks">
              {" "}
              Заказать обратный звонок
            </Link>
            <Link to="/review" className="cutLinks">
              {" "}
              Отзывы
            </Link>
          </div>
          <div className="contacts">
            <h1 className="h1-footer">Коньакты</h1>
            <h2 className="contact">call center</h2>
            <h2 className="contact">4440</h2>
            <h2 className="contact">МЕССЕНДЖЕРЫ</h2>
            <h2 className="contact">+992 55 774 4440</h2>
            <h2 className="contact">ПОЧТА</h2>
            <h2 className="contact">info@yalla.tj</h2>
            <h2 className="contact">РАБОТАЕМ ПО ГОРОДУ</h2>
            <h2 className="contact">ДУШАНБЕ</h2>
            <h2 className="contact">ГРАФМК РАБОТЫ</h2>
            <h2 className="contact"> 24/7</h2>
            <div className="messengers">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              <FontAwesomeIcon icon={faTelegram} className="icon" />
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              <FontAwesomeIcon icon={faViber} className="icon" />
            </div>
          </div>
        </div>
      )}

      {matches && (
        <div className="footerForTablets">
          <div>
            <div className="aboutUs">
              <h1 className="h1-footerForTablets">О Компания</h1>
              <Link to="/policy" className="cutLinks">
                Политика конфиденциальности
              </Link>
            </div>
            <div className="help">
              <h1 className="h1-footerForTablets">Помощь</h1>
              <Link to="/support" className="cutLinks">
                {" "}
                Поддержка
              </Link>
              <Link to="/callBack" className="cutLinks">
                {" "}
                Заказать обратный звонок
              </Link>
              <Link to="/review" className="cutLinks">
                {" "}
                Отзывы
              </Link>
            </div>
          </div>
          <div>
            <div className="cut">
              <h1 className="h1-footerForTablets">Разделы</h1>
              <Link to="/drugstore" className="cutLinks">
                {" "}
                Аптека
              </Link>
              <Link to="/sendFoto" className="cutLinks">
                Отправьте фото рецепта
              </Link>
              <Link to="/findDrug" className="cutLinks">
                Не нашли лекарство?
              </Link>
            </div>

            <div className="contactsForTablets">
              <h1 className="h1-footerForTablets">Коньакты</h1>
              <h2 className="contactForTablets">call center</h2>
              <h2 className="contactForTablets">4440</h2>
              <h2 className="contactForTablets">МЕССЕНДЖЕРЫ</h2>
              <h2 className="contactForTablets">+992 55 774 4440</h2>
              <h2 className="contactForTablets">ПОЧТА</h2>
              <h2 className="contactForTablets">info@yalla.tj</h2>
              <h2 className="contactForTablets">РАБОТАЕМ ПО ГОРОДУ</h2>
              <h2 className="contactForTablets">ДУШАНБЕ</h2>
              <h2 className="contactForTablets">ГРАФМК РАБОТЫ</h2>
              <h2 className="contactForTablets"> 24/7</h2>
              <div className="messengersForTablets">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="iconForTablets"
                />
                <FontAwesomeIcon icon={faLinkedin} className="iconForTablets" />
                <FontAwesomeIcon icon={faTelegram} className="iconForTablets" />
                <FontAwesomeIcon icon={faWhatsapp} className="iconForTablets" />
                <FontAwesomeIcon icon={faViber} className="iconForTablets" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
