import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component'

const Stars = () => {
    const [rating,setRating]= useState(1)
const onStarClick=(nextValue,preValue,name)=>{
    setRating(nextValue);
}
  return (
    <div>
      <input type="text"placeholder="serch a movie"/>
      <StarRatingComponent
      name="rate1"
      starCount={5}
      value={rating}
      onStarClick={onStarClick}
      />
    </div>
  )
}

export default Stars
