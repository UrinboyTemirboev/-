import React, { useState, useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

const TwoSlider = () => {
    const iteams = [
        { id: 1, title: "Также ищем лекарства за рубежем ", description: "Если не получается  найти лекарство в Таджикистане, мы займёмся его  поиском за рубежем. Оставьте заявку и убедитесь в этом.", button: 'ОСТАВИТЬ ЗАЯВКУ', img: '/img/foreign.png',   img2:'/img/globus.jpg' },
        { id: 2, desc: 'Не можете найти лекарство?', description: ' Yalla сервес быстрого  поиска нахождения всех видов  препаратов поможет вам. Не веритесь?', title1: " Тогда, дайте нам это доказать", button: 'ПРОВЕРИТЬ НАС',img:'/img/search.gif' }
    ]




    const settings = {
        dots: true,
        //prevArrow: $('.prev'),
        //nextArrow: $('.next'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "2px" }}>{dots}</ul>
        },
    }
    return (
        <>
            <Slider {...settings} >
                {iteams.map((value, index) => {
                    return (
                        <>
                            {value.id === 1 ? <div className='slide_body1forTablets' key={index} >
                                <div className='right'>

                                    <img src={value.img} alt='' className="oneImgforTablets" />

                                </div>
                                <div className='left_bodyforTablets'>
                                  
                                    <h2>{value.title}</h2>
                                    <p> {value.description}</p>
                                    <Link to="/findDrug"  className="left_bodyLinkforTablets">{value.button}</Link>

                                  
                                   
                                </div>

                            </div> : <div className='slide_body2forTablets' key={index} >
                                <div className='right_body2forTablets'>
                                    <p>{value.desc}</p>
                                    <p>{value.description}</p>
                                    <h2> {value.title1}</h2>
                                    <Link to="/findDrug" className="right_body2LinkforTablets">{value.button}</Link>
                                </div>
                                <div className='left_body2forTablets'>
                                    <img src={value.img} alt='' className="imgs" />
                                </div>

                            </div>}

                        </>
                    )
                })}





                {/*<>
                            <div className='slide'>
                            <div className='right'>
                                   <h1>Работаем </h1>
                                   <h1>круглосуточно 24/7</h1>  
                                </div>
                                <div className='left'>
                                    <img src="/images/resurs.png"/>
                                    <img src="/images/akvalor-1.png"/>
                                  
                                </div>
                               
                            </div>
                        </>*/}



            </Slider>
        </>
    )
}

export default TwoSlider;
