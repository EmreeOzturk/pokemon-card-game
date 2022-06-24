import React from "react";
import Dex from "./Dex";

const Game = () => {
  const cards = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  let user1 = [];
  let user2 = [...cards];
  while(user1.length < user2.length) {
    let randomIndex = Math.floor(Math.random() * user2.length);
    let randomPokemon = user2.splice(randomIndex, 1)[0];
    user1.push(randomPokemon);
   
    }
    
    let exp1 = user1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = user2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  return <div>
    <Dex pokemon={user1} exp={exp1} isWinner={exp1>exp2} />
    <Dex pokemon={user2} exp={exp2} isWinner={exp1<exp2} />

  </div>;
};

export default Game;
