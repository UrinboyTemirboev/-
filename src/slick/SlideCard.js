import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./slick.css";
const SlideCard = ({ search, getInfo }) => {
  const [slide, setSlide] = useState([]);
  const [callBack, setCallBack] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/frequently")
      .then((response) => response.json())
      .then((json) => setSlide(json));
  }, []);
  //function SamplePrevArrow(props){
  //  const{className,style,onClick}=props
  //  return(
  //    <div className={className}
  //    style={{...style,display:"block",backgroundColor:"#fff"}}
  //    onClick={onClick}/>
  //  )
  //}

  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    //prevArrow:<SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 3,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  const [matches,setMatches]=useState(
    window.matchMedia("(max-width:768)").matches
  )
  useEffect(()=>{
     window.matchMedia("(max-width:768)")
     .addEventListener("change",(e)=>setMatches(e.matches))
  })
  return (
    <>
      
        <Slider {...settings}>
          {slide.map((value, index) => {
            return (
              <>
                <div className="box d_flex top" key={index}>
                  <div className="right">
                    <img src={value.img} alt="" className="img" />
                  </div>
                  <div className="left">
                    <h4>{value.drug_name}</h4>
                    <p> {value.form}</p>
                    <p className="p-price">{value.price}</p> <br />
                    <Link
                      to="/detailed"
                      className="btn-primary"
                      onClick={() => getInfo(value)}
                    >
                      {" "}
                      Подробное
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      
      {/*{matches && (
        <Slider {...settings}>
          {slide.map((value, index) => {
            return (
              <>
                <div className="boxforTablets" key={index}>
                  <div className="rightforTablets">
                    <img src={value.img} alt="" className="imgforTablets" />
                  </div>
                  <div className="leftforTablets">
                    <h4>{value.drug_name}</h4>
                    <p> {value.form}</p>
                    <p className="p-priceforTablets">{value.price}</p> <br />
                    <Link
                      to="/detailed"
                      className="btn-primaryforTablets"
                      onClick={() => getInfo(value)}
                    >
                      {" "}
                      Подробное
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      )}*/}
    </>
  );
};

export default SlideCard;
