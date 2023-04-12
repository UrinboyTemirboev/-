import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Admin from "./components/header/Admin";
import DrugStore from "./components/header/DrugStore";
import FAQ from "./components/header/FAQ";
import Reviews from "./components/header/Reviews";
import SendFoto from "./components/catalogs/SendFoto";
import FindDrug from "./components/catalogs/FindDrug";
import Policy from "./components/header/Policy";
import CallBack from "./components/header/CallBack";
import Home from "./components/header/Home";
import Detailed from "./detailed/Detailed";
import Footer from "./components/footer/Footer";
import Nav from "./components/header/Nav";
import ScrollTotop from "./components/header/ScrollTotop";
import Basket from "./components/header/Basket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./components/styles/style.css";
import {IoStorefrontOutline} from "react-icons/io5"
import {BsHandbag} from "react-icons/bs"
import {HiOutlineSearch} from "react-icons/hi"
import AfterBasket from "./components/header/AfterBasket";

export default function App() {
  const [info, setInfo] = useState();
  const getinfo = (select, dru, value) => {
    setInfo(select, dru, value);
  };
  const [selectCategory, setSelectCategory] = useState();
  const getSelect = (catalog) => {
    setSelectCategory(catalog);
  };

  const ShowAlert=()=>{
    return alert("hello")
  }

  const [counts, setCounts] = useState(0);
  const getCount = (count) => {
    
    let plus=counts+count
    setCounts(counts+count);
  };
  console.log(" count:", counts);

  const [products, setProducts] = useState([]);

  const [show, setShow] = useState(true);
   const showBasket = () => {
     setShow(!show);
   };
   const closeBasket=()=>{
    setShow(true)
   }
 
    
    const [showBars, setShowBars] = useState(false);
    const showAll = () => {
      setShowBars(!showBars);
    };
   const showBasket1 = () => {
     setProducts([...products, info])
   };
  console.log(products);
  
  const deleteProductFromCart=(id)=>{
    setProducts(
      products.filter((product) => {
        if (product.id !== id) {
          return id;
        }
      })
     
    );
    setCounts(0);
  }
  const[matches,setMatches]=useState(
    window.matchMedia("(max-width:768px)").matches
  )
  useEffect(()=>{
  window.matchMedia("(max-width:768px)")
  .addEventListener("change",(e)=>setMatches(e.matches))
  },[])

const [select, setSelect] = useState();
  const getOneCategory=(catalog)=>{
    setSelect(catalog)
  }
  //console.log(getCategory);
  let last;
  products.map((product)=>{
    return last=product.price*counts
  })
   const [CountDostavk, setCountDostavk] = useState(14238);
   const ShowCountDostavk = () => {
    
     setCountDostavk(CountDostavk);
   };
 
  return (
    <>
      <Nav />
      <ScrollTotop />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              getInfo={getinfo}
              getSelect={getSelect}
              data={showBasket}
              getOneCategory={getOneCategory}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
            />
          }
        />
        <Route
          path="/drugStore"
          element={
            <DrugStore
              getInfo={getinfo}
              getSelects={getSelect}
              data={showBasket}
              funcShowBar={showAll}
              select={select}
              setSelect={setSelect}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
              getOneCategory={getOneCategory}
            />
          }
        />
        <Route
          path="/faq"
          element={
            <FAQ
              getInfo={getinfo}
              data={showBasket}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
              getOneCategory={getOneCategory}
            />
          }
        />
        <Route
          path="/review"
          element={
            <Reviews
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
              getOneCategory={getOneCategory}
            />
          }
        />
        <Route
          path="/sendFoto"
          element={
            <SendFoto
              getInfo={getinfo}
              getSelect={getSelect}
              data={showBasket}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
              getOneCategory={getOneCategory}
            />
          }
        />
        <Route
          path="/findDrug"
          element={
            <FindDrug
              getInfo={getinfo}
              data={showBasket}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
              getOneCategory={getOneCategory}
            />
          }
        />
        <Route
          path="/policy"
          element={
            <Policy
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getCount={counts}
              getOneCategory={getOneCategory}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/callBack" element={<CallBack />} />
        <Route
          path="/detailed"
          element={
            <Detailed
              info={info}
              Counts={counts}
              data={showBasket}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              data1={showBasket1}
              getCount={getCount}
              getOneCategory={getOneCategory}
              close={closeBasket}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <Basket
              info={info}
              getInfo={getinfo}
              getCount={counts}
              setShow={setShow}
              show={show}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getOneCategory={getOneCategory}
              setCounts={setCounts}
              ShowAlert={ShowAlert}
              setInfo={setProducts}
              ShowCountDostavk={ShowCountDostavk}
            />
          }
        />
        <Route
          path="/afterBasket"
          element={
            <AfterBasket
              info={info}
              getInfo={getinfo}
              getCount={counts}
              setShow={setShow}
              show={show}
              funcShowBar={showAll}
              showBars={showBars}
              setShowBars={setShowBars}
              getOneCategory={getOneCategory}
              ShowCountDostavk={ShowCountDostavk}
              CountDostavk={CountDostavk}
            />
          }
        />
      </Routes>

      {!show ? (
        <div>
          {!matches && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h1>Корзина</h1>
                  <div className="close" onClick={closeBasket}>
                    <FontAwesomeIcon icon={faXmark} className="x-mark" />

                    <p> Закрыть</p>
                  </div>
                </div>

                {products.length > 0 ? (
                  <>
                    <div className="img-bodyInfos">
                      {products &&
                        products.map((product) => {
                          return (
                            <div className="img-bodyInfo">
                              <img src={product.img} className="imgInBasket" />

                              <div className="modal-bodyInfo">
                                <h5>{product.drug_name}</h5>
                                <p>
                                  {product.price}x{counts}
                                </p>
                              </div>
                              <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() =>
                                  deleteProductFromCart(product.id)
                                }
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className="modal-footer">
                      <div className="lastCount">
                        <h5>Подитог</h5>
                        <h5 className="p-price">{last}</h5>
                      </div>
                      <span onClick={closeBasket}>
                        <Link to="/basket" className="sendTobasket">
                          Оформить заказ
                        </Link>
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="emptyCartforLaptop">Корзина пустой</p>
                )}
              </div>
            </div>
          )}
          {matches && (
            <div className="modal">
              <div className="modal-content">
                <div className="modal-headerforTablet">
                  <h1>Корзина</h1>
                  <div className="closeforTablet" onClick={closeBasket}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="x-markforTablet"
                    />

                    <p> Закрыть</p>
                  </div>
                </div>

                {products.length > 0 ? (
                  <>
                    <div className="img-bodyInfosforTablet">
                      {products &&
                        products.map((product) => {
                          return (
                            <div className="img-bodyInfoforTablet">
                              <img src={product.img} className="imgInBasket" />

                              <div className="modal-bodyInfo">
                                <h5>{product.drug_name}</h5>
                                <p>
                                  {counts} x {product.price}
                                </p>
                              </div>
                              <FontAwesomeIcon
                                icon={faXmark}
                                onClick={() =>
                                  deleteProductFromCart(product.id)
                                }
                                className="x-mark"
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className="modal-footerforTablet">
                      <div className="lastCountforTbalet">
                        <h5>Подитог:</h5>
                        <h5> {last}</h5>
                      </div>
                      <span onClick={closeBasket}>
                        <Link to="/basket" className="sendTobasketforTablet">
                          Оформить заказ
                        </Link>
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="emptyCart">Корзина пустой</p>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}

      <Footer />

      {matches && (
        <div className="afterFooterForTablets">
          <Link to="/drugStore">
            <IoStorefrontOutline />
          </Link>
          <div className="cartCount">
            {" "}
            <BsHandbag onClick={showBasket} />
            <span className="countCart">{counts}</span>
          </div>

          <div>
            <HiOutlineSearch onClick={showAll} />
          </div>
        </div>
      )}
    </>
  );
}
