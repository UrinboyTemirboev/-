import React, { useState } from 'react'
import Rate from './Rate'

    const  Rating=()=> {
    const [rating,setRating]=useState(0)
    // module.exports =rating
  return (
    <div>
    
      <Rate rating={rating} onRating={(rate)=>setRating (rate)}/>
      {/*<p>{rating}</p>*/}
    </div>
  )
}
export default Rating;


