import React, { useEffect, useState } from "react"
import "../slick.css"
import TwoSlider from "./TwoSlide"

const SliderHeader = () => {
  const [matches, setMatches]=useState(
    window.matchMedia("(max-width:768px)").matches
  )
  useEffect(()=>{
    window
    .matchMedia("(max-width:768px)")
    .addEventListener("change",(e)=>setMatches(e.matches))
  })
  return (
    <>
      <section className="homeSlide contentWidth">
        {!matches && (
          <div className="container">
            <TwoSlider />
          </div>
        )}
        {matches && (
          <div className="containerforTablets">
            <TwoSlider />
          </div>
        )}
      </section>
    </>
  );
}

export default SliderHeader;
