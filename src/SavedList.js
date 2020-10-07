import React from 'react';
import './SaveList.css';


function SavedList(props) {

  console.log(" SavedList state---list", props.list)
  console.log("props.list", props.list)

  const listItems = props.list.map((char) =>
    <div key={char.name} className="ListItems">
      <li>{char.name}</li>
      <li>{char.height}</li>
      <li>{char.mass}</li>
      <li>{char.hair_color}</li>
      <li>{char.skin_color}</li>
      <li>{char.eye_color}</li>
      <li>{char.eye_color}</li>
      <li> {char.homeworld.climate} </li>
      <li> {char.homeworld.created} </li>
      <li> {char.homeworld.diameter} </li>
      <li> {char.homeworld.edited} </li>
      <li> {char.homeworld.gravity} </li>
      <li> {char.homeworld.homeWorldname} </li>
      <li> {char.homeworld.orbital_period} </li>
      <li> {char.homeworld.population} </li>
      <li> {char.homeworld.rotation_period} </li>
      <li> {char.homeworld.surface_water} </li>
      <li> {char.homeworld.terrain} </li>
    </div>
    
  );


  console.log("listItems", listItems)
  
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

export default SavedList;