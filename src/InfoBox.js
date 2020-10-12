import React from 'react';
import './TripleInfoBox.css';

function InfoBox({icon, title, description}) {
  return (
    <div className="box">
        <img className="icon" src={icon}></img>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
    </div>
  );
}

export default InfoBox;
