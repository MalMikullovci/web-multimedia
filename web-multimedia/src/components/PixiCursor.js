import React, { useEffect, useState, useRef } from 'react';
import { Stage, Sprite } from '@pixi/react';
import cursorImg from '../images/icons8-cursor-48.png';
import './pixiCursor.scss';

const PixiCursor = () => {
  const [appSize, setAppSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [spritePosition, setSpritePosition] = useState({
    x: appSize.width / 2,
    y: appSize.height / 2,
  });
  const spriteRef = useRef(null);

  const handleResize = () => {
    setAppSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const handleMouseMove = (event) => {
    setSpritePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = 'none';

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Show default cursor when component unmounts
      document.documentElement.style.cursor = 'auto';

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className='pixiCursor'
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      <Stage
        width={appSize.width}
        height={appSize.height}
        options={{ backgroundAlpha: 0, transparent: true }}
      >
        <Sprite
          image={cursorImg}
          anchor={0.5}
          x={spritePosition.x}
          y={spritePosition.y}
          ref={spriteRef}
        />
      </Stage>
    </div>
  );
};

export default PixiCursor;
