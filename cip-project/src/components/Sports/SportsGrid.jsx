import React from 'react';
import SportsCard from './SportsCard';
import './SportsGrid.css';
import baseballImage from '../../assets/person-usa.png';
import soccerImage from '../../assets/person-usa.png';
import volleyballImage from '../../assets/person-usa.png';
import softballImage from '../../assets/person-usa.png';
import iceSkiingImage from '../../assets/person-usa.png';
import curlingImage from '../../assets/person-usa.png';
import icehokeyImage from '../../assets/person-usa.png';
import iceskatingImage from '../../assets/person-usa.png';
import lacrosseImage from '../../assets/person-usa.png';
import golfImage from '../../assets/person-usa.png';
import nascarImage from '../../assets/person-usa.png';
import indycarImage from '../../assets/person-usa.png';


const sports = [
  { name: 'Baseball', image: baseballImage, description: 'A quintessential American pastime, enjoyed by many.' },
  { name: 'Soccer', image: soccerImage, description: 'The world’s most popular sport, played by millions globally.' },
  { name: 'Volleyball', image: volleyballImage, description: 'A fast-paced sport requiring teamwork and agility.' },
  { name: 'Softball', image: softballImage, description: 'Similar to baseball but played with a larger ball.' },
  { name: 'Ice Skiing', image: iceSkiingImage, description: 'A thrilling winter sport performed on snowy slopes.' },
  { name: 'Curling', image: curlingImage, description: 'A strategic winter sport involving sliding stones on ice.' },
  { name: 'Icehokey', image: curlingImage, description: 'bla bla bla' },
  { name: 'Ice Skating', image: curlingImage, description: 'bla bla bla' },
  { name: 'Lacrosse', image: curlingImage, description: 'bla bla bla' },
  { name: 'Golf', image: curlingImage, description: 'bla bla bla' },
  { name: 'Nascar', image: curlingImage, description: 'bla bla bla' },
  { name: 'IndyCar', image: curlingImage, description: 'bla bla bla' }
  
];

const SportsGrid = () => {
  return (
    <div className="sports-grid">
      {sports.map((sport, index) => (
        <SportsCard key={index} sport={sport} />
      ))}
    </div>
  );
};

export default SportsGrid;
