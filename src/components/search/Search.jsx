import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import "../styles/style.css";

export default function Search({
  getInfo,
  getCount,
  data,
  getOneCategory,
  funcShowBar,
  showBars,
  setShowBars,
  
}) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [catalogs, setCatalogs] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width:768px)").matches
  );
  
  const showAll = (funcShowBar) => {
    funcShowBar();
  };
  let menuRef = useRef();

  // fetching catalogs for show catalogName in table medium
  useEffect(() => {
    fetch("http://localhost:3003/catalog")
      .then((response) => response.json())
      .then((json) => setCatalogs(json));

    // fetching products for filter to  search
    fetch("http://localhost:3003/product")
      .then((response) => response.json())
      .then((json) => setProducts(json));
    // using
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    // close window when click outline
    let click = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowBars(false);
        setSearch("");
        setShowcategories(true);
      }
    };
    document.addEventListener("mousedown", click);
  }, []);

  const count = 0.0;
  const [shopping, setShopping] = useState(count);

  const [Showcategories, setShowcategories] = useState(true);
  const showAllCategory = () => {
    setShowcategories(false);
    setSearch("");
  };
  const showSelections = () => {
    setShowcategories(true);
    setSearch("");
  };
  const getAllCategory=(catalog)=>{
getOneCategory(catalog);
setShowBars(false);
  }

  return (
    // using QueryMedia for laptop
    <>
      {!matches && (
        <>
          <div className="searchs">
            <div className="search">
              <img src="/images/search.jpg" alt="" />
              <h3>yalla</h3>

              <input
                type="text"
                className="input-search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Поиск товаров..."
              />
              <button className="btn-input">
                <FontAwesomeIcon icon={faSearch} className="icon2" />
              </button>
            </div>
            <div className="search-phone">
              <p className="p-number">4440</p>
              <p className="p2"> КРУГЛОСУТОЧНО</p>
            </div>

            <div className="search-icons">
              <div className="cartCount">
                <FiShoppingCart className="search-icon" onClick={data} />
                <span className="countCart">{getCount}</span>
              </div>

              <p className="count-price"> {shopping} TJS</p>
            </div>
          </div>
          {search ? (
            <div className="search-components">
              {products
                .filter((value) => {
                  if (search === "") {
                    return;
                  } else if (
                    value.drug_name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((value) => {
                  return (
                    <Link
                      to="/detailed"
                      className=" search-component"
                      onClick={() => getInfo(value)}
                    >
                      <img src={value.img} alt="" className="search-img" />
                      <div>
                        <h5 className="search-name">{value.drug_name}</h5>
                        <p className="search-price">{value.price}</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </>
      )}

      {/*  using queryMedia for table */}
      {matches && (
        <>
          <div className="searchforTable">
            <FaBars className="searchBarsForTable" onClick={funcShowBar} />
            <h3>yalla</h3>
            <div className="phoneForTable">
              <p className="">4440</p>
              <span className="textPhoneForTable"> КРУГЛОСУТОЧНО</span>
            </div>
          </div>
          {showBars && (
            <>
              <div className="modalBarsForTable">
                <div className="modal-contentforTable" ref={menuRef}>
                  <div className="partInpunForTable">
                    <input
                      type="text"
                      placeholder="Поиск товаров.."
                      onChange={(e) => setSearch(e.target.value)}
                    />

                    <FontAwesomeIcon
                      icon={faSearch}
                      className="SearchIconForTable"
                    />
                  </div>{" "}
                  {search ? (
                    <div className="search-componentsForTable">
                      {products
                        .filter((value) => {
                          if (search === "") {
                            return;
                          } else if (
                            value.drug_name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return value;
                          }
                        })
                        .map((value) => {
                          return (
                            <span onClick={()=>setShowBars(false)}>
                              <Link
                                to="/detailed"
                                className=" search-componentForTable"
                                onClick={() => getInfo(value)}
                              >
                                <img
                                  src={value.img}
                                  alt=""
                                  className="search-imgForTable"
                                />
                                <div>
                                  <h5 className="search-nameForTable">
                                    {value.drug_name}
                                  </h5>
                                  <p className="search-priceForTable">
                                    {value.price}
                                  </p>
                                </div>
                              </Link>
                            </span>
                          );
                        })}
                    </div>
                  ) : null}
                  <div className="searchSectionsForTable">
                    <p
                      onClick={showSelections}
                      style={{
                        backgroundColor:
                          Showcategories === true ? "#ffffffec" : "",
                        borderBottom:
                          Showcategories === true ? "3px solid red" : 0,
                        transition: " color 1s linear",
                      }}
                    >
                      Разделы
                    </p>
                    <p
                      onClick={showAllCategory}
                      style={{
                        backgroundColor:
                          Showcategories === false ? "#ffffffec" : "",
                        borderBottom:
                          Showcategories === false ? "3px solid red" : 0,
                      }}
                    >
                      Категории{" "}
                    </p>
                  </div>
                  {!Showcategories && (
                    <>
                      {catalogs.map((catalog) => {
                        return (
                          <div onClick={() => getAllCategory(catalog)}>
                            <Link to="/drugStore" className="catalogForTable">
                              {catalog.categories_name}
                            </Link>
                          </div>
                        );
                      })}
                    </>
                  )}
                  {Showcategories && (
                    <>
                      <span onClick={() => setShowBars(false)}>
                        <Link to="/" className="linkForTableBar">
                          Главная
                        </Link>
                      </span>

                      <span onClick={() => setShowBars(false)}>
                        <Link to="/drugStore" className="linkForTableBar">
                          Аптека
                        </Link>
                      </span>

                      <span onClick={() => setShowBars(false)}>
                        <Link to="/faq" className="linkForTableBar">
                          {" "}
                          FAQ
                        </Link>
                      </span>

                      <span onClick={() => setShowBars(false)}>
                        <Link to="/review" className="linkForTableBar">
                          Отзывы
                        </Link>
                      </span>

                      <span onClick={() => setShowBars(false)}>
                        <Link to="/sendFoto" className="linkForTableBar">
                          {" "}
                          Отправьте фото рецепта
                        </Link>
                      </span>

                      <span onClick={() => setShowBars(false)}>
                        <Link to="/findDrug" className="linkForTableBar">
                          {" "}
                          Найдите дефицитное лекараство
                        </Link>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
