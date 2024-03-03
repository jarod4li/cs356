// Card.js
import React from 'react';
import './styles.css';


const Card = ({ text }) => {
  return (
    <div className="card">
      <p>{text}</p>
    </div>
  );
};

export default Card;
