import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import Catalogs from "./Catalogs";
import "../styles/style.css";

export default function SendFoto({
  getInfo,
  getSelect,
  data,
  funcShowBar,
  showBars,
  setShowBars,
  getCount,
  getOneCategory,
}) {
  const [info, setInfo] = useState({
    photo: "",
    photo1: "",
    number: "",
    name: "",
    message: "",
  });

  const onChange = (key) => (e) => {
    setInfo({ ...info, [key]: e.target.value });
  };
  const file = (key) => (e) => {
    //  setInfo({...info,[key]:e.target.files[0]})
  };

  const onClick = () => {
    fetch("http://localhost:3003/post-info", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setInfo({
      photo: "",
      photo1: "",
      number: "",
      name: "",
      message: "",
    });
  };
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
          <div className="sendPhoto">
            <h1 className="h1">Отправьте фото рецепта</h1>
            <p>
              {" "}
              <Link to="/" className="link">
                Главная
              </Link>
              /Отправьте фото рецепта
            </p>
          </div>

          <div className="infoRetsept">
            <label className="label">Выберите изображение</label>
            <input type="file" className="input1" onChange={file("photo")} />
            <input type="file" className="input1" onChange={file("photo1")} />
            <label className="label">Как к вам обращаться?</label>
            <input
              type="text"
              className="input"
              value={info.name}
              onChange={onChange("name")}
            />
            <label className="label">
              Оставьте номер телефона, чтобы мы могли сообщить вам результаты
            </label>
            <input
              type="text"
              placeholder="+992 XXX XXX XXX"
              className="input"
              value={info.number}
              onChange={onChange("number")}
            />
            <label className="label">
              Хотите сообщить нам что-то, что мы должны учесть?
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textArea"
              value={info.message}
              onChange={onChange("message")}
            ></textarea>
          </div>

          <button className="btn-send" onClick={onClick}>
            ОТПРАВИТЬ РЕЦЕПТ
          </button>
        </>
      )}

      {matches && (
        <>
          <div className="sendPhotoforTablets">
            <h1 className="h1forTablets">Отправьте фото рецепта</h1>
            <p>
              {" "}
              <Link to="/" className="linkforTablets">
                Главная
              </Link>
              /Отправьте фото рецепта
            </p>
          </div>

          <div className="infoRetseptforTablets">
            <label className="labelforTablets">Выберите изображение</label>
            <input
              type="file"
              className="input1forTablets"
              onChange={file("photo")}
            />
            <input
              type="file"
              className="input1forTablets"
              onChange={file("photo1")}
            />
            <label className="labelforTablets">Как к вам обращаться?</label>
            <input
              type="text"
              className="inputforTablets"
              value={info.name}
              onChange={onChange("name")}
            />
            <label className="labelforTablets">
              Оставьте номер телефона, чтобы мы могли сообщить вам результаты
            </label>
            <input
              type="text"
              placeholder="+992 XXX XXX XXX"
              className="inputforTablets"
              value={info.number}
              onChange={onChange("number")}
            />
            <label className="labelforTablets">
              Хотите сообщить нам что-то, что мы должны учесть?
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textAreaforTablets"
              value={info.message}
              onChange={onChange("message")}
            ></textarea>
          </div>

          <button className="btn-sendforTablets" onClick={onClick}>
            ОТПРАВИТЬ РЕЦЕПТ
          </button>
        </>
      )}
    </div>
  );
}
