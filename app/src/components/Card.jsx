import React from "react";
import "../styles/card.css";

const Card = ({ e }) => {
  const { name, relDate, rating, img } = e;

  return (
    <div className="cards">
      <div className="img_div">
        <img src={img} alt="img" />
      </div>

      <div className="details">
        <h3>
          <span className="h1">Name: </span>
          {name}
        </h3>
        <p>
          IMDB Rating: <span className="p">{rating} </span>
        </p>
        <p>
          Release Date: <span className="p">{relDate} </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
