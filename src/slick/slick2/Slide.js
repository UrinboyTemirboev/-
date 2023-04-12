import React from "react"
import SlideCard from "./SlideCard"
import "../slick.css"

const Slider = ({getInfo}) => {
  //const CallbackInfo=CallbackInfo
  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <SlideCard   getInfo={getInfo} />
          
        </div>
      </section>
    </>
  )
}

export default Slider;
