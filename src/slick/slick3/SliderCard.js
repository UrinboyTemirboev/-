import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

const SliderCard = ({getInfo}) => {
    const [slide, setSlide] = useState([])
 

    // const  CallbackInfo=(value)=>{
         
    // setCallBack([...callBack,value])
    // }
  
    useEffect(() => {
        fetch('http://localhost:3003/frequently3')
            .then((response) => response.json())
            .then((json) => setSlide(json));

    }, [])
    const settings = {
        //dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "2px" }}>{dots}</ul>
        },
    }
    return (
        <>
            <Slider {...settings} >
                
                {slide.map((value, index) => {
                    return (
                        <>
                            <div className='box d_flex top' key={index} >
                            <div className='right'>
                                    <img src={value.img} alt='' className="img" />
                                </div>
                                <div className='left'>
                                    <h4  >
                                       {value.drug_name}</h4>
                                     
                                     <h4 className="h4-category"> {value.category_name}</h4>
                                    <p className="p-price">{value.price}</p> <br/>
                                    <Link to='/detailed' className="toBasket" onClick={()=>getInfo(value)}>Подробное</Link>
                                </div>
                               
                            </div>
                        </>
                    )
                })}
              
                
            </Slider>
        </>
    )
}

export default SliderCard
