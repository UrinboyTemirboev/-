import React, { useState,useEffect } from "react";
import Search from "../search/Search";
import Catalogs from "./Catalogs";
import { Link } from "react-router-dom";
import "../styles/style.css";

function FindDrug({ getInfo, data, funcShowBar, showBars, setShowBars,getCount,getOneCategory }) {
  const [find, setFind] = useState({
    drug_name: "",
    name: "",
    number: "",
    message: "",
    photo: "",
  });

  const [img, setImg] = useState(null);

  const onChange = (key) => (e) => {
    setFind({ ...find, [key]: e.target.value,[key]:e.target.files[0] });
  };
  //const photo = (key) => (e) => {
  //  setFind({ ...find, [key]: e.target.files[0] })
  //};

  const sendFile = () => {
    const formData = new FormData()
    for (let x = 0; x < find.photo.length; x++) {
      formData.append("photo", find.photo[x])
    }
    formData.append("name", find.name)
    formData.append("drug_name", find.drug_name)
    formData.append("number", find.number)
    formData.append("message", find.message)

    console.log(img);
    console.log(formData);
    fetch('http://localhost:3003/upload', {
      method: 'POST',
      body: formData,
     
    })
    //.then((response) => response.json())
    //.then((json) => console.log(json));
    console.log(find);
  }

  //const onClick = () => {
  //  fetch("http://localhost:3003/find", {
  //    method: "POST",
  //    body: JSON.stringify(find),
  //    headers: {
  //      "Content-type": "application/json; charset=UTF-8",
  //    },
  //  })
  //    .then((response) => response.json())
  //    .then((json) => console.log(json));
  //  setFind({
  //    drug_name: "",
  //    name: "",
  //    number: "",
  //    message: "",
  //    photo: "",
  //  });
  //};
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
            <h1 className="h1">Найдите дефицитное лекараство</h1>
            <p>
              {" "}
              <Link to="/" className="link">
                Главная
              </Link>
              /Найдите дефицитное лекараство
            </p>
          </div>

          <div className="infoRetsept">
            <label className="label">Как называется лекарство?</label>
            <input
              type="text"
              className="input"
              value={find.drug_name}
              onChange={onChange("drug_name")}
            />

            <label className="label">Как к вам обращаться?</label>
            <input
              type="text"
              className="input"
              value={find.name}
              onChange={onChange("name")}
            />
            <label className="label">
              Оставьте номер телефона, чтобы мы могли сообщить вам результаты
            </label>
            <input
              type="text"
              placeholder="+992 XXX XXX XXX"
              className="input"
              value={find.number}
              onChange={onChange("number")}
            />
            <label className="label">
              Хотите сообщить нам дополнительные сведения
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textArea"
              value={find.message}
              onChange={onChange("message")}
            ></textarea>
            <label className="label">Выберите изображение</label>

            <input
              type="file"
              className="input1"
              //accept="image/',.png,.jpeg,.jpg,.pdf"
              value={find.photo}
              onChange={"photo"}
            />
          </div>

          <button className="btn-send" onClick={sendFile}>
            ОТПРАВИТЬ РЕЦЕПТ
          </button>
        </>
      )}
      {matches && (
        <>
          <div className="sendPhotoforTablets">
            <h1 className="h1forTablets">Найдите дефицитное лекараство</h1>
            <p>
              {" "}
              <Link to="/" className="linkforTablets">
                Главная
              </Link>
              /Найдите дефицитное лекараство
            </p>
          </div>

          <div className="infoRetseptforTablets">
            <label className="labelforTablets">Как называется лекарство?</label>
            <input
              type="text"
              className="inputforTablets"
              value={find.drug_name}
              onChange={onChange("drug_name")}
            />

            <label className="labelforTablets">Как к вам обращаться?</label>
            <input
              type="text"
              className="inputforTablets"
              value={find.name}
              onChange={onChange("name")}
            />
            <label className="labelforTablets">
              Оставьте номер телефона, чтобы мы могли сообщить вам результаты
            </label>
            <input
              type="text"
              placeholder="+992 XXX XXX XXX"
              className="inputforTablets"
              value={find.number}
              onChange={onChange("number")}
            />
            <label className="labelforTablets">
              Хотите сообщить нам дополнительные сведения
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="textAreaforTablets"
              value={find.message}
              onChange={onChange("message")}
            ></textarea>
            <label className="labelforTablets">Выберите изображение</label>

            <input
              type="file"
              className="input1"
              accept="image/',.png,.jpeg,.jpg,.pdf"
              value={find.photo}
              onChange={"photo"}
            />
          </div>

          <button className="btn-sendforTablets" onClick={sendFile}>
            ОТПРАВИТЬ РЕЦЕПТ
          </button>
        </>
      )}
    </div>
  );
}

export default FindDrug;
