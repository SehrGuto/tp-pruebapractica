import React from 'react';
import './SportsCard.css';

const SportCard = ({ sport }) => {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div className={`sport-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="sport-card-inner">
        <div className="sport-card-front">
          <img src={sport.image} alt={sport.name} className="sport-image" />
          <h3>{sport.name}</h3>
        </div>
        <div className="sport-card-back">
          <p>{sport.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SportCard;