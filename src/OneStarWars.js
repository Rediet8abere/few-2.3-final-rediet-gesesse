import React from 'react';
import './OneStarWar.css';

function OneStarWars(props) {
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender} = props.starWarsData
  
  return (
    <div className="OneStarWars">
        <ul> {name} </ul>
        <ul> {height} </ul>
        <ul> {mass} </ul>
        <ul> {hair_color} </ul>
        <ul> {skin_color} </ul>
        <ul> {eye_color} </ul>
        <ul> {birth_year} </ul>
        <ul> {gender} </ul>   
      </div>
  );
}

export default OneStarWars;