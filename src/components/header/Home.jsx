import React, { useEffect, useState } from "react";
import Catalogs from "../catalogs/Catalogs";
import Search from "../search/Search";
import Slide from "../../slick/Slide";
import { Link } from "react-router-dom";
import Slider from "../../slick/slick2/Slide";
import SliderFood from "../../slick/slick3/SliderFood";
import SliderHeader from "../../slick/slide2/SliderHeader";
import SliderBody from "../../slick/slide1/SliderBody";
import LastReview from "./LastReview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faWhatsapp,faViber} from "@fortawesome/free-brands-svg-icons";
import "../styles/style.css";


export default function Home({
  getInfo,
  getSelect,
  data,
  getOneCategory,
  funcShowBar,
  showBars,
  setShowBars,
  getCount,
}) {
  const [products, setProducts] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const [frequently, setFrequently] = useState([]);
  const [search, setSearch] = useState("");
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width:768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div>
      <Search
        setSearch={setSearch}
        getInfo={getInfo}
        data={data}
        funcShowBar={funcShowBar}
        showBars={showBars}
        setShowBars={setShowBars}
        getCount={getCount}
        getOneCategory={getOneCategory}
      />
      <div>
        <Catalogs className="category" getOneCategory={getOneCategory} />
      </div>

      <div className="sliderHeader">
        <SliderHeader />
      </div>

      {/*  for laptop */}
      {!matches && (
        <div className="infoAboutSocials">
          <div className="seller-img">
            <img src="/img/copy.png" alt="" />
          </div>
          <div className="content">
            <h1>Бесплатьный чать с фармацевтом</h1>
            <p>
              Вам срочно нужны лекарства или же хотите получить информацию о
              них?
            </p>
            <p>
              Скорее пишети нам и получите консультацию с оформлением вашего
              заказа?{" "}
            </p>
          </div>
          <div className="social">
            <button>
              {" "}
              <FontAwesomeIcon icon={faTelegram} className="icons" /> TELEGRAM
            </button>
            <button>
              <FontAwesomeIcon icon={faWhatsapp} className="icons" /> WHATSAPP
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faViber} className="icons" /> VIBER
            </button>
          </div>
        </div>
      )}
      {/* for tablets */}
      {matches && (
        <div className="infoAboutSocialsforTablet">
          <div className="infoAboutSocialsforTablets">
            <div className="seller-imgforTablets">
              <img src="/img/copy.png" alt="" />
            </div>
            <div className="contentforTablets">
              <h1>Бесплатьный чать с фармацевтом</h1>
              <p>
                Вам срочно нужны лекарства или же хотите получить информацию о
                них?
              </p>
              <p>
                Скорее пишети нам и получите консультацию с оформлением вашего
                заказа?{" "}
              </p>
            </div>
          </div>
          <div className="socialForTablets">
            <button>
              {" "}
              <FontAwesomeIcon
                icon={faTelegram}
                className="iconsForTablets"
              />{" "}
              TELEGRAM
            </button>
            <button>
              <FontAwesomeIcon icon={faWhatsapp} className="iconsForTablets" />{" "}
              WHATSAPP
            </button>
            <button>
              {" "}
              <FontAwesomeIcon
                icon={faViber}
                className="iconsForTablets"
              />{" "}
              VIBER
            </button>
          </div>
        </div>
      )}

      {!matches && (
        <div className="nav">
          <h1>Часто пакупаемые товары</h1>
          <>
            <Slide search={search} getInfo={getInfo} />
          </>
        </div>
      )}
      {matches && (
        <div className="navforTablets">
          <h1>Часто пакупаемые товары</h1>
          <>
            <Slide search={search} getInfo={getInfo} />
          </>
        </div>
      )}
      <div className="slideBody">
        <SliderBody />
      </div>
      {!matches && (
        <div className="nav-food">
          <h1>Питания для детей</h1>
          <>
            <Slider getInfo={getInfo} />
          </>
        </div>
      )}
      {matches && (
        <div className="nav-foodforTablets">
          <h1>Питания для детей</h1>
          <>
            <Slider getInfo={getInfo} />
          </>
        </div>
      )}

      {!matches && (
        <div className="nav-food2">
          <h1>Подгузники для детей</h1>
          <SliderFood getInfo={getInfo} />
        </div>
      )}
      {matches && (
        <div className="nav-food2forTablets">
          <h1>Подгузники для детей</h1>
          <SliderFood getInfo={getInfo} />
        </div>
      )}

      {!matches && (
        <>
          <h1 className="navs">Последние Отзывы </h1>
          <LastReview />
          <p className="navs"></p>
        </>
      )}
      {matches && (
        <>
          <h1 className="navsforTablets">Последние Отзывы </h1>
          <LastReview />
          <p className="navsforTablets"></p>
        </>
      )}
      {!matches && (
        <>
          <div className="happy">
            <div className=" happiness">
              <h1>Хотите сделать нас счастливыми?</h1>
              <Link to="review" className="linkToreview">
                {" "}
                Оставьте Отзывы
              </Link>
            </div>
          </div>
        </>
      )}
      {matches && (
        <>
          <div className="happyforTablets">
            <div className=" happinessforTablets">
              <h1>Хотите сделать нас счастливыми?</h1>
              <Link to="review" className="linkToreviewForTablets">
                {" "}
                Оставьте Отзывы
              </Link>
            </div>
          </div>
        </>
      )}

      {!matches && (
        <div className=" express-1">
          <div className="express">
            <div className="dostavka">
              <h1>Экспресс доставка </h1>
              <p> Доставим ваши лекарства в течении 40 минут </p>
              <Link to="/drugStore" className="dostavka_Link">
                {" "}
                Начать покупку
              </Link>
            </div>
            <img src="/img/best.png" alt="" className="car" />
          </div>
        </div>
      )}
      {matches && (
        <div className=" express-1forTablets">
          <div className="expressforTablets">
            <div className="dostavkaforTablets">
              <h1>Экспресс доставка </h1>
              <p> Доставим ваши лекарства в течении 40 минут </p>
              <Link to="/drugStore" className="dostavka_LinkforTablets">
                {" "}
                Начать покупку
              </Link>
            </div>
            <img src="/img/best.png" alt="" className="carforTablets" />
          </div>
        </div>
      )}
    </div>
  );
}
