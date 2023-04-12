import React,{useEffect,useState} from "react"
import SlideCard from "./SlideCard"
import "./slick.css"

const Slide = ({search,getInfo}) => {
  //const CallbackInfo=CallbackInfo
   const [matches, setMatches] = useState(
     window.matchMedia("(max-width:768)").matches
   );
   useEffect(() => {
     window
       .matchMedia("(max-width:768)")
       .addEventListener("change", (e) => setMatches(e.matches));
   });
  return (
    <>
      {!matches && (
        <section className="homeSlide contentWidth">
          <div className="containerFirstSlideCard">
            <SlideCard search={search} getInfo={getInfo} />
          </div>
        </section>
      )}
      {matches && (
        <section className="homeSlide contentWidth">
          <div className="containerFirstSlideCardforTablets">
            <SlideCard search={search} getInfo={getInfo} />
          </div>
        </section>
      )}
    </>
  );         
}

export default Slide
