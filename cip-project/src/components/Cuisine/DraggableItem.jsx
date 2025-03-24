import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const DraggableItem = ({ id, src, alt }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    transition,
  };

  return (
    <img
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      src={src}
      alt={alt}
      className="draggable-image"
      style={style}
    />
  );
};

export default DraggableItem;
