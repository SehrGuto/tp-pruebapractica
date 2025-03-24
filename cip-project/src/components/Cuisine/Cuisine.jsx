import React from 'react';
import './Cuisine.css';
import foodImage from '../../assets/american-food-image.png';
import DragAndDropGame from './DragAndDropGame';
import CultureBanner from '../Geography/CultureBanner';

const Cuisine = () => {
  return (
    <>
    <CultureBanner componentText={"In this category you will be able to win 46 points.  You will be able to check it in the avatar of the left menú."} />
    <div className="cuisine-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-item active">Cuisine (6 points)</span>
      </div>
      
      {/* Title */}
      <h1 className="cuisine-title">Cuisine</h1>
      
      {/* Main Image Banner */}
      <div className="cuisine-banner">
        <img 
          src={foodImage}
          alt="American cuisine with fries in a basket and hamburgers with US flags" 
          className="cuisine-banner-image"
        />
      </div>
      
      {/* Description Text */}
      <p className="cuisine-description">
        Traditionally, the gastronomy of The United States has been developed through a mixture of indigenous ingredients such as sweet potatoes, turkey and corn. In addition to a mixture of European ingredients such as milk, wheat flour and beef.
      </p>
      
      {/* Drag and Drop Section */}
      <div className="drag-drop-section">
        <h2 className="drag-drop-title">Drag and Drop</h2>
        <div className="pagination-indicator">1/2</div>
        
        <p className="drag-drop-description">
          The fast-food industry is the most prolific in the United States, but most of their recipes are brought by immigrants. Some of most popular dishes such as:
        </p>
        <DragAndDropGame />
      </div>
    </div>

    </>
    
  );
};

export default Cuisine;