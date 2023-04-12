import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Catalogs from "../catalogs/Catalogs";
import {IoMdArrowDropdownCircle} from "react-icons/io"
import { Link } from "react-router-dom";
import Search from "../search/Search";
import "../styles/style.css";

export default function DrugStore({
  getInfo,
  getOneCategory,
  data,
  funcShowBar,
  showBars,
  setShowBars,
  getCount,
  select,
  setSelect
}) {
  const [drugs, setDrugs] = useState([]);
  const [drug, setDrug] = useState([]);
 
  const [beforeSelect, setBeforeSelect] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/catalog")
      .then((response) => response.json())
      .then((json) => setDrug(json));
    fetch("http://localhost:3003/frequently")
      .then((response) => response.json())
      .then((json) => setBeforeSelect(json));
    fetch("http://localhost:3003/drugs")
      .then((response) => response.json())
      .then((json) => setDrugs(json));
  }, []);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width:768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  });
  const callInfo = useEffect(() => {
    setDrug(callInfo);
  }, []);

 


 const [showCategories,setShowCategories]=useState(true)
   const BtnShowCategories=()=>{
    setShowCategories(!showCategories)
   }
     const onSelectTitle = (dru) => {
      //setSelect("hello");
       setSelect( dru);
       setShowCategories(!showCategories)
      
     };
     console.log("select:",select);
    
  return (
    <div>
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
      {!matches && (
        <>
          <div className="drug">
            <div>
              {select ? (
                <>
                  <h1>{select.categories_name}</h1>
                </>
              ) : (
                <h1>Аптека</h1>
              )}
            </div>

            {
              <div className="drug-categories">
                {drug &&
                  drug.map((dru) => {
                    return (
                      <>
                        <img
                          src={dru.categories_img}
                          alt=""
                          className="drugStoreImg"
                        />
                        <h3
                          key={dru.id}
                          onClick={() => onSelectTitle(dru)}
                          className="drugCatalogs"
                        >
                          {dru.categories_name}
                        </h3>
                      </>
                    );
                  })}
              </div>
            }
          </div>

          {select ? (
            <div className="select_drugs">
              {drugs
                .filter((dru) => dru.category_id === select.id)
                .map((dru) => {
                  return (
                    <div className="select-drug">
                      <img src={dru.img} alt="" className="img" />
                      <h5> {dru.drug_name}</h5>
                      <p>{dru.category_name}</p> <br />
                      <p className="p-price">{dru.price}</p> <br />
                      <Link
                        to="/detailed"
                        className="toBasket"
                        onClick={() => getInfo(dru)}
                      >
                        {" "}
                        В КОРЗИНУ
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="select_drugs">
              {beforeSelect.map((select) => {
                return (
                  <div className="select-drug">
                    <img src={select.img} alt="" className="img" />
                    <h5> {select.drug_name}</h5>
                    <p>{select.category_name}</p>
                    <p className="p-price">{select.price}</p> <br />
                    <Link
                      to="/detailed"
                      className="toBasket"
                      onClick={() => getInfo(select)}
                    >
                      {" "}
                      Подробное
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {matches && (
        <>
          <div className="drugforTablets">
            <div>
              {select ? (
                <>
                  <h1>{select.categories_name}</h1>
                </>
              ) : (
                <>
                  <h1>{select}</h1>
                </>
              )}
              <div
                onClick={BtnShowCategories}
                className="DropDownForShowCategories"
              >
                <h3>Категоры</h3>
                <IoMdArrowDropdownCircle className="iconDropDownForCategories" />
              </div>
            </div>
          </div>
          {!showCategories ? (
            <div className="drug-categoriesforTablets">
              {drug &&
                drug.map((dru) => {
                  return (
                    <div className="categories_ForTablets">
                      <img
                        src={dru.categories_img}
                        alt=""
                        className="drugStoreImgforTablets"
                      />
                      <h3
                        key={dru.id}
                        onClick={() => onSelectTitle(dru)}
                        className="drugCatalogsforTablets"
                      >
                        {dru.categories_name}
                      </h3>
                    </div>
                  );
                })}
            </div>
          ) : null}

          {select ? (
            <div className="select_drugs">
              {drugs
                .filter((dru) => dru.category_id === select.id)
                .map((dru) => {
                  return (
                    <div className="select-drug">
                      <img src={dru.img} alt="" className="img" />
                      <h5> {dru.drug_name}</h5>
                      <p>{dru.category_name}</p> <br />
                      <p className="p-price">{dru.price}</p> <br />
                      <Link
                        to="/detailed"
                        className="toBasket"
                        onClick={() => getInfo(dru)}
                      >
                        {" "}
                        В КОРЗИНУ
                      </Link>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="select_drugs">
              {beforeSelect.map((select) => {
                return (
                  <div className="select-drug">
                    <img src={select.img} alt="" className="img" />
                    <h5> {select.drug_name}</h5>
                    <p>{select.category_name}</p>
                    <p className="p-price">{select.price}</p> <br />
                    <Link
                      to="/detailed"
                      className="toBasket"
                      onClick={() => getInfo(select)}
                    >
                      {" "}
                      Подробное
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
