import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

const TwoSlider = () => {
    const iteams=[
        {id:1, title:"Работаем ", title1:"круглосуточна 24/7",img:'/images/resurs.png' },
        {id:2, title:" Онлайн заказ  лекарств ",title1:"Найдем и привезём", img:'/images/akvalor-1.png'}
    ]

    const [matches,setMatches]=useState(
        window.matchMedia("(max-width:1110px)").matches
    )
    
    useEffect(()=>{
        window.matchMedia("(max-width:1110px)")
        .addEventListener("change",(e)=>setMatches(e.matches));
    },[])
 
  
   
    const settings = {
        //dots: true,
        infinite: true,
        slidesToShow:  1,
        slidesToScroll: 1,
        autoplay: true,
        speed:500,
        appendDots: (dots) => {
            return <ul style={{ margin: "2px" }}>{dots}</ul>
        },
    }
    return (
        <>
           {!matches&& <Slider {...settings} >
            {iteams.map((value, index) => {
                    return (
                        <>
                        {value.id===1? <div className='slide' key={index} >
                            <div className='right'>
                                       <h1>{value.title}</h1>
                                    <h1> {value.title1}</h1>
                                </div>
                                <div className='left1'>
                                
                                <img src={value.img} alt='' className="imgs" />  
                                    
                                </div>
                               
                            </div>: <div className='slide_1' key={index} >
                            <div className='right'>
                                       <h1 >{value.title}</h1>
                                    <h1 > {value.title1}</h1>
                                      
                                </div>
                                <div className='left'>
                                
                                <img src={value.img} alt='' className="imgs" />  
                                    
                                </div>
                               
                            </div>}
            
                           
                        </>
                    )
                })}
              

                
                
                  
                      

              
                
            </Slider>
}

 {/* slideHeader for Table */}
 {matches&& <Slider {...settings} >
            {iteams.map((value, index) => {
                    return (
                      <>
                        {value.id === 1 ? (
                          <div className="slideforTable" key={index}>
                            <div className="rightforTable">
                              <img
                                src={value.img}
                                alt=""
                                className="imgforTable"
                              />
                            </div>
                            <div className="left1ForTable">
                              <h1>Работаем 24/7</h1>
                            </div>
                          </div>
                        ) : (
                          <div className="slide_1ForTable" key={index}>
                            <div className="right1ForTable">
                              <h1>{value.title}</h1>
                              <h1> {value.title1}</h1>
                            </div>
                          </div>
                        )}
                      </>
                    );
                })}
              

                
                
                  
                      

              
                
            </Slider>}
        </>

    )
}

export default TwoSlider;
