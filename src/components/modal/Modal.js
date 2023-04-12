import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import "./modal.css"
import {Link} from "react-router-dom"

export default function Modal(props) {
  if (!props.show)
    return (
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h1>Корзина</h1>
            <button className='x-mark'>
            <FontAwesomeIcon icon={faXmark} onClick={props.showBasket} />
            </button>
        
          </div>
          <div   className='modal-body' >
            <div>
            <img src={props.detailed.img} className='img' />
            </div>
            

            <div className='modal-bodyInfo'>
              <div  className='info'>
              <h2>Имя товара:</h2>
              <h3>{props.detailed.drug_name}</h3>
              </div>
             <div className='info'>
             <h2> Цена:</h2>
             <p>{props.detailed.price}</p>
             </div>
              <div className='info'>
                <h2>Штук:</h2>
              <h3> {props.count}</h3>
              </div><br/>
             
              <Link to='/basket' className='sendTobasket' >Оформить заказ</Link>
            </div>


          </div>
          <div modal-footer>

          </div>

        </div>
      </div>
    )
}
