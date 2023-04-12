import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/style.css";

export default function Catalogs({ getOneCategory }) {
  const [show, setShow] = useState(true);
  const [catalogs, setCatalogs] = useState();
  const [selected, setSelected] = useState();
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width:768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  });
  let menuRef = useRef();
  useEffect(() => {
    fetch("http://localhost:3003/catalog")
      .then((response) => response.json())
      .then((json) => setCatalogs(json));
    let click = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(true);
      }
    };
    document.addEventListener("mousedown", click);
  }, []);

  //const goTostore = (catalogs) => {
  //  setSelected(catalogs);
  //};
  const getAllCatalogs=(catalog)=>{
     getOneCategory(catalog);
    setShow(!show)
   
  }

  return (
    <>
      {!matches && (
        <div className="catalog">
          <div ref={menuRef}>
            <button className="catalogs" onClick={() => setShow(!show)}>
              <FontAwesomeIcon icon={faBars} className="icon-bar" />
              <h1 className="h1catalog"> Каталог товаров</h1>
            </button>

            {!show ? (
              <div className="modals">
                {catalogs
                  ? catalogs.map((catalog) => {
                      return (
                        <div
                          className="maping"
                          key={catalog.id}
                          onClick={() => getAllCatalogs(catalog)}
                        >
                          <Link to="/drugStore" className="categories_name">
                            {" "}
                            {catalog.categories_name}
                          </Link>
                        </div>
                      );
                    })
                  : null}
              </div>
            ) : null}
          </div>

          <div>
            <Link to="/sendFoto" className="link-send">
        
                Отправьте фото рецепта{" "}
             
            </Link>
            <Link to="/findDrug" className="link-send">
             Найдите дефицитное лекараство 
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
