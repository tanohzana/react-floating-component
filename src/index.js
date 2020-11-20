import React, { useEffect, useState } from 'react';

const MAX_X = 10;
const MAX_Y = 10;

const FloatingComponent = ({ children }) => {
  const [positions, setPositions] = useState({ x: 0, y: 0, posX: 0, posY: 0 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newPositions = { ...positions };

      const randomX = (Math.random() * 20) - 10;
      const randomY = (Math.random() * 20) - 10;

      if (positions.posX + randomX < MAX_X) {
        newPositions.posX += randomX;
        newPositions.x = randomX;
      } else {
        newPositions.posX -= randomX;
        newPositions.x = -randomX;
      }

      if (positions.posY + randomY < MAX_Y) {
        newPositions.posY += randomY;
        newPositions.y = randomY;
      } else {
        newPositions.posY -= randomY;
        newPositions.y = -randomY;
      }

      setPositions(newPositions);
    }, 1000);

    return () => clearTimeout(timeout);
  });

  return (
    <div style={{ transitionDuration: '2000ms', transform: `translate3d(${positions.x}px, ${positions.y}px, 0)` }}>
      {children}
    </div>
  );
};

export default FloatingComponent;
