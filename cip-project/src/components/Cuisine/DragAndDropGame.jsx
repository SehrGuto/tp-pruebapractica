import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';
import DropZone from './DropZone';
import './Cuisine.css';
import foodImage from '../../assets/american-food-image.png';
import hotDogImage from '../../assets/hotdog.png';
import hamburgerImage from '../../assets/hamburguer.png';
import pizzaImage from '../../assets/pizza.png';
import applePieImage from '../../assets/applepie.png';

const initialImages = [
  { id: 'hot-dog', src: hotDogImage, alt: 'Hot Dog' },
  { id: 'hamburger', src: hamburgerImage, alt: 'Hamburger' },
  { id: 'pizza', src: pizzaImage, alt: 'Pizza Chicago Style' },
  { id: 'apple-pie', src: applePieImage, alt: 'Apple Pie' }
];

const Cuisine = () => {
  const [assignedImages, setAssignedImages] = useState({});

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      setAssignedImages((prev) => ({ ...prev, [over.id]: active.id }));
    }
  };

  return (
    <div className="cuisine-container">
      
      
      
            
      <div className="drag-drop-section">
        
        
        <p className="drag-drop-description">
          Drag the correct food images to their corresponding names:
        </p>

        <DndContext onDragEnd={handleDragEnd}>
          <div className="drop-zone-container">
            {initialImages.map(({ id, alt }) => (
              <DropZone key={id} id={id} label={alt}>
                {assignedImages[id] && <img src={initialImages.find(img => img.id === assignedImages[id]).src} alt={alt} className="small-image" />}
              </DropZone>
            ))}
          </div>

          <div className="image-container">
            {initialImages.map(({ id, src, alt }) => (
              !Object.values(assignedImages).includes(id) && <DraggableItem key={id} id={id} src={src} alt={alt} />
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default Cuisine;
