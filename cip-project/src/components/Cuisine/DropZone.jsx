import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const DropZone = ({ id, label, children }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="drop-zone">
      <span className="drop-zone-label">{label}</span>
      {children}
    </div>
  );
};

export default DropZone;
