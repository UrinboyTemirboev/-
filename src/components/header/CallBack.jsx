import React, { useEffect } from 'react'
import { useState } from 'react'
import Footer from '../footer/Footer'
import Nav from './Nav'

export default function CallBack() {
        const [callBack, setCallBack]=useState({
                name:"",
                number:'',
                message:""
        })
        const  onChangeCallBack=(key)=>(e)=>{
                setCallBack({...callBack,[key]:e.target.value})
        }
        const sendCallBackInfo=()=>{
                fetch('http://localhost:3003/callBack', {
                        method: 'POST',
                        body: JSON.stringify(callBack),
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      })
                        .then((response) => response.json())
                        .then((json) => console.log(json));
                        setCallBack({
                          name: "",
                          number: "",
                          message: "",
                        });
                  
        }

        const [matches,setMatches]=useState(
                window.matchMedia("(max-width:768px)").matches
        )
        useEffect(()=>{
                window.matchMedia("(max-width:768px)")
                .addEventListener("change",(e)=>setMatches(e.matches)) 
        })
  return (
    <div>
      {!matches && (
        <div className="callBack">
          <h1>Обратный звонок</h1>
          <label className="callBack_label"> Как к вам обращаться</label>
          <input
            type="text"
            placeholder="Акаи Достон"
            className="callBack_input"
            value={callBack.name}
            onChange={onChangeCallBack("name")}
          />
          <label className="callBack_label"> Как с вами связаться</label>
          <input
            type="text"
            className="callBack_input"
            value={callBack.number}
            placeholder="99 999 99 99"
            onChange={onChangeCallBack("number")}
          />
          <label className="callBack_label"> Комментарий</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Хотите чтобы мы что-то уточнили перед звонком..."
            className="callBack_input"
            value={callBack.message}
            onChange={onChangeCallBack("message")}
          ></textarea>
          <button className="btn-send1" onClick={sendCallBackInfo}>
            Отправить
          </button>
        </div>
      )}

      {matches && (
        <div className="callBackforTablets">
          <h1>Обратный звонок</h1>
          <label className="callBack_labelforTablets">
            {" "}
            Как к вам обращаться
          </label>
          <input
            type="text"
            placeholder="Акаи Достон"
            className="callBack_inputforTablets"
            value={callBack.name}
            onChange={onChangeCallBack("name")}
          />
          <label className="callBack_labelforTablets">
            {" "}
            Как с вами связаться
          </label>
          <input
            type="text"
            className="callBack_inputforTablets"
            value={callBack.number}
            placeholder="99 999 99 99"
            onChange={onChangeCallBack("number")}
          />
          <label className="callBack_labelforTablets"> Комментарий</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Хотите чтобы мы что-то уточнили перед звонком..."
            className="callBack_inputforTablets"
            value={callBack.message}
            onChange={onChangeCallBack("message")}
          ></textarea>
          <button className="btn-send1forTablets" onClick={sendCallBackInfo}>
            Отправить
          </button>
        </div>
      )}
    </div>
  );
}
