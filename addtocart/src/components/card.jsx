import React from 'react'
import "../styles/prod.css"

const Card = ({e, handleClick}) => {

const { title, author, price, img}=e;



  return (
    <div className="cards">
        <div className="image_box">
            <img src={img} alt="img"/>
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>{price}</p>
            <button onClick={()=>handleClick(e)}>Add To Cart</button>
        </div>
    </div>
  )
}

export default Card