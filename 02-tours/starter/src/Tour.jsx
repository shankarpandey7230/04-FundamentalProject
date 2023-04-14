import React from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={image} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
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
