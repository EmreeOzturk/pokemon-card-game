import React from "react";
import Cards from "./Cards";

const Dex = (props) => {
 
 
  let title;
  if(props.isWinner){
    title = <h2 style={{color:'#4caf50'}}>You Won!</h2>
  }else {
    title = <h2 style={{color:'#e91e63'}}>You Lost!</h2>
  }
  return (
   

    <div className="pokedex">
    {title}
    <h4>Total Exp: {props.exp}</h4>
      <div className="pokedex-cards ">
      
        {props.pokemon.map((card) => (
          <Cards key={card.id} card={card} />
        ))
        }
      </div>
    </div>
  );
  

};

export default Dex;
