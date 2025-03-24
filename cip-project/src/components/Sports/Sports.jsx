import React from 'react';
import './Sports.css';
import footballImage from '../../assets/football-player.png';
import SportsGrid from './SportsGrid';
import CultureBanner from '../Geography/CultureBanner';

const Sports = () => {
  return (
    <>
    <CultureBanner componentText={"In this category you will be able to win 46 points.  You will be able to check it in the avatar of the left menú."}
        />
        <div className="sports-page">
      <div className="breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-item active">Sports (6 points)</span>
      </div>

      <h1 className="page-title">Sports</h1>

      <div className="banner-image-container">
        <img src={footballImage} alt="American Football Player" className="banner-image" />
        <div className="decorative-elements"></div>
      </div>

      <div className="content-text">
        <p>
          American football is in many circumstances the sport with the most spectators; tens of millions of people watch the Super Bowl around the world. At the United States they also have many other popular sports like Baseball, Basketball, Ice hockey and Soccer. Being Hockey something that they share with Canada.
        </p>
      </div>

      <h2 className="section-title">Flip the cards to know more about some sports:</h2>
      <SportsGrid />
    </div>
    </>
    
  );
};

export default Sports;