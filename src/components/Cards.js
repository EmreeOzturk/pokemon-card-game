import "../App.css";
import React from "react";

const Cards = ({ card }) => {
  return (
    <div className="card ">
      <h3 className="card-title">{card.name}</h3>
      <img
        className="card-img-top"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}
        alt="Card cap"
      />
      <div className="card-body">
        <p className="card-text">
          <strong>Type: </strong> {card.type}
        </p>
        <p>
          <strong>EXP: </strong>
          {card.base_experience}
        </p>
      </div>
    </div>
  );
};

export default Cards;
