import React, { useEffect, useState } from "react";
import Catalogs from "../components/catalogs/Catalogs";
import Modal from "../components/modal/Modal";
import Search from "../components/search/Search";
import { Link } from "react-router-dom";

import "../slick/slick.css";

export default function Detailed({ info, data, funcShowBar, showBars, setShowBars,data1,getCount, Counts,getOneCategory,close}) {
  const [detailed, setDetailed] = useState(info);
  const [count, setCount] = useState(1);
  const[products,setProducts]=useState([]);
  const [matches,setMatches]=useState(
    window.matchMedia("(max-width:768px)").matches
  )

  useEffect(()=>{
     window.matchMedia("(max-width:768px)")
     .addEventListener("change",(e)=>setMatches(e.matches))
  })

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count > 1) {
      return setCount(count - 1);
    }
    return count;
  };


 let func1=data1;
 let func=data

  const clickToBasket = (count) => {
   func1();
    func();
    let obj={
      count:{count},
      id:info.id
    }
   
    setProducts([...products,obj,info])
     getCount(count);

   

  };
  console.log(products);
  
  return (
    <>
      <Search
        getCount={Counts}
        funcShowBar={funcShowBar}
        showBars={showBars}
        setShowBars={setShowBars}
        getOneCategory={getOneCategory}
        
      
        
      />
      <Catalogs getOneCategory={getOneCategory} />

      {!matches && (
        <div>
          <div className="infoAbout_selects">
            {detailed ? (
              <div className="infoAbout_select">
                <div className="selectImg">
                  <img src={info.img} className="img" />
                </div>

                <div className="right_selectInfo">
                  <h1>{info.drug_name}</h1>
                  <h2 className="p-price">{info.price}</h2>
                  <h2>{info.description}</h2>

                  {info.form ? (
                    <div className="form">
                      <h3> Форма выпуска:</h3>
                      <h3 className="h3-map">{info.form}</h3>
                    </div>
                  ) : null}

                  <div className="form">
                    <h3>Страна производства:</h3>
                    <h3 className="h3-map">{info.country}</h3>
                  </div>
                  <p className="p-info">
                    Есть вероятность того, что товар может быть не в наличии. С
                    Вами свяжуться наши операторы!{" "}
                  </p>
                  {info.category_name ? (
                    <div className="form">
                      <h3> Категории</h3>
                      <h3>{info.category_name}</h3>
                    </div>
                  ) : null}

                  <div className="counts">
                    <div>
                      {/*<button className='buttons'>*/}
                      <button className="buttons minus" onClick={minus}>
                        -
                      </button>
                      <button className="buttons"> {count}</button>
                      <button className="buttons plus" onClick={plus}>
                        +
                      </button>
                      {/*</button>*/}
                    </div>
                    <button
                      onClick={() => clickToBasket(count)}
                      className="tobasket"
                    >
                      {" "}
                      В КОРЗИНУ
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <h1 className="no-select"> you should select product</h1>
            )}
          </div>
        </div>
      )}
      {matches && (
        <div>
          <div className="infoAbout_selectsforTablet">
            {detailed ? (
              <div className="infoAbout_selectforTablet">
                <div className="selectImgforTablet">
                  <img src={info.img} className="imgforTablet" />
                </div>

                <div className="right_selectInfoforTablet">
                  <h1>{info.drug_name}</h1>
                  <h2 className="p-priceforTablet">{info.price}</h2>
                  <h2>{info.description}</h2>

                  {info.form ? (
                    <div className="formforTablet">
                      <h3> Форма выпуска:</h3>
                      <h3 className="h3-mapforTablet">{info.form}</h3>
                    </div>
                  ) : null}

                  <div className="formforTablet">
                    <h3>Страна производства:</h3>
                    <h3 className="h3-mapforTablet">{info.country}</h3>
                  </div>
                  <p className="p-infoforTablet">
                    Есть вероятность того, что товар может быть не в наличии. С
                    Вами свяжуться наши операторы!{" "}
                  </p>
                  {info.category_name ? (
                    <div className="formforTablet">
                      <h3> Категории</h3>
                      <h3>{info.category_name}</h3>
                    </div>
                  ) : null}

                  <div className="countsforTablet">
                    <div className="countforTablet">
                      {/*<button className='buttons'>*/}
                      <button
                        className="buttonsforTablet minusforTablet"
                        onClick={minus}
                      >
                        -
                      </button>
                      <button className="buttonsforTablet"> {count}</button>
                      <button
                        className="buttonsforTablet plusforTablet"
                        onClick={plus}
                      >
                        +
                      </button>

                      {/*</button>*/}
                    </div>
                    <button
                      onClick={() => clickToBasket(count)}
                      className="tobasketforTablet"
                    >
                      {" "}
                      В КОРЗИНУ
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/drugStore" className="no-selectforTablet">
                {" "}
                you should select product
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
