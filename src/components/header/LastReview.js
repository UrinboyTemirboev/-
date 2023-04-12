import React, { useEffect, useState } from 'react'
import "../../slick/slick.css"

export default function LastReview() {
    const lastReview=[
        { id:1,description:'Препарат не могла найти не где в городе, думала уже заказывать.. Написала, нашли в течении 3 минут! Цены на 15-25 сомони ниже аптек! Доставка! Спасибо большое!', location:"Инстаграм",nickName:'nazarova_kamila',img:'/img/firstperson.jpg'},
        { id:2,description:'Учитывала то как часто я болеть, дешевле чем в аптеке и оперативная доставка. Спасибо! ', location:"Инстаграм",nickName:'marianne_antipova',
        img:'/img/person.jpg'},
        { id:3,description:' Раз уж, тема пошла про лекарства и простуду, посоветую вам сервес доставки лекарств.Цены ниже чем в аптеках, проверила сама, а также очень удобно.Так как не всегда найдёшь все в одной аптеке!', location:"Инстаграм",nickName:'nazarova_kamila',img:'/img/thirdperson.jpg'}
    ]

    const [matches,setMatches]=useState(
      window.matchMedia("(max-width:768px)").matches
    )
    useEffect(()=>{
      window.matchMedia("(max-width:768px)")
      .addEventListener("change",(e)=>setMatches(e.matches))
    })
  return (
    <>
      {!matches && (
        <div className="last_review">
          {lastReview.map((review) => {
            return (
              <div key={review.id} className="column_review">
                <img src={review.img} />
                <p>{review.description}</p>
                <h3>{review.location}</h3>
                <p className="p2"> {review.nickName} </p>
              </div>
            );
          })}
        </div>
      )}
      {matches && (
        <div className="last_reviewforTablets">
          {lastReview.map((review) => {
            return (
              <div key={review.id} className="column_reviewforTablets">
                <img src={review.img} />
                <p>{review.description}</p>
                <h3>{review.location}</h3>
                <p className="p2forTablets"> {review.nickName} </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
