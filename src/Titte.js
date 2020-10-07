import React from 'react';
import './App.css';

function Title(props) {
  return (
    <div>
      <h1 className="name">{props.name}</h1>
    </div>
  );
}

export default Title;