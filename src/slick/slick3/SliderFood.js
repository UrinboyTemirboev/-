import React from "react"
import SliderCard from "./SliderCard"
import "../slick.css"

const SliderFood = ({getInfo}) => {
  //const CallbackInfo=CallbackInfo
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SliderCard getInfo={getInfo}  />
          
        </div>
      </section>
    </>
  )
}

export default SliderFood;
