import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  // console.log(info.substring(0, 10));
  return (
    <article className="single-tour">
      <img src={image} alt={image} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}

          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readmore)}
          >
            {readmore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="btn"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not intersted
        </button>
      </div>
    </article>
  );
};

export default Tour;
